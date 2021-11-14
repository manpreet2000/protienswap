import { Contract } from "@ethersproject/contracts";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Protien token", async function () {
  let token: Contract;
  let [owner,addr1]:SignerWithAddress[]=[];
  beforeEach(async function () {
    const ProtienToken = await ethers.getContractFactory("ProtienToken");
    token = await ProtienToken.deploy("ProtienToken", "PTT", 21000000);
    await token.deployed();
    [owner,addr1] = await ethers.getSigners();
  });
  it("address", async () => {
    const addr = await token.address;
    // console.log(addr);
    expect(addr).not.equal("0x00");
  });
  it("Total supply", async () => {
    const totalSupply = BigNumber.from(await token.totalSupply());
    const expectedSupply = BigNumber.from("21000000000000000000000000");
    expect(totalSupply).to.equal(expectedSupply);
  });
  it("balance of owner",async ()=>{
      expect(BigNumber.from(await token.balanceOf(owner.address))).to.equal(BigNumber.from("21000000000000000000000000"));
  });
  it("transfer",async ()=>{
      const money=BigNumber.from((100*10**18).toString());
      await token.transfer(addr1.address,money);
      expect(BigNumber.from(await token.balanceOf(addr1.address))).to.equal(money);

  });

});
