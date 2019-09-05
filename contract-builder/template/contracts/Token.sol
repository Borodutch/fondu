pragma solidity ^0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract {{symbol}}Token is ERC20Mintable {
  string public constant name = "{{name}}";
  string public constant symbol = "{{symbol}}";
  uint8 public constant decimals = {{decimals}};
}