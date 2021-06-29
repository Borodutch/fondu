export default interface ERC20 {
  name: string
  symbol: string
  rate: number
  receiver: string
  privateKey: string
  decimals: number
  timed: boolean
  whitelist: boolean
  capped: boolean
  maxTokens: number
}
