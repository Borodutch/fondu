import { makeAutoObservable } from 'mobx'
import { web3Store } from 'store/Web3Store'
import { subscribeToBalance } from 'helpers/eth'

class UserStore {
  ethAddress = ''
  publicKey = ''
  privateKey = ''
  ethBalance = '0'
  usdBalance = 0

  constructor() {
    makeAutoObservable(this)
  }

  setEthAddress(address: string) {
    web3Store.testContext.eth.clearSubscriptions(() => {})
    this.ethAddress = address

    subscribeToBalance(address)
  }

  setPrivateKey(key: string) {
    this.privateKey = key
  }

  setEthBalance(balance: string) {
    this.ethBalance = balance
  }

  setUsdBalance(balance: number) {
    this.usdBalance = balance
  }
}

export const userStore = new UserStore()
