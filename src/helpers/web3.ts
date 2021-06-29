import { fetcher } from 'helpers/fetcher'
import Web3 from 'web3'
import { appStore } from 'store/AppStore'

const testWeb3 = new Web3(
  new Web3.providers.WebsocketProvider(
    'wss://ropsten.infura.io/ws/v3/c7190ba708b943338ec1df3f201c6a28'
  )
)

const mainWeb3 = new Web3(
  new Web3.providers.WebsocketProvider(
    'wss://mainnet.infura.io/ws/v3/c7190ba708b943338ec1df3f201c6a28'
  )
)

export function getWeb3() {
  return appStore.network === 'test' ? testWeb3 : mainWeb3
}

export async function getBalance(address: string) {
  const web3Context = getWeb3()
  const balance = await web3Context.eth.getBalance(address)
  const ethBalance = web3Context.utils.fromWei(balance)
  const data = await fetcher(
    'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
  )
  const usdBalance = data.USD * parseInt(ethBalance, 10)
  return {
    ethBalance,
    usdBalance,
  }
}
