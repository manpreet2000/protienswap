import {  useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { EtherService } from "../services/etherService";

const chainID = process.env.CHAIN_ID;
if(!chainID) throw new Error("Chain ID not present in env");
const injector = new InjectedConnector({supportedChainIds: [+chainID]});
export const useMetamask = () =>{
    const {active,...web3utils} = useWeb3React();
    const [loading,setLoading] = useState(false);
    const instance = EtherService.getInstance();
    useEffect(()=>{
        injector.isAuthorized().then((t)=>{
            if(t){
                web3utils.activate(injector,()=>{throw new Error("Change Network")});
            }
        });
        if(web3utils.account){
            instance.setCurrentAccount(web3utils.account);
        }
    },[web3utils,instance]);

    const metamaskConnect = async ()=>{
        setLoading(true);
        try{
            await web3utils.activate(injector);
            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }
    return {
        active,
        loading,
        metamaskConnect
    }
}