const token = artifacts.require("../contracts/FDUToken.sol");
const crowdsale = artifacts.require("../contracts/FDUCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const openingTime = 1529020800; // 15 June 2018
    const closingTime = 1561939200; // 1 July 2019
    const rate = new web3.BigNumber(2.5); // 250 FDU per 1 wei
    const wallet = '0x1133ea57c14e1832be99d2093d4bc63e2de072e3';
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