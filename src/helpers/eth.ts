import { AppNetworks, appStore } from "store/app.store"
import { web3Store } from "store/web3.store"
import { userStore } from "store/user.store"
import { Account } from "web3-core"
import { fetcher } from "helpers/fetcher.helper"
import Web3 from "web3"

function getContext(): Web3 {
  return appStore.currentNetwork === AppNetworks.Test
    ? web3Store.testContext
    : web3Store.mainContext
}

export function newAccount(): Account {
  const web3Context = getContext()
  const newAccount = web3Context.eth.accounts.create()
  userStore.setEthAdress(newAccount.address)
  userStore.setPrivateKey(newAccount.privateKey)
  return newAccount
}

export async function updateBalance(adress: string) {
  const web3Context = getContext()
  const balance = await web3Context.eth.getBalance(adress)
  const ethBalance = web3Context.utils.fromWei(balance)
  userStore.setEthBalance(ethBalance)

  const data = await fetcher(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
  )
  userStore.setUsdBalance(data["USD"] * parseInt(ethBalance, 10))
}
