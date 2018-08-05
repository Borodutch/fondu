const request = require('sync-request')

module.exports = function(callback) {
  const account = web3.personal.newAccount('123456789')
  console.log(`Created ETH wallet to deploy contracts: ${account} (password is '123456789', don't loose it)`)
  console.log(`Requesting 1 ETH to ${account} (http://faucet.ropsten.be:3001/donate/${account})`)
  request('GET', `http://faucet.ropsten.be:3001/donate/${account}`)
  console.log('Requested, waiting on the Ethereum node to sync and then 15 seconds to receive test ETH...')
  setTimeout(() => {
    checkBalance(account, callback)
  }, 15 * 1000)
}

function checkBalance(account, callback) {
  console.log(account, web3.eth)
  if (balance.toNumber() > 0) {
    console.log(`Received 1 test ETH successfully (balance is ${web3.fromWei(balance, 'ether')} ETH)`)
    callback()
  } else {
    console.log('Still waiting on 1 test ETH. Retrying to check balance in 15 seconds...')
    setTimeout(() => {
      checkBalance(account, callback)
    }, 15 * 1000)
  }
}