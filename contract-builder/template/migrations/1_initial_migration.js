const token = artifacts.require("../contracts/{{symbol}}Token.sol");
const crowdsale = artifacts.require("../contracts/{{symbol}}Crowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const rate = new web3.BigNumber({{rate}});
    const wallet = '{{wallet}}';{{migrationConstants}}
    return deployer
        .then(() => {
            return deployer.deploy(token);
        })
        .then(() => {
            return deployer.deploy(
                crowdsale,
                token.address,
                rate,
                wallet,{{migrationConstructorParams}}
            );
        })
        .then(() => {
            // Make smart-contract an owner
            var tokenContract = web3.eth.contract(token.abi).at(token.address);
            web3.eth.defaultAccount = web3.eth.accounts[0];
            tokenContract.transferOwnership(crowdsale.address);
        });
};