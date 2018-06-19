pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract {{symbol}}Crowdsale is MintedCrowdsale, Ownable{{contractOptions}} {
  constructor(
    MintableToken _token,
    uint256 _rate,
    address _wallet,
    {{contractParams}}
  )
    public
    Crowdsale(_rate, _wallet, _token)
    {{contractConstuctors}}
  {
    
  }
}