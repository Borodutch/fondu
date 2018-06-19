const token = artifacts.require("../contracts/Token.sol");
const crowdsale = artifacts.require("../contracts/Crowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const openingTime = {{openingTime}};
    const closingTime = {{closingTime}};
    const goal = {{goal}};
    const initialRate = {{initialRate}};
    const finalRate = {{finalRate}};
    const rate = new web3.BigNumber({{rate}});
    const wallet = {{beneficiary_address}};
    return deployer
        .then(() => {
            return deployer.deploy(token);
        })
        .then(() => {
            return deployer.deploy(
                crowdsale,
                token.address,
                openingTime,
                closingTime,
                rate,
                wallet,
            );
        })
        .then(() => {
            // Make smart-contract an owner
            var tokenContract = web3.eth.contract(token.abi).at(token.address);
            web3.eth.defaultAccount = web3.eth.accounts[0];
            tokenContract.transferOwnership(crowdsale.address);
        });
};