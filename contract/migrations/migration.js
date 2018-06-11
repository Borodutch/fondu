var contract = artifacts.require("./FDUToken.sol");

module.exports = function(deployer) {
  deployer.deploy(contract);
};
