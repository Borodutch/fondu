import { makeAutoObservable } from "mobx"
import Web3 from "web3"

class Web3Store {
  testContext = new Web3(
    new Web3.providers.WebsocketProvider(
      "wss://ropsten.infura.io/ws/v3/c7190ba708b943338ec1df3f201c6a28"
    )
  )

  mainContext = new Web3(
    new Web3.providers.WebsocketProvider(
      "wss://mainnet.infura.io/ws/v3/c7190ba708b943338ec1df3f201c6a28"
    )
  )

  constructor() {
    makeAutoObservable(this)
  }
}

export const web3Store = new Web3Store()
