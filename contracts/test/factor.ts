import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";


describe("factor only test cases",()=>{
    let [owner,addr1,addr2]:SignerWithAddress[]=[];
    let Ptoken;
    let factory;
    let Weth;
    beforeEach("initiate protien token and factor",async ()=>{
        [owner,addr1,addr2] = await ethers.getSigners();
        const ProtienToken = await ethers.getContractFactory("ProtienToken");
        Ptoken = await ProtienToken.deploy("ProtienToken", "PTT", 21000000);
        await Ptoken.deployed();
        const PtokenAddress = Ptoken.address;
        const Factory = await ethers.getContractFactory("Factory");
        factory = await Factory.deploy(PtokenAddress);
        await factory.deployed();
        const WETH = await ethers.getContractFactory("WETH");
        Weth = await WETH.deploy();
        await Weth.deployed();
    });

    it("get zero address for non initialized token contract",async ()=>{
        expect(await factory.getExchange(await Ptoken.address)).to.equal("0x0000000000000000000000000000000000000000");
    });

});