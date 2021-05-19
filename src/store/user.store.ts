import { makeAutoObservable } from "mobx"

class UserStore {
  ethAdress = ""
  publicKey = ""
  privateKey = ""
  ethBalance = "0"
  usdBalance = 0

  constructor() {
    makeAutoObservable(this)
  }

  setEthAdress(adress: string) {
    this.ethAdress = adress
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
