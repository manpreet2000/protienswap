import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import Exchange_ABI from "../abi/Exchange";

describe("factor only test cases", () => {
  let [owner, addr1, addr2]: SignerWithAddress[] = [];
  let Ptoken;
  let factory;
  let Weth;

  beforeEach("initiate protien token and factor", async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    const ProtienToken = await ethers.getContractFactory("ProtienToken");
    Ptoken = await ProtienToken.deploy("ProtienToken", "PTT", 21000000);
    await Ptoken.deployed();
    const PtokenAddress = Ptoken.address;
    const Factory = await ethers.getContractFactory("Factory");
    factory = await Factory.deploy(PtokenAddress);
    await factory.deployed();
    const WETH = await ethers.getContractFactory("WETH9");
    Weth = await WETH.deploy();
    await Weth.deployed();
  });

  it("get zero address for non initialized token contract", async () => {
    expect(await factory.getExchange(await Ptoken.address)).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });

  it("create WETH and PTT factory", async () => {
    const WETH_PTT_Exchange = await factory.createExchange(Weth.address);
    expect(WETH_PTT_Exchange).to.not.equal(
      "0x00000000000000000000000000000000000000000"
    );
  });
});

describe("factor to exchange tests", () => {
  let [owner, addr1, addr2]: SignerWithAddress[] = [];
  let Ptoken;
  let factory;
  let Weth;
  let Weth2;
  let WETH_PTT_Exchange2,WETH_PTT_Exchange_addr2;
  let WETH_PTT_Exchange,WETH_PTT_Exchange_addr;
  let exchange_abi = Exchange_ABI;
  beforeEach("initiate protien token and factor", async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    const ProtienToken = await ethers.getContractFactory("ProtienToken");
    Ptoken = await ProtienToken.deploy("ProtienToken", "PTT", 21000000);
    await Ptoken.deployed();
    const PtokenAddress = Ptoken.address;
    const Factory = await ethers.getContractFactory("Factory");
    factory = await Factory.deploy(PtokenAddress);
    await factory.deployed();
    const WETH = await ethers.getContractFactory("WETH9");
    Weth = await WETH.deploy();
    await Weth.deployed();
    const WETH2 = await ethers.getContractFactory("WETH9");
    Weth2 = await WETH2.deploy();
    await Weth2.deployed();

    await factory.createExchange(Weth.address);
    WETH_PTT_Exchange_addr = await factory.getExchange(Weth.address);
    // console.log("WETH add", WETH_PTT_Exchange_addr);
    WETH_PTT_Exchange = new ethers.Contract(
      WETH_PTT_Exchange_addr,
      exchange_abi,
      owner
    );
    await factory.createExchange(Weth2.address);
    WETH_PTT_Exchange_addr2 = await factory.getExchange(Weth2.address);
    // console.log("WETH add", WETH_PTT_Exchange_addr);
    WETH_PTT_Exchange2 = new ethers.Contract(
      WETH_PTT_Exchange_addr2,
      exchange_abi,
      owner
    );
  });
  it("check exchange contract information", async () => {
    const factor_addr = await WETH_PTT_Exchange.factory();
    const token_addr = await WETH_PTT_Exchange.tokenAddress();
    const pttAddress = await WETH_PTT_Exchange.pttAddress();
    expect(factory.address).to.equal(factor_addr);
    expect(token_addr).to.equal(Weth.address);
    expect(pttAddress).to.equal(Ptoken.address);
  });
  it("add Liquidity test",async ()=>{
      const pttDecimal = await Ptoken.decimals();
      const WethDecimal = await Weth.decimals();
      const pttAmount = BigNumber.from((100*10**pttDecimal).toString());
      const wethAmount = BigNumber.from((10*10**WethDecimal).toString());
      // const pttBalance = await Ptoken.balanceOf(owner.address);
      // console.log(pttBalance.toString());
      await Weth.deposit({value:(100 * 10**WethDecimal).toString() });
      // const WethBalance = await Weth.balanceOf(owner.address);
      // console.log(WethBalance.toString());
      await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount);
      await Weth.approve(WETH_PTT_Exchange_addr,wethAmount);
      const tx=await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,Date.now());
      // console.log(aa,owner.address);
      await tx.wait();
      const amount = await WETH_PTT_Exchange.totalSupply();
      expect(amount.toString()).to.equal(pttAmount);
      
      const pttAmount2 = BigNumber.from((10).toString());
      const wethAmount2 = BigNumber.from((1).toString());
      // const a=await WETH_PTT_Exchange.getReserve(Ptoken.address);
      // const b=await WETH_PTT_Exchange.getReserve(Weth.address);
      // console.log((pttAmount2.toNumber()*a) / b);
      await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount2);
      await Weth.approve(WETH_PTT_Exchange_addr,wethAmount2);
      const tx2=await WETH_PTT_Exchange.addLiquidity(pttAmount2,wethAmount2,Date.now());
      await tx2.wait();
      const amount2 = await WETH_PTT_Exchange.totalSupply();
      expect(amount2.toString()).to.equal(pttAmount.add(pttAmount2));
      
  });

  // it("add Liquidity test fail",async ()=>{
  //     const pttDecimal = await Ptoken.decimals();
  //     const WethDecimal = await Weth.decimals();
  //     const pttAmount = BigNumber.from((100*10**pttDecimal).toString());
  //     const wethAmount = BigNumber.from((10*10**WethDecimal).toString());
  //     // const pttBalance = await Ptoken.balanceOf(owner.address);
  //     // console.log(pttBalance.toString());
  //     await Weth.deposit({value:(100 * 10**WethDecimal).toString() });
  //     // const WethBalance = await Weth.balanceOf(owner.address);
  //     // console.log(WethBalance.toString());
  //     await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount);
  //     await Weth.approve(WETH_PTT_Exchange_addr,wethAmount);
  //     const tx=await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,Date.now());
  //     // console.log(aa,owner.address);
  //     await tx.wait();
  //     const amount = await WETH_PTT_Exchange.totalSupply();
  //     expect(amount.toString()).to.equal(pttAmount);
      
  //     const pttAmount2 = BigNumber.from((50).toString());
  //     const wethAmount2 = BigNumber.from((1).toString());
  //     await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount2);
  //     await Weth.approve(WETH_PTT_Exchange_addr,wethAmount2);
  //     await WETH_PTT_Exchange.addLiquidity(pttAmount2,wethAmount2,Date.now());
  // });

  it("remove Liquidity test",async ()=>{
    const pttDecimal = await Ptoken.decimals();
    const WethDecimal = await Weth.decimals();
    const pttAmount = BigNumber.from((100*10**pttDecimal).toString());
    const wethAmount = BigNumber.from((10*10**WethDecimal).toString());
    await Weth.deposit({value:(100 * 10**WethDecimal).toString() });
    await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount);
    await Weth.approve(WETH_PTT_Exchange_addr,wethAmount);
    const tx=await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,Date.now());
    await tx.wait();
    const amount = await WETH_PTT_Exchange.totalSupply();
    const tx2 = await WETH_PTT_Exchange.removeLiquidity(BigNumber.from((10*10**pttDecimal).toString()),1,1,Date.now());
    await tx2.wait();
    const ts = await WETH_PTT_Exchange.totalSupply();
    // console.log(ts.toString());
    expect(ts.toString()).to.equal("90000000000000000000");
    
});
it("swap ptt to token test",async ()=>{
  const pttDecimal = await Ptoken.decimals();
  const WethDecimal = await Weth.decimals();
  const pttAmount = BigNumber.from((100*10**pttDecimal).toString());
  const wethAmount = BigNumber.from((10*10**WethDecimal).toString());
  await Weth.deposit({value:(10 * 10**WethDecimal).toString() });
  await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount);
  await Weth.approve(WETH_PTT_Exchange_addr,wethAmount);
  const tx=await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,Date.now());
  await tx.wait();
  const amount1 = await Weth.balanceOf(owner.address);
  const amount2 =await Ptoken.balanceOf(owner.address);
  // console.log(amount1.toString(),amount2.toString());

  const pttSold = BigNumber.from((10*10**pttDecimal).toString());
  await Ptoken.approve(WETH_PTT_Exchange_addr,pttSold);
  const pr = await WETH_PTT_Exchange.getReserve(Ptoken.address);
  const tr = await WETH_PTT_Exchange.getReserve(Weth.address);
  const tx2=await WETH_PTT_Exchange.PttToTokenInputSwap(pttSold,1,Date.now());
  await tx2.wait();
  const amount = await Weth.balanceOf(owner.address);
  const amountt =await Ptoken.balanceOf(owner.address);
  // console.log(amount.toString(),amountt.toString());
  const pttprice = await WETH_PTT_Exchange.getInputPrice(pttSold,pr,tr);
  expect(pttprice.toString()).to.equal(amount.toString())
});
it("swap token to ptt test",async ()=>{
  const pttDecimal = await Ptoken.decimals();
  const WethDecimal = await Weth.decimals();
  const pttAmount = BigNumber.from((100*10**pttDecimal).toString());
  const wethAmount = BigNumber.from((10*10**WethDecimal).toString());
  await Weth.deposit({value:(100 * 10**WethDecimal).toString() });
  await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount);
  await Weth.approve(WETH_PTT_Exchange_addr,wethAmount);
  const tx=await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,Date.now());
  await tx.wait();
  const amount1 = await Weth.balanceOf(owner.address);
  const amount2 =await Ptoken.balanceOf(owner.address);
  // console.log(amount1.toString(),amount2.toString());
// 
  const tokenSold = BigNumber.from((1*10**pttDecimal).toString());
  await Weth.approve(WETH_PTT_Exchange_addr,tokenSold);
  const pr = await WETH_PTT_Exchange.getReserve(Ptoken.address);
  const tr = await WETH_PTT_Exchange.getReserve(Weth.address);
  const tx2=await WETH_PTT_Exchange.TokentoPttInputSwap(tokenSold,1,Date.now());
  await tx2.wait();
  const amount = await Weth.balanceOf(owner.address);
  const amountt =await Ptoken.balanceOf(owner.address);
  // console.log(amount.toString(),amountt.toString());
  const pttprice = await WETH_PTT_Exchange.getInputPrice(tokenSold,tr,pr);
  // expect(pttprice.toString()).to.equal(amount.toString())
});

it("swap token to token test",async ()=>{
  

  const pttDecimal = await Ptoken.decimals();
  const WethDecimal = await Weth.decimals();

  await Weth2.deposit({value:(30 * 10**WethDecimal).toString() });
  
  const pttAmount = BigNumber.from((100*10**pttDecimal).toString());
  const wethAmount = BigNumber.from((10*10**WethDecimal).toString());
  await Weth.deposit({value:(20 * 10**WethDecimal).toString() });
  await Ptoken.approve(WETH_PTT_Exchange_addr,pttAmount);
  await Weth.approve(WETH_PTT_Exchange_addr,wethAmount);
  const tx=await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,Date.now());
  await tx.wait();

  await Ptoken.approve(WETH_PTT_Exchange_addr2,pttAmount);
  await Weth2.approve(WETH_PTT_Exchange_addr2,wethAmount);
  const txx=await WETH_PTT_Exchange2.addLiquidity(pttAmount,wethAmount,Date.now());
  await txx.wait();

  const amount1 = await Weth.balanceOf(owner.address);
  const amount2 =await Weth2.balanceOf(owner.address);
  console.log(amount1.toString(),amount2.toString());

  const tokenSold = BigNumber.from((10*10**WethDecimal).toString());
  await Weth.approve(WETH_PTT_Exchange_addr,tokenSold);

  // const pr = await WETH_PTT_Exchange.getReserve(Ptoken.address);
  // const tr = await WETH_PTT_Exchange.getReserve(Weth.address);
  
  const tx2=await WETH_PTT_Exchange.TokenToTokenInputSwap(tokenSold,1,Date.now(),Weth2.address);
  await tx2.wait();
  const amount = await Weth.balanceOf(owner.address);
  const amountt =await Weth2.balanceOf(owner.address);
  console.log(amount.toString(),amountt.toString());
  // const pttprice = await WETH_PTT_Exchange.getInputPrice(tokenSold,tr,pr);
  // expect(pttprice.toString()).to.equal(amount.toString())
});


});
