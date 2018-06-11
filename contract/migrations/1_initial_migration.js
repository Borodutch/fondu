const token = artifacts.require("../contracts/FDUToken.sol");
const crowdsale = artifacts.require("../contracts/FDUCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const openingTime = 1530403200; // 1 July 2018
    const closingTime = 1561939200; // 1 July 2019
    const rate = new web3.BigNumber(250); // 250 FDU per 1 ETH (2.5e-16) // TODO: fix
    const wallet = accounts[1];
    return deployer
        .then(() => {
            return deployer.deploy(token);
        })
        .then(() => {
            return deployer.deploy(
                crowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                token.address
            );
        });
};