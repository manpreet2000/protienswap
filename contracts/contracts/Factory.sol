// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Exchange.sol";
contract Factory{
    address public ProtienTokenAddress;
    event ExchangeCreated(address indexed token, address indexed exchange);
    constructor(address _adr){
        ProtienTokenAddress = _adr;
    }
    mapping(address => address) private tokenToExchange;

    function createExchange(address _tokenAddress) public returns(address){
        require(_tokenAddress != address(0), "Invalid token address");
        require(tokenToExchange[_tokenAddress] == address(0), "Exchange already exists");

        Exchange exchange = new Exchange(_tokenAddress, ProtienTokenAddress);
        tokenToExchange[_tokenAddress] = address(exchange);
        emit ExchangeCreated(_tokenAddress,address(exchange));
        return address(exchange);
    }

    function getExchange(address _tokenAddress) public view returns(address){
        return tokenToExchange[_tokenAddress];
    }
}
