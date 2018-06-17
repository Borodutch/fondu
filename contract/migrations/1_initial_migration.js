const token = artifacts.require("../contracts/FDUToken.sol");
const crowdsale = artifacts.require("../contracts/FDUCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const openingTime = 1514764800; // 15 June 2018
    const closingTime = 1561939200; // 1 July 2019
    const rate = new web3.BigNumber(250); // 250 FDU per 1 wei
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
        })
        .then(() => {
            // Make smart-contract an owner
            var tokenContract = web3.eth.contract(token.abi).at(token.address);
            web3.eth.defaultAccount = web3.eth.accounts[0];
            tokenContract.transferOwnership(crowdsale.address);
        });
};