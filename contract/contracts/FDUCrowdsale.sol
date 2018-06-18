pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./FDUToken.sol";

contract FDUCrowdsale is MintedCrowdsale, TimedCrowdsale, Ownable {
  constructor(
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    MintableToken _token
  )
    public
    Crowdsale(_rate, _wallet, _token)
    TimedCrowdsale(_openingTime, _closingTime)
  {
    
  }

  function _getTokenAmount(uint256 _weiAmount)
    internal view returns (uint256)
  {
    uint256 actualRate = rate;
    if (block.timestamp < 1533081600) { // August 1st, 2018
      actualRate = actualRate * 4;
    } else if (block.timestamp < 1546300800) { // January 1st, 2019
      actualRate = actualRate * 2;
    }
    return _weiAmount.mul(actualRate);
  }
}