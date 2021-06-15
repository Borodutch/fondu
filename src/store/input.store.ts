import { makeAutoObservable } from "mobx"

export enum TokenType {
  ERC20,
  ERC721,
}

class InputStore {
  tokenType: TokenType = TokenType.ERC20
  tokenName: string = "Fondu"
  tokenSymbol: string = "FDU"
  toWallet = ""
  privateKey = ""
  decimals = 18
  tokensFor = 250
  timed = false
  capped = false
  tokensCap = 1000000
  whitelist = false

  constructor() {
    makeAutoObservable(this)
  }

  setTokenType(tokenType: TokenType) {
    this.tokenType = tokenType
  }

  setCapped(cap: boolean) {
    this.capped = cap
  }

  setTokensCap(cap: string) {
    this.tokensCap = parseInt(cap, 10)
  }

  setTimed(timed: boolean) {
    this.timed = timed
  }

  setWhitelist(whitelist: boolean) {
    this.whitelist = whitelist
  }

  setTokenName(tokenName: string) {
    this.tokenName = tokenName
  }

  setTokenSymbol(tokenSymbol: string) {
    this.tokenSymbol = tokenSymbol
  }

  setToWallet(wallet: string) {
    this.toWallet = wallet
  }

  setPrivateKey(key: string) {
    this.privateKey = key
  }

  setDecimals(decimals: string) {
    this.decimals = parseInt(decimals, 10)
  }

  setTokensFor(tokens: string) {
    this.tokensFor = parseInt(tokens, 10)
  }
}

export const inputStore = new InputStore()
