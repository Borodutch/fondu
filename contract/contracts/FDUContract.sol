pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

// Main token smart contract
contract FDUToken is MintableToken {
  string public constant name = "Fondu Token";
  string public constant symbol = "FDU";
  uint8 public constant decimals = 18;
}

contract FonduCrowdsale is MintedCrowdsale {
  constructor(
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    MintableToken _token,
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
    if (block.timestamp < 1533081600) {
      rate = rate * 4;
    } else if (block.timestamp < 1546300800) {
      rate = rate * 2;
    }
    return _weiAmount.mul(actualRate);
  }
}