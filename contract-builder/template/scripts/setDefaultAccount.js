module.exports = function(web3) {
  if (process.argv[4] === '--staging') {
    const account = web3.eth.accounts.pop()
    console.log(`Setting default account to the last account at web3.eth.accounts and unlocking it: ${account}`)
    web3.personal.unlockAccount(account, '123456789', 24 * 3600)
    console.log(`${account} unlocked`)
    web3.eth.defaultAccount = account
  } else if (process.argv[4] === '--release') {
    const account = web3.eth.accounts.pop()
    console.log(`Setting default account to the last account at web3.eth.accounts and unlocking it: ${account}`)
    web3.personal.unlockAccount(account, '123456789', 24 * 3600)
    console.log(`${account} unlocked`)
    web3.eth.defaultAccount = account
  } else {
    console.log(`Setting default account to the last account at web3.eth.accounts: ${web3.eth.accounts.pop()}`)
    web3.eth.defaultAccount = web3.eth.accounts.pop()
  }
}