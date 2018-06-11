pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

// Main token smart contract
contract FDUToken is MintableToken {
  string public constant name = "Fondu Token";
  string public constant symbol = "FDU";
  uint8 public constant decimals = 18;
}