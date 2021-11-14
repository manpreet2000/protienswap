/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Exchange, ExchangeInterface } from "../Exchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ptt",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ptt_sold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_min_token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "PttToTokenInputSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_bought",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_max_ptt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "PttToTokenOutputSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_sold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_min_token_bought",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenaddr",
        type: "address",
      },
    ],
    name: "TokenToTokenInputSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_bought",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_max_token_sold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenaddr",
        type: "address",
      },
    ],
    name: "TokenToTokenOutputSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_sold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_min_ptt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "TokentoPttInputSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ptt_bought",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_max_token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "TokentoPttOutputSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pttAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ptt_sold",
        type: "uint256",
      },
    ],
    name: "getPttToTokenInputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_bought",
        type: "uint256",
      },
    ],
    name: "getPttToTokenOutputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "getReserve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_sold",
        type: "uint256",
      },
    ],
    name: "getTokenToPttInputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ptt_bought",
        type: "uint256",
      },
    ],
    name: "getTokenToPttOutputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pttAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minppt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mintoken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200244d3803806200244d8339810160408190526200003491620001ad565b6040518060400160405280600e81526020016d50726f7469656e457868616e676560901b8152506040518060400160405280600381526020016250544560e81b81525081600390805190602001906200008f929190620000ea565b508051620000a5906004906020840190620000ea565b5050600580546001600160a01b039485166001600160a01b03199182161790915560068054939094169281169290921790925560078054909116331790555062000221565b828054620000f890620001e4565b90600052602060002090601f0160209004810192826200011c576000855562000167565b82601f106200013757805160ff191683800117855562000167565b8280016001018555821562000167579182015b82811115620001675782518255916020019190600101906200014a565b506200017592915062000179565b5090565b5b808211156200017557600081556001016200017a565b80516001600160a01b0381168114620001a857600080fd5b919050565b60008060408385031215620001c0578182fd5b620001cb8362000190565b9150620001db6020840162000190565b90509250929050565b600281046001821680620001f957607f821691505b602082108114156200021b57634e487b7160e01b600052602260045260246000fd5b50919050565b61221c80620002316000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806395d89b41116100f9578063c45a015511610097578063cfb4d98511610071578063cfb4d98514610370578063d071b17614610383578063dd62ed3e14610396578063f88bf15a146103a9576101b9565b8063c45a01551461034d578063c9a396e914610355578063cbeb5d5414610368576101b9565b8063a457c2d7116100d3578063a457c2d714610301578063a5d1c5f214610314578063a9059cbb14610327578063aa1b10981461033a576101b9565b806395d89b41146102d15780639d76ea58146102d95780639ff48a62146102ee576101b9565b80632d87777011610166578063422f104311610140578063422f104314610285578063551cabf314610298578063640f75fe146102ab57806370a08231146102be576101b9565b80632d8777701461024a578063313ce5671461025d5780633950935114610272576101b9565b806323b872dd1161019757806323b872dd1461021157806325b2a17e1461022457806327a4c54714610237576101b9565b806306fdde03146101be578063095ea7b3146101dc57806318160ddd146101fc575b600080fd5b6101c66103ca565b6040516101d39190611c09565b60405180910390f35b6101ef6101ea366004611a96565b61045c565b6040516101d39190611bfe565b610204610479565b6040516101d391906120d4565b6101ef61021f366004611a56565b61047f565b610204610232366004611b11565b610518565b610204610245366004611b11565b610693565b610204610258366004611b3c565b6107b3565b61026561090b565b6040516101d39190612101565b6101ef610280366004611a96565b610910565b610204610293366004611b11565b610964565b6102046102a6366004611ae1565b6109b9565b6102046102b9366004611ae1565b610a12565b6102046102cc3660046119e6565b610a62565b6101c6610a7d565b6102e1610a8c565b6040516101d39190611bad565b6102046102fc366004611b11565b610a9b565b6101ef61030f366004611a96565b610bbb565b610204610322366004611b3c565b610c34565b6101ef610335366004611a96565b610d79565b610204610348366004611b11565b610d8d565b6102e1610ead565b6102046103633660046119e6565b610ebc565b6102e1610f44565b61020461037e366004611ae1565b610f53565b610204610391366004611ae1565b610fa3565b6102046103a4366004611a1e565b610ff3565b6103bc6103b7366004611b7c565b61101e565b6040516101d39291906120dd565b6060600380546103d99061217d565b80601f01602080910402602001604051908101604052809291908181526020018280546104059061217d565b80156104525780601f1061042757610100808354040283529160200191610452565b820191906000526020600020905b81548152906001019060200180831161043557829003601f168201915b5050505050905090565b600061047061046961123c565b8484611240565b50600192915050565b60025490565b600061048c8484846112f4565b6001600160a01b0384166000908152600160205260408120816104ad61123c565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156104f95760405162461bcd60e51b81526004016104f090611e93565b60405180910390fd5b61050d8561050561123c565b858403611240565b506001949350505050565b600042821015801561052a5750600084115b80156105365750600083115b6105525760405162461bcd60e51b81526004016104f090611dee565b600061055d85610fa3565b90508381101561057f5760405162461bcd60e51b81526004016104f090612009565b6006546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906105b390339030908a90600401611bc1565b602060405180830381600087803b1580156105cd57600080fd5b505af11580156105e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106059190611ac1565b5060055460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906106389033908590600401611be5565b602060405180830381600087803b15801561065257600080fd5b505af1158015610666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068a9190611ac1565b50949350505050565b60004282101580156106a55750600084115b80156106b15750600083115b6106cd5760405162461bcd60e51b81526004016104f090611dee565b60006106d885610a12565b9050838111156106fa5760405162461bcd60e51b81526004016104f090611e5c565b6006546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061072e90339030908690600401611bc1565b602060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107809190611ac1565b5060055460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906106389033908990600401611be5565b60004283101580156107c55750600084115b80156107d15750600085115b6107ed5760405162461bcd60e51b81526004016104f090611dee565b6001600160a01b0382161580159061081357506005546001600160a01b03838116911614155b61081c57600080fd5b6006546001600160a01b03838116911614156108445761083d858585610a9b565b9050610903565b6007546040516303795fb160e11b81526000916001600160a01b0316906306f2bf6290610875908690600401611bad565b602060405180830381600087803b15801561088f57600080fd5b505af11580156108a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c79190611a02565b90506001600160a01b03811630148015906108ea57506001600160a01b03811615155b6108f357600080fd5b6108ff8686868461141e565b9150505b949350505050565b601290565b600061047061091d61123c565b84846001600061092b61123c565b6001600160a01b03908116825260208083019390935260409182016000908120918b168152925290205461095f919061210f565b611240565b60004282116109855760405162461bcd60e51b81526004016104f090611e25565b6000841180156109955750600083115b6109b15760405162461bcd60e51b81526004016104f090611dee565b509192915050565b60008082116109c757600080fd5b6006546000906109df906001600160a01b0316610ebc565b6005549091506000906109fa906001600160a01b0316610ebc565b90506000610a09858385611637565b95945050505050565b6000808211610a2057600080fd5b600654600090610a38906001600160a01b0316610ebc565b600554909150600090610a53906001600160a01b0316610ebc565b90506000610a098584846116be565b6001600160a01b031660009081526020819052604090205490565b6060600480546103d99061217d565b6005546001600160a01b031681565b6000428210158015610aad5750600084115b8015610ab95750600083115b610ad55760405162461bcd60e51b81526004016104f090611dee565b6000610ae085610f53565b905083811115610b025760405162461bcd60e51b81526004016104f090611d18565b60065460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90610b349033908990600401611be5565b602060405180830381600087803b158015610b4e57600080fd5b505af1158015610b62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b869190611ac1565b506005546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061063890339030908690600401611bc1565b60008060016000610bca61123c565b6001600160a01b0390811682526020808301939093526040918201600090812091881681529252902054905082811015610c165760405162461bcd60e51b81526004016104f090612077565b610c2a610c2161123c565b85858403611240565b5060019392505050565b6000428310158015610c465750600084115b8015610c525750600085115b610c6e5760405162461bcd60e51b81526004016104f090611dee565b6001600160a01b03821615801590610c9457506005546001600160a01b03838116911614155b610c9d57600080fd5b6006546001600160a01b0383811691161415610cbe5761083d858585610d8d565b6007546040516303795fb160e11b81526000916001600160a01b0316906306f2bf6290610cef908690600401611bad565b602060405180830381600087803b158015610d0957600080fd5b505af1158015610d1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d419190611a02565b90506001600160a01b0381163014801590610d6457506001600160a01b03811615155b610d6d57600080fd5b6108ff8686868461174a565b6000610470610d8661123c565b84846112f4565b6000428210158015610d9f5750600084115b8015610dab5750600083115b610dc75760405162461bcd60e51b81526004016104f090611dee565b6000610dd2856109b9565b905083811015610df45760405162461bcd60e51b81526004016104f090612040565b60065460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90610e269033908590600401611be5565b602060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190611ac1565b506005546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061063890339030908a90600401611bc1565b6007546001600160a01b031681565b6040516370a0823160e01b815260009082906001600160a01b038216906370a0823190610eed903090600401611bad565b60206040518083038186803b158015610f0557600080fd5b505afa158015610f19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3d9190611af9565b9392505050565b6006546001600160a01b031681565b6000808211610f6157600080fd5b600654600090610f79906001600160a01b0316610ebc565b600554909150600090610f94906001600160a01b0316610ebc565b90506000610a098583856116be565b6000808211610fb157600080fd5b600654600090610fc9906001600160a01b0316610ebc565b600554909150600090610fe4906001600160a01b0316610ebc565b90506000610a09858484611637565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000806000861180156110315750600085115b801561103d5750600084115b801561104857504283115b61105157600080fd5b600061105b610479565b116110785760405162461bcd60e51b81526004016104f090611f8e565b600654600090611090906001600160a01b0316610ebc565b6005549091506000906110ab906001600160a01b0316610ebc565b905060006110b7610479565b6110c18a85612147565b6110cb9190612127565b905060006110d7610479565b6110e18b85612147565b6110eb9190612127565b90508882101580156110fd5750878110155b6111195760405162461bcd60e51b81526004016104f090611ce1565b611123338b6118f4565b60055460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906111559033908590600401611be5565b602060405180830381600087803b15801561116f57600080fd5b505af1158015611183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a79190611ac1565b5060065460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906111da9033908690600401611be5565b602060405180830381600087803b1580156111f457600080fd5b505af1158015611208573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122c9190611ac1565b5090999098509650505050505050565b3390565b6001600160a01b0383166112665760405162461bcd60e51b81526004016104f090611fc5565b6001600160a01b03821661128c5760405162461bcd60e51b81526004016104f090611d4f565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906112e79085906120d4565b60405180910390a3505050565b6001600160a01b03831661131a5760405162461bcd60e51b81526004016104f090611f31565b6001600160a01b0382166113405760405162461bcd60e51b81526004016104f090611c5c565b61134b8383836119e1565b6001600160a01b038316600090815260208190526040902054818110156113845760405162461bcd60e51b81526004016104f090611d91565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906113bb90849061210f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161140591906120d4565b60405180910390a36114188484846119e1565b50505050565b60004283101580156114305750600084115b801561143c5750600085115b6114585760405162461bcd60e51b81526004016104f090611dee565b6001600160a01b038216301480159061147957506001600160a01b03821615155b61148257600080fd5b60405163cfb4d98560e01b81526000906001600160a01b0384169063cfb4d985906114b19089906004016120d4565b602060405180830381600087803b1580156114cb57600080fd5b505af11580156114df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115039190611af9565b9050600061151082610a12565b90508086111561151f57600080fd5b6040516327a4c54760e01b81526000906001600160a01b038616906327a4c54790611552908b908b908b906004016120eb565b602060405180830381600087803b15801561156c57600080fd5b505af1158015611580573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a49190611af9565b6005546040516323b872dd60e01b81529192506001600160a01b0316906323b872dd906115d990339030908790600401611bc1565b602060405180830381600087803b1580156115f357600080fd5b505af1158015611607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162b9190611ac1565b50979650505050505050565b600080841180156116485750600083115b80156116545750600082115b6116705760405162461bcd60e51b81526004016104f090611dee565b600061167e856103e5612147565b9050600061168c8483612147565b905060008261169d876103e8612147565b6116a7919061210f565b90506116b38183612127565b979650505050505050565b600080841180156116cf5750600083115b80156116db5750600082115b6116f75760405162461bcd60e51b81526004016104f090611dee565b60006117038585612147565b61170f906103e8612147565b9050600061171d8685612166565b611729906103e5612147565b90506117358183612127565b61174090600161210f565b9695505050505050565b600042831015801561175c5750600084115b80156117685750600085115b6117845760405162461bcd60e51b81526004016104f090611dee565b6001600160a01b03821630148015906117a557506001600160a01b03821615155b6117ae57600080fd5b60006117b9866109b9565b6006549091506117d1906001600160a01b0316610ebc565b8111156117dd57600080fd5b6040516312d950bf60e11b81526000906001600160a01b038516906325b2a17e906118109085908a908a906004016120eb565b602060405180830381600087803b15801561182a57600080fd5b505af115801561183e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118629190611af9565b6005546040516323b872dd60e01b81529192506001600160a01b0316906323b872dd9061189790339030908c90600401611bc1565b602060405180830381600087803b1580156118b157600080fd5b505af11580156118c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e99190611ac1565b509695505050505050565b6001600160a01b03821661191a5760405162461bcd60e51b81526004016104f090611ef0565b611926826000836119e1565b6001600160a01b0382166000908152602081905260409020548181101561195f5760405162461bcd60e51b81526004016104f090611c9f565b6001600160a01b038316600090815260208190526040812083830390556002805484929061198e908490612166565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906119d19086906120d4565b60405180910390a36119e1836000845b505050565b6000602082840312156119f7578081fd5b8135610f3d816121ce565b600060208284031215611a13578081fd5b8151610f3d816121ce565b60008060408385031215611a30578081fd5b8235611a3b816121ce565b91506020830135611a4b816121ce565b809150509250929050565b600080600060608486031215611a6a578081fd5b8335611a75816121ce565b92506020840135611a85816121ce565b929592945050506040919091013590565b60008060408385031215611aa8578182fd5b8235611ab3816121ce565b946020939093013593505050565b600060208284031215611ad2578081fd5b81518015158114610f3d578182fd5b600060208284031215611af2578081fd5b5035919050565b600060208284031215611b0a578081fd5b5051919050565b600080600060608486031215611b25578283fd5b505081359360208301359350604090920135919050565b60008060008060808587031215611b51578081fd5b8435935060208501359250604085013591506060850135611b71816121ce565b939692955090935050565b60008060008060808587031215611b91578384fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6000602080835283518082850152825b81811015611c3557858101830151858201604001528201611c19565b81811115611c465783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526016908201527f6d696e20616d6f756e74206e6f74207265616368656400000000000000000000604082015260600190565b60208082526011908201527f546f6b656e206e6f742072656163686564000000000000000000000000000000604082015260600190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600f908201527f57726f6e6720617267756d656e74730000000000000000000000000000000000604082015260600190565b60208082526009908201527f74696d65206f7665720000000000000000000000000000000000000000000000604082015260600190565b6020808252601a908201527f4d6178696d756d20746f6b656e206e6f74206163686965766564000000000000604082015260600190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600a908201527f656d70747920706f6f6c00000000000000000000000000000000000000000000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601a908201527f4d696e696d756d20746f6b656e206e6f74206163686965766564000000000000604082015260600190565b6020808252600f908201527f505454206e6f7420726561636865640000000000000000000000000000000000604082015260600190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b918252602082015260400190565b9283526020830191909152604082015260600190565b60ff91909116815260200190565b60008219821115612122576121226121b8565b500190565b60008261214257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612161576121616121b8565b500290565b600082821015612178576121786121b8565b500390565b60028104600182168061219157607f821691505b602082108114156121b257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146121e357600080fd5b5056fea264697066735822122088e8c5528866d4f6e90a356953651d2719ab491383ec47329bc516fa2426658164736f6c63430008000033";

type ExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Exchange__factory extends ContractFactory {
  constructor(...args: ExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _token: string,
    _ptt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Exchange> {
    return super.deploy(_token, _ptt, overrides || {}) as Promise<Exchange>;
  }
  getDeployTransaction(
    _token: string,
    _ptt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _ptt, overrides || {});
  }
  attach(address: string): Exchange {
    return super.attach(address) as Exchange;
  }
  connect(signer: Signer): Exchange__factory {
    return super.connect(signer) as Exchange__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeInterface {
    return new utils.Interface(_abi) as ExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Exchange {
    return new Contract(address, _abi, signerOrProvider) as Exchange;
  }
}
