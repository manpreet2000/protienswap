import {ethers} from "ethers";
import {Token} from "../interfaces/token";
import detectEthereumProvider from '@metamask/detect-provider';
import {ERC20__factory} from "../types";

type MetamaskType = { 
    on:(event:string,handler:(accounts:Array<string>)=>void)=>void;
    request:(args:{method: string,params?: unknown[] | object})=>Promise<unknown>;
    selectedAddress: string | null;
};
type CustomProvider = ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined;

export class EtherService {
    private static instance:EtherService;
    public provider:CustomProvider;
    public userAccount: string;

    private constructor(){
        this.userAccount="";
    }

    /** 
    * Return instance of EtherService
    * This function make this class singletone
    * @returns EtherService instance 
    **/
    public static getInstance(): EtherService{
        if(this.instance) return this.instance;
        return this.instance = new EtherService(); 
    }

    public async getProvider():Promise<CustomProvider>{
        const metamask:MetamaskType = (await detectEthereumProvider()) as MetamaskType;
        return this.provider = new ethers.providers.Web3Provider(metamask);
    }

    setCurrentAccount(address: string): void {
        this.userAccount = address;
    }

    public getUserAddress(): string{
        return this.userAccount;
    }

    public async getUserBalance():Promise<string>{
        if(!this.provider) throw new Error("Metamask not connected");
        const balance:ethers.BigNumber = await this.provider.getBalance(this.userAccount);
        return ethers.utils.formatEther(balance);
    }

    public async approveToken(
        amount:string,
        to:string,
        token: Token
    ):Promise<ethers.ContractTransaction>{
        if(this.provider===undefined) throw new Error("Provider not set");

        const bigIntAmount =ethers.utils.parseUnits(amount, token.decimal);
        const erc20Instance = ERC20__factory.connect(
          token.address,
          this.provider.getSigner(0) as ethers.providers.JsonRpcSigner,
        );
        const tx: ethers.ContractTransaction = await erc20Instance.functions.approve(
          to,
          bigIntAmount.toString(),
        );
        await tx.wait();
        return tx;

    }

    public async checkTokenAllowence(
        ownerAddress:string,
        spenderAddress:string,
        token:Token
    ): Promise<string>{
        if(this.provider===undefined) throw new Error("Provider not set");
        const erc20Instance = ERC20__factory.connect(
            token.address,
            this.provider.getSigner(0) as ethers.providers.JsonRpcSigner,
        );
        const balance:ethers.BigNumber = await erc20Instance.allowance(ownerAddress,spenderAddress);
        const decimals = await erc20Instance.decimals();
        return ethers.utils.formatUnits(balance,decimals);
    }
    public async balanceOf(token: Token, address: string): Promise<string> {
        const tokenInstance = ERC20__factory.connect(
          token.address,
          this.provider as ethers.providers.JsonRpcProvider,
        );
    
        const balance: ethers.BigNumber = await tokenInstance.balanceOf(address);
    
        return ethers.utils.formatUnits(balance, token.decimal);
    }
    
    async approveTokenAmount(
        amount: string,
        to: string,
        token: Token,
      ): Promise<ethers.ContractTransaction> {
        const bigIntAmount = ethers.utils.parseUnits(amount, token.decimal);
        const erc20Instance = ERC20__factory.connect(
          token.address,
          this.provider?.getSigner(0) as ethers.providers.JsonRpcSigner,
        );
        const tx: ethers.ContractTransaction = await erc20Instance.functions.approve(
          to,
          bigIntAmount.toString(),
        );
        await tx.wait();
        return tx;
      }
    
    async getTokenfromAddr(addr:string):Promise<Token>{
        const erc20Instance = ERC20__factory.connect(
            addr,
            this.provider?.getSigner(0) as ethers.providers.JsonRpcSigner,
          );
        const name=await erc20Instance.name();
        const sym = await erc20Instance.symbol();
        const dec = await erc20Instance.decimals();
        return {
            name:name,
            symbol:sym,
            logoUrl:"",
            address:addr,
            decimal:dec
        }
    }


}


