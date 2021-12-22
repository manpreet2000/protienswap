import {  useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";


const chainID = process.env.CHAIN_ID;
if(!chainID) throw new Error("Chain ID not present in env");
const injector = new InjectedConnector({supportedChainIds: [+chainID]});
export const useMetamask = () =>{
    const web3utils = useWeb3React();
    const [loading,setLoading] = useState(false);

}