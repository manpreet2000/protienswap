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
  let WETH_PTT_Exchange;
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
    await factory.createExchange(Weth.address);
    const WETH_PTT_Exchange_addr = await factory.getExchange(Weth.address);
    // console.log("WETH add", WETH_PTT_Exchange_addr);
    WETH_PTT_Exchange = new ethers.Contract(
      WETH_PTT_Exchange_addr,
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
      const LiquidityMinted = await WETH_PTT_Exchange.addLiquidity(pttAmount,wethAmount,10000000);
      console.log(LiquidityMinted);
  })
});
