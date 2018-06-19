pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

// Main token smart contract
contract {{symbol}}Token is MintableToken {
  string public constant name = "{{name}}";
  string public constant symbol = "{{symbol}}";
  uint8 public constant decimals = {{decimals}};
}