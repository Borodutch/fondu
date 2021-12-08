import { makeAutoObservable } from 'mobx'
import erc20 from 'models/ERC20'
import erc721 from 'models/ERC721'
import { DeployData, ServerResponse, DeployedContract } from 'models/DeployData'

export enum TokenType {
  ERC20,
  ERC721,
}

class InputStore {
  tokenType: TokenType = TokenType.ERC20
  erc20: erc20 = {
    name: 'Fondu',
    symbol: 'FDU',
    decimals: 18,
    rate: 250,
    receiver: '',
    privateKey: '',
    capped: false,
    whitelist: false,
    timed: false,
    maxTokens: 0,
  }
  erc721: erc721 = {
    name: 'Fondu',
    symbol: 'FDU',
    receiver: '',
    baseUri: '',
    privateKey: '',
    mintable: false,
    autoIncrementIds: false,
    burnable: false,
    pausable: false,
    enumerable: false,
    uriStorage: false,

    ownable: true,
    roles: false,
  }
  deployData: DeployData = {
    abi: '',
    bytecode: { object: '' },
    contract: '',
    signer: '',
  }
  deployedContract: DeployedContract = { contractAddress: '', from: '' }
  constructor() {
    makeAutoObservable(this)
  }

  setDeployData(serverResponse: ServerResponse) {
    this.deployData.abi = serverResponse.abi
    this.deployData.bytecode = serverResponse.bytecode
    this.deployData.contract = serverResponse.contract
    this.deployData.signer =
      this.tokenType === TokenType.ERC721
        ? this.erc721.receiver
        : this.erc20.receiver
  }

  setTokenType(tokenType: TokenType) {
    this.tokenType = tokenType
  }

  setERC20Capped(cap: boolean) {
    this.erc20.capped = cap
  }

  setERC20TokensCap(cap: string) {
    this.erc20.maxTokens = parseInt(cap, 10)
  }

  setERC20Timed(timed: boolean) {
    this.erc20.timed = timed
  }

  setERC20Whitelist(whitelist: boolean) {
    this.erc20.whitelist = whitelist
  }

  setERC20TokenName(tokenName: string) {
    this.erc20.name = tokenName
  }

  setERC20TokenSymbol(tokenSymbol: string) {
    this.erc20.symbol = tokenSymbol
  }

  setERC20Receiver(wallet: string) {
    this.erc20.receiver = wallet
  }

  setERC20PrivateKey(key: string) {
    this.erc20.privateKey = key
  }

  setERC20Decimals(decimals: string) {
    this.erc20.decimals = parseInt(decimals, 10)
  }

  setERC20Rate(tokens: string) {
    this.erc20.rate = parseInt(tokens, 10)
  }

  setERC721TokenName(tokenName: string) {
    this.erc20.name = tokenName
  }

  setERC721TokenSymbol(tokenSymbol: string) {
    this.erc20.symbol = tokenSymbol
  }

  setERC721Receiver(wallet: string) {
    this.erc721.receiver = wallet
  }

  setERC721PrivateKey(key: string) {
    this.erc721.privateKey = key
  }

  setERC721Mintable(key: boolean) {
    this.erc721.mintable = key
  }

  setERC721AutoIncrementIds(key: boolean) {
    this.erc721.autoIncrementIds = key
  }

  setERC721Burnable(key: boolean) {
    this.erc721.burnable = key
  }

  setERC721Pausable(key: boolean) {
    this.erc721.pausable = key
  }

  setERC721Enumerable(key: boolean) {
    this.erc721.enumerable = key
  }

  setERC721UriStorage(key: boolean) {
    this.erc721.uriStorage = key
  }

  setERC721Ownable(key: boolean) {
    this.erc721.ownable = key
    this.erc721.roles = !key
  }

  setERC721Roles(key: boolean) {
    this.erc721.roles = key
    this.erc721.ownable = !key
  }

  setERC721BaseUri(key: string) {
    this.erc721.baseUri = key
  }
}

export const inputStore = new InputStore()
