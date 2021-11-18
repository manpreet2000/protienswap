// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFactory {
    function getExchange(address _tokenAddress) external returns (address);
}

interface IExchange {
    function getTokenToPttOutputPrice(uint256 _token_bought) external returns(uint256);
    function PttToTokenInputSwap(uint256 _ptt_sold, uint256 _min_token, uint256 deadline) external returns(uint256);
    function PttToTokenOutputSwap(uint256 _token_bought, uint256 _max_ptt, uint256 deadline) external returns(uint256);
}
contract Exchange is ERC20{
    event Liquidity(address indexed token, address indexed user, uint256 amount);
    address public tokenAddress;
    address public pttAddress;
    address public factory;
    constructor(address _token, address _ptt) public ERC20("ProtienExhange","PTE"){
        tokenAddress = _token;
        pttAddress = _ptt;
        factory = msg.sender;
    }
    function getReserve(address _tokenAddress) public view returns(uint256){
        IERC20 token = IERC20(_tokenAddress);
        return token.balanceOf(address(this));
    }
    
    function addLiquidity(uint256 _pttAmount,  uint256 _tokenAmount,uint256 _deadline) public returns(uint256){
        require(_deadline > block.timestamp,"time over");
        require(_pttAmount > 0 && _tokenAmount > 0 , "Wrong arguments");
        if(totalSupply() <= 0){
            IERC20 token = IERC20(tokenAddress);
            require(token.allowance(msg.sender,address(this)) >= _tokenAmount,"please approve the amount");
            token.transferFrom(msg.sender,address(this),_tokenAmount);
            IERC20 ptt = IERC20(pttAddress);
            require(ptt.allowance(msg.sender,address(this)) >= _pttAmount,"please approve the ptt amount");
            ptt.transferFrom(msg.sender,address(this),_pttAmount);
            
            _mint(msg.sender,_pttAmount);
            emit Liquidity(tokenAddress,msg.sender,_pttAmount);
            return _pttAmount;
        }
        else{
            uint256 pttReserve = getReserve(pttAddress);
            uint256 tokenReserve = getReserve(tokenAddress);
            uint256 tokenAmount = (_pttAmount * tokenReserve)/pttReserve;
            require(tokenAmount <= _tokenAmount,"tokenAmount is not right");
            
            IERC20 token = IERC20(tokenAddress);
            token.transferFrom(msg.sender,address(this),tokenAmount);
            
            IERC20 ptt = IERC20(pttAddress);
            ptt.transferFrom(msg.sender,address(this),_pttAmount);
            
            uint256 mintedLiquidity = (totalSupply() * _pttAmount)/pttReserve;
            
            _mint(msg.sender,mintedLiquidity);
            emit Liquidity(tokenAddress,msg.sender,mintedLiquidity);
            return mintedLiquidity;
        }
        
    }
    function removeLiquidity(uint256 _amount, uint256 _minppt, uint256 _mintoken, uint256 _deadline) public returns(uint256,uint256){
        require(_amount>0 && _minppt>0 && _mintoken>0 && _deadline>block.timestamp);
        require(totalSupply()>0,"empty pool");
        uint256 pttReserve = getReserve(pttAddress);
        uint256 tokenReserve = getReserve(tokenAddress);
        uint256 pttAmount = (pttReserve * _amount) / totalSupply();
        uint256 tokenAmount = (tokenReserve * _amount) / totalSupply();
        require(pttAmount>=_minppt && tokenAmount>=_mintoken,"min amount not reached");
        _burn(msg.sender,_amount);
        IERC20(tokenAddress).transfer(msg.sender, tokenAmount);
        IERC20(pttAddress).transfer(msg.sender, pttAmount);
        return (pttAmount,tokenAmount);
    }
    
    
    function getInputPrice(uint256 _inputAmount, uint256 _inputReserve, uint256 _outputReserve) private pure returns(uint256){
        require(_inputAmount>0 && _inputReserve>0 && _outputReserve>0,"Wrong arguments");
        uint256 inputAmountWithFees = _inputAmount * 997;
        uint256 num = inputAmountWithFees*_outputReserve;
        uint256 den = (_inputReserve * 1000) + inputAmountWithFees;
        return num/den;
    }
    function getOutputPrice(uint256 _outputAmount,uint256 _inputReserve, uint256 _outputReserve) private pure returns(uint256){
        require(_outputAmount>0 && _inputReserve>0 && _outputReserve>0,"Wrong arguments");
        uint256 num = _inputReserve * _outputAmount * 1000;
        uint256 den = (_outputReserve - _outputAmount) * 997;
        return num/den+1;
    }
    function getPttToTokenInputPrice(uint256 _ptt_sold) public returns(uint256) {
        require(_ptt_sold>0);
        uint256 pttReserve = getReserve(pttAddress);
        uint256 tokenReserve = getReserve(tokenAddress);
        uint256 tokenAmount = getInputPrice(_ptt_sold,pttReserve,tokenReserve);
        return tokenAmount;
    }
    
    function getPttToTokenOutputPrice(uint256 _token_bought) public returns(uint256) {
        require(_token_bought>0);
        uint256 pttReserve = getReserve(pttAddress);
        uint256 tokenReserve = getReserve(tokenAddress);
        uint256 pttAmount = getOutputPrice(_token_bought,pttReserve,tokenReserve);
        return pttAmount;
    }
    
    function getTokenToPttInputPrice(uint256 _token_sold) public returns(uint256) {
        require(_token_sold>0);
        uint256 pttReserve = getReserve(pttAddress);
        uint256 tokenReserve = getReserve(tokenAddress);
        uint256 pttAmount = getInputPrice(_token_sold,tokenReserve,pttReserve);
        return pttAmount;
    }
    function getTokenToPttOutputPrice(uint256 _ptt_bought) public returns(uint256) {
        require(_ptt_bought>0);
        uint256 pttReserve = getReserve(pttAddress);
        uint256 tokenReserve = getReserve(tokenAddress);
        uint256 tokenAmount = getOutputPrice(_ptt_bought,tokenReserve,pttReserve);
        return tokenAmount;
    }
    
    
    function PttToTokenInputSwap(uint256 _ptt_sold, uint256 _min_token, uint256 deadline) public returns(uint256){
        require(deadline >= block.timestamp && _ptt_sold > 0 && _min_token > 0, "Wrong arguments");
        uint256 tokenAmount = getPttToTokenInputPrice(_ptt_sold);
        require(tokenAmount >= _min_token, "Minimum token not achieved");
        IERC20(pttAddress).transferFrom(msg.sender,address(this),_ptt_sold);
        IERC20(tokenAddress).transfer(msg.sender, tokenAmount);
        return tokenAmount;
    }
    
    function PttToTokenOutputSwap(uint256 _token_bought, uint256 _max_ptt, uint256 deadline) public returns(uint256){
        require(deadline >= block.timestamp && _token_bought > 0 && _max_ptt > 0, "Wrong arguments");
        uint256 pttAmount = getPttToTokenOutputPrice(_token_bought);
        require(pttAmount <= _max_ptt, "Maximum token not achieved");
        IERC20(pttAddress).transferFrom(msg.sender,address(this),pttAmount);
        IERC20(tokenAddress).transfer(msg.sender, _token_bought);
        return pttAmount;
    }
    function TokentoPttInputSwap(uint256 _token_sold, uint256 _min_ptt, uint256 deadline) public returns(uint256){
        require(deadline >= block.timestamp && _token_sold>0 && _min_ptt > 0, "Wrong arguments");
        uint256 pttAmount = getTokenToPttInputPrice(_token_sold);
        require(pttAmount >= _min_ptt,"PTT not reached");
        IERC20(pttAddress).transfer(msg.sender,pttAmount);
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _token_sold);
        return pttAmount;
    }
    
    function TokentoPttOutputSwap(uint256 _ptt_bought, uint256 _max_token, uint256 deadline) public returns(uint256){
        require(deadline >= block.timestamp && _ptt_bought >0 && _max_token > 0, "Wrong arguments");
        uint256 tokenAmount = getTokenToPttOutputPrice(_ptt_bought);
        require(tokenAmount <= _max_token,"Token not reached");
        IERC20(pttAddress).transfer(msg.sender,_ptt_bought);
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), tokenAmount);
        return tokenAmount;
    }
    
    function TokenToTokenInput(uint256 _token_sold, uint256 _min_token_bought, uint256 deadline, address exchange_addr) private returns(uint256){
        require(deadline >= block.timestamp && _min_token_bought >0 && _token_sold > 0, "Wrong arguments");
        require(exchange_addr!=address(this) && exchange_addr != address(0));
        uint256 pttIntermediateAmount = getTokenToPttInputPrice(_token_sold);
        require(pttIntermediateAmount <= getReserve(pttAddress));
        uint256 token_bought = IExchange(exchange_addr).PttToTokenInputSwap(pttIntermediateAmount,_min_token_bought,deadline);
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _token_sold);
        return token_bought;
    }
    
    function TokenToTokenInputSwap(uint256 _token_sold, uint256 _min_token_bought, uint256 deadline,address _tokenaddr) public returns(uint256){
        require(deadline >= block.timestamp && _min_token_bought >0 && _token_sold > 0, "Wrong arguments");
        require(_tokenaddr!=address(0) && _tokenaddr!=tokenAddress);
        if(_tokenaddr == pttAddress) return TokentoPttInputSwap(_token_sold, _min_token_bought, deadline);
        address exchange_addr = IFactory(factory).getExchange(_tokenaddr);
        require(exchange_addr!=address(this) && exchange_addr != address(0));
        return TokenToTokenInput(_token_sold,_min_token_bought,deadline,exchange_addr);
    }
    
    function TokenToTokenOutput(uint256 _token_bought, uint256 _max_token_sold, uint256 deadline, address exchange_addr) private returns(uint256){
        require(deadline >= block.timestamp && _max_token_sold >0 && _token_bought > 0, "Wrong arguments");
        require(exchange_addr!=address(this) && exchange_addr != address(0));
        uint256 pttIntermediateAmount = IExchange(exchange_addr).getTokenToPttOutputPrice(_token_bought);
        uint256 tokenSold = getPttToTokenOutputPrice(pttIntermediateAmount);
        require(_max_token_sold <= tokenSold);
        uint256 token_bought = IExchange(exchange_addr).PttToTokenOutputSwap(_token_bought,_max_token_sold,deadline);
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), tokenSold);
        return token_bought;
    }
    
    function TokenToTokenOutputSwap(uint256 _token_bought, uint256 _max_token_sold, uint256 deadline,address _tokenaddr) public returns(uint256){
       require(deadline >= block.timestamp && _max_token_sold >0 && _token_bought > 0, "Wrong arguments");
        require(_tokenaddr!=address(0) && _tokenaddr!=tokenAddress);
        if(_tokenaddr == pttAddress) return TokentoPttOutputSwap(_token_bought, _max_token_sold, deadline);
        address exchange_addr = IFactory(factory).getExchange(_tokenaddr);
        require(exchange_addr!=address(this) && exchange_addr != address(0));
        return TokenToTokenOutput(_token_bought, _max_token_sold,deadline,exchange_addr);
    }
    
    
}