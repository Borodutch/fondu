const request = require('sync-request')
const	query = require('cli-interact').getYesNo

module.exports = function(callback) {
  const account = web3.personal.newAccount('123456789')
  console.log(`Created ETH wallet to deploy contracts: ${account} (password is '123456789', don't loose it) — you will be able to access it later`)
  // Get gas limit
  const gasLimit = web3.eth.getBlock('latest').gasLimit
  const gasPrice = web3.eth.gasPrice
  console.log(`Please, send at least ${web3.fromWei(gasPrice * gasLimit * 3, 'ether')}ETH to ${account} so that the contracts can be deployed`)
  let funded = false
  while(!funded) {
    const answer = query(`Did you send ${web3.fromWei(gasPrice * gasLimit * 3, 'ether')} ETH to ${account}?`);
    if (answer) {
      console.log('Checking the balance...')
      const balance = web3.eth.getBalance(account).toNumber()
      if (balance >= gasPrice * gasLimit * 3) {
        console.log(`ETH was received by ${account}, current balance is ${web3.fromWei(balance, 'ether')} ETH, proceeding to deploy the contracts...`)
        funded = true
        callback()
      } else {
        console.log(`Looks like Ethereum blockchain still does not have enough ETH (maybe transaction is not confirmed yet?). If you have sent enough ETH, it might be the case that you need to wait 10-15 minutes for the transaction to be synced. You can check the status of the transactions here: https://etherscan.io/address/${account} (current balance is current balance is ${web3.fromWei(balance, 'ether')} ETH)`)
      }
    } else {
      console.log(`Please, send at least ${web3.fromWei(gasPrice * gasLimit * 3, 'ether')}ETH to ${account} so that the contracts can be deployed`)
    }
  }
}