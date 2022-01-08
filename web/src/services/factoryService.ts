import { ContractTransaction, ethers } from "ethers";
import { Token } from "../interfaces/token";
import { Contract } from "../interfaces/contract";
import { EtherService } from "./etherService";
import { Exchange__factory, Factory__factory } from "../types";

export class factoryService {
  private static instance: factoryService;
  private etherService: EtherService;
  private ProtienToken: Token;
  private ProtienFactory: Contract;
  private constructor() {
    this.etherService = EtherService.getInstance();
    this.ProtienToken = {
      name: "Protien Token",
      symbol: "PTT",
      logoUrl: "",
      address: process.env.PROTIEN_TOKEN_ADDR as string,
      decimal: 18,
    };
    this.ProtienFactory = {
      address: process.env.PROTIEN_FACTORY_ADDR as string,
    };
  }

  public static getInstance(): factoryService {
    if (this.instance) return this.instance;
    this.instance = new factoryService();
    return this.instance;
  }
  async approveProtienToken(amount: string): Promise<ContractTransaction> {
    const txn = await this.etherService.approveTokenAmount(
      amount,
      this.ProtienFactory.address,
      this.ProtienToken
    );
    return txn;
  }
  async getExchange(tokenAddr: string): Promise<string> {
    const factoryContract = Factory__factory.connect(
      this.ProtienFactory.address,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    return factoryContract.getExchange(tokenAddr);
  }
  async createExchange(tokenAddr: string): Promise<ContractTransaction> {
    const factoryContract = Factory__factory.connect(
      this.ProtienFactory.address,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    return factoryContract.createExchange(tokenAddr);
  }

  async addLiquidity(
    PTTamount: string,
    TokenAmount: string,
    TokenAddr: string
  ): Promise<ContractTransaction> {
    const allowancePTT = await this.etherService.checkTokenAllowence(
      this.etherService.userAccount,
      this.ProtienFactory.address,
      this.ProtienToken
    );
    if (allowancePTT < PTTamount) {
      const tx = await this.etherService.approveToken(
        PTTamount,
        this.ProtienFactory.address,
        this.ProtienToken
      );
      await tx.wait();
    }
    const token: Token = await this.etherService.getTokenfromAddr(TokenAddr);
    const tokenAllowence = await this.etherService.checkTokenAllowence(
      this.etherService.userAccount,
      this.ProtienFactory.address,
      token
    );

    if (tokenAllowence < TokenAmount) {
      const tx = await this.etherService.approveToken(
        TokenAmount,
        this.ProtienFactory.address,
        token
      );
      await tx.wait();
    }

    const factoryContract = Factory__factory.connect(
      this.ProtienFactory.address,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    const exchangeContractAddr = await factoryContract.getExchange(TokenAddr);

    const exchangeContract = Exchange__factory.connect(
      exchangeContractAddr,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );

    const ptt = ethers.utils.parseUnits(PTTamount, this.ProtienToken.decimal);
    const tx2 = await exchangeContract.addLiquidity(
      ptt,
      ethers.utils.parseUnits(TokenAmount, token.decimal),
      Date.now() * 1000
    );
    await tx2.wait();
    return tx2;
  }
  async removeLiquidity(
    amount: string,
    TokenAddr: string,
    minPtt?: string,
    minToken?: string
  ): Promise<ContractTransaction> {
    const factoryContract = Factory__factory.connect(
      this.ProtienFactory.address,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    const exchangeContractAddr = await factoryContract.getExchange(TokenAddr);

    const exchangeContract = Exchange__factory.connect(
      exchangeContractAddr,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    const pttAmount = minPtt
      ? ethers.utils.parseUnits(minPtt, this.ProtienToken.decimal)
      : 0;
    const token = await this.etherService.getTokenfromAddr(TokenAddr);
    const tokenAmount = minToken
      ? ethers.utils.parseUnits(minToken, token.address)
      : 0;
    const tx = await exchangeContract.removeLiquidity(
      amount,
      pttAmount,
      tokenAmount,
      Date.now() * 1000
    );
    await tx.wait();
    return tx;
  }

  async swap(
    token1_addr: string,
    token1_amount: string,
    token2_addr: string,
    token2_amount: string
  ) :Promise<ContractTransaction>{
    const factoryContract = Factory__factory.connect(
      this.ProtienFactory.address,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    const exchangeContractAddr1 = await factoryContract.getExchange(
      token1_addr
    );

    const exchangeContract = Exchange__factory.connect(
      exchangeContractAddr1,
      this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner
    );
    const token1 = await this.etherService.getTokenfromAddr(token1_addr);
    const tx = await exchangeContract.TokenToTokenInputSwap(
      ethers.utils.parseUnits(token1_amount, token1.decimal),
      0,
      Date.now() * 1000,
      token2_addr
    );
    await tx.wait();
    return tx;
  }
}
