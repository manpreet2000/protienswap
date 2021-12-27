import {  UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { EtherService } from "../services/etherService";

const chainID = 4;
if(!chainID) console.log("Chain ID not present in env");
const injector = new InjectedConnector({supportedChainIds: [+chainID]});
export const useMetamask = () =>{
    const {active,...web3utils} = useWeb3React();
    const [loading,setLoading] = useState(false);
    const [currentChainID,setCurrentChainID] = useState<number>();
    const instance = EtherService.getInstance();

    useEffect(()=>{
        injector.isAuthorized().then((t)=>{
            if(t){
                web3utils.activate(injector,undefined,true).catch((err)=>{console.log("unsupported chain id")});
            }
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[web3utils.activate,instance]);
    useEffect(()=>{
        
        if(active){
            setCurrentChainID(web3utils.chainId);
        }
        else if(web3utils.error instanceof UnsupportedChainIdError){
            setCurrentChainID(web3utils.chainId);
        }
    },[active, web3utils.chainId, web3utils.error]);

    
    useEffect(()=>{

        if(web3utils.account){
            instance.setCurrentAccount(web3utils.account);
        }
    },[instance, web3utils.account]);
    
    useEffect(()=>{
        
        if(currentChainID && chainID!==currentChainID){
           console.log("unsupported chain id");
        }
    },[currentChainID]);

    const metamaskConnect = async ()=>{
        setLoading(true);
        try{
            await web3utils.activate(injector,undefined,true);
            setLoading(false);
        }
        catch(err){
            if(err instanceof UnsupportedChainIdError){
                await web3utils.activate(injector);
                const id = await injector.getChainId();
                setCurrentChainID(+id);
                console.log("unsupported chain id");
            }
        }
    }
    return {
        active,
        loading,
        metamaskConnect
    }
}