const request = require('sync-request')

module.exports = function(callback) {
  const account = web3.personal.newAccount('123456789')
  console.log(`Created ETH wallet to deploy contracts: ${account} (password is '123456789', don't loose it)`)
  console.log(`Requesting 1 ETH to ${account} (http://faucet.ropsten.be:3001/donate/${account})`)
  request('GET', `http://faucet.ropsten.be:3001/donate/${account}`)
  console.log('Requested, waiting 5 seconds to receive test ETH...')
  setTimeout(() => {
    checkBalance(account, callback)
  }, 5 * 1000)
}

function checkBalance(account, callback) {
  const balance = web3.eth.getBalance(account)
  if (balance.toNumber() > 0) {
    console.log(`Received 1 test ETH successfully (balance is ${web3.fromWei(balance, 'ether')} ETH)`)
    callback()
  } else {
    console.log('Still waiting on 1 test ETH. Retrying to check balance in 5 seconds...')
    setTimeout(() => {
      checkBalance(account, callback)
    }, 5 * 1000)
  }
}