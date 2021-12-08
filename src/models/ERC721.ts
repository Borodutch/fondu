export default interface ERC721 {
  name: string
  symbol: string
  receiver: string
  privateKey: string
  baseUri: string
  mintable: boolean
  autoIncrementIds: boolean
  burnable: boolean
  pausable: boolean
  enumerable: boolean
  uriStorage: boolean

  ownable: boolean
  roles: boolean
}
