pragma solidity ^0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "./FDUToken.sol";

contract FDUCrowdsale is MintedCrowdsale, TimedCrowdsale, Ownable {
  constructor(
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address payable _wallet,
    ERC20Mintable _token
  )
    public
    Crowdsale(_rate, _wallet, _token)
    TimedCrowdsale(_openingTime, _closingTime)
  {
    
  }
}