import { getBalance, getWeb3 } from 'helpers/web3'
import { makeAutoObservable } from 'mobx'
import { Account } from 'web3-core'

class UserStore {
  account?: Account
  ethBalance = '0'
  usdBalance = 0

  constructor() {
    makeAutoObservable(this)
  }

  generateNewAccount() {
    this.account = getWeb3().eth.accounts.create()
  }

  unsubscribeFromWeb3() {
    return new Promise<void>((res, rej) => {
      getWeb3().eth.clearSubscriptions((err) => (err ? rej(err) : res(err)))
    })
  }

  async refreshBalance() {
    if (!this.account) {
      return
    }
    const { ethBalance, usdBalance } = await getBalance(this.account.address)
    this.ethBalance = ethBalance
    this.usdBalance = usdBalance
  }

  async subscribeToWeb3() {
    await this.unsubscribeFromWeb3()
    await new Promise<void>((res, rej) => {
      getWeb3().eth.subscribe('newBlockHeaders', (err) =>
        err ? rej(err) : res(err)
      )
    })
    await this.refreshBalance()
  }
}

export const userStore = new UserStore()
