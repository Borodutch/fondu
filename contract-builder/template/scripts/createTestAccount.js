const request = require('sync-request')

module.exports = function(callback) {
  const account = web3.personal.newAccount('123456789')
  console.log(`Created ETH wallet to deploy contracts: ${account} (password is '123456789', don't loose it)`)
  console.log(`Requesting 1 ETH to ${account} (http://faucet.ropsten.be:3001/donate/${account})`)
  const res = request('GET', `http://faucet.ropsten.be:3001/donate/${account}`)
  if (res.statusCode >= 300) {
    throw new Error('Sorry, Ethereum test faucet request failed: ' + res.body.toString())
  }
  console.log('Requested, waiting on the Ethereum node to sync and then 15 seconds to receive test ETH...')
  setTimeout(() => {
    checkBalance(account, callback)
  }, 15 * 1000)
}

function checkBalance(account, callback) {
  const balance = web3.eth.getBalance(account)
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