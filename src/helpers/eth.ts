import { AppNetworks, appStore } from 'store/AppStore'
import { web3Store } from 'store/Web3Store'
import { userStore } from 'store/UserStore'
import { fetcher } from 'helpers/fetcher'

function getContext() {
  return appStore.currentNetwork === AppNetworks.Test
    ? web3Store.testContext
    : web3Store.mainContext
}

export function clearSubscriptions() {
  const web3Context = getContext()
  web3Context.eth.clearSubscriptions(() => {})
}

export function newAccount() {
  const web3Context = getContext()
  const newAccount = web3Context.eth.accounts.create()
  userStore.setEthAddress(newAccount.address)
  userStore.setPrivateKey(newAccount.privateKey)

  return newAccount
}

export async function subscribeToBalance(address: string) {
  try {
    await getBalance(address)

    clearSubscriptions()

    const web3Context = getContext()
    web3Context.eth.subscribe('newBlockHeaders', async (error) => {
      if (error) {
        console.log(error)
      } else {
        await getBalance(address)
      }
    })
  } catch (error) {
    userStore.setEthBalance('0')
    userStore.setUsdBalance(0)
    console.log(error)
  }
}

async function getBalance(address: string) {
  const web3Context = getContext()
  const balance = await web3Context.eth.getBalance(address)
  const ethBalance = web3Context.utils.fromWei(balance)
  userStore.setEthBalance(ethBalance)
  const data = await fetcher(
    'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
  )
  userStore.setUsdBalance(data.USD * parseInt(ethBalance, 10))
}
