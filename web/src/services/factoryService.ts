import { ContractTransaction, ethers} from "ethers";
import { Token} from "../interfaces/token";
import {Contract} from "../interfaces/contract";
import { EtherService } from "./etherService";
import { Exchange__factory, Factory__factory } from "../types";

export class factoryService {

    private static instance:factoryService;
    private etherService:EtherService;
    private ProtienToken:Token;
    private ProtienFactory:Contract;
    private constructor(){
        this.etherService=EtherService.getInstance();
        this.ProtienToken={
            name:"Protien Token",
            symbol:"PTT",
            logoUrl:"",
            address:process.env.PROTIEN_TOKEN_ADDR as string,
            decimal:18
        }
        this.ProtienFactory={address:process.env.PROTIEN_FACTORY_ADDR as string}
    }

    public static getInstance():factoryService{
        if(this.instance) return this.instance;
        this.instance=new factoryService();
        return this.instance;
    }
    async approveProtienToken(amount: string): Promise<ContractTransaction> {
        const txn = await this.etherService.approveTokenAmount(
          amount,
          this.ProtienFactory.address,
          this.ProtienToken,
        );
        return txn;
      }
    async getExchange(tokenAddr:string):Promise<string>{
        const factoryContract = Factory__factory.connect(this.ProtienFactory.address,
            this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner);
        return factoryContract.getExchange(tokenAddr);
    }
    async createExchange(tokenAddr:string):Promise<ContractTransaction>{
        const factoryContract = Factory__factory.connect(this.ProtienFactory.address,
        this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner);
       return factoryContract.createExchange(tokenAddr);
    }

    async addLiquidity(PTTamount:string,TokenAmount:string):Promise<ContractTransaction>{
        const factoryContract = Factory__factory.connect(this.ProtienFactory.address,
            this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner);
        const exchangeContractAddr = await factoryContract.getExchange(TokenAmount);
        const exchangeContract = Exchange__factory.connect(exchangeContractAddr,
            this.etherService.provider?.getSigner(0) as ethers.providers.JsonRpcSigner);
        return exchangeContract.addLiquidity(ethers.BigNumber.from(PTTamount),
        ethers.BigNumber.from(TokenAmount),Date.now()*1000);
    }
}