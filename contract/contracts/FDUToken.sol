pragma solidity ^0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract FDUToken is ERC20Mintable {
  string public constant name = "Fondu Token";
  string public constant symbol = "FDU";
  uint8 public constant decimals = 18;
}