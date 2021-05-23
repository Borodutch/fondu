import React, { ChangeEvent, FC, useEffect, useState } from "react"
import InputMask from "react-input-mask"
import EditIcon from "assets/icons/edit.svg"
import { inputTextStyle } from "helpers/style.helper"
import {
  balanceFlexStyle,
  balanceWrapperStyle,
  leftBlockInnerStyle,
  leftBlockStyle,
  rightBlockStyle,
  wrapperStyle,
} from "./styles"
import { observer } from "mobx-react-lite"
import { AppNetworks, appStore } from "store/app.store"
import { web3Store } from "store/web3.store"
import { userStore } from "store/user.store"
import useSWR from "swr"
import { fetcher } from "helpers/fetcher.helper"
import { SubtitleText, ETHBalanceText, USDBalanceText } from "components/Text"
import { Button } from "components/Controls"

const ContractWallet: FC = () => {
  const [adressDisabled, setAdressDisabled] = useState<boolean>(true)
  const { data } = useSWR(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
    fetcher
  )

  useEffect(() => {
    const newAccount = web3Store.testContext.eth.accounts.create()
    userStore.setEthAdress(newAccount.address)
    userStore.setPrivateKey(newAccount.privateKey)
    async function getBalance() {
      const balance = await web3Store.testContext.eth.getBalance(
        newAccount.address
      )
      const ethBalance = web3Store.testContext.utils.fromWei(balance)
      userStore.setEthBalance(ethBalance)
    }
    getBalance()
  }, [])

  useEffect(() => {
    if (data) {
      userStore.setUsdBalance(data["USD"] * parseInt(userStore.ethBalance, 10))
    }
  }, [data])

  return (
    <div className={wrapperStyle}>
      <div className={leftBlockStyle}>
        <SubtitleText>Adress</SubtitleText>
        <div className={leftBlockInnerStyle}>
          <InputMask
            type="text"
            className={inputTextStyle}
            mask="0x****************************************"
            maskChar={null}
            placeholder="Enter Eth adress"
            value={userStore.ethAdress}
            disabled={adressDisabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              userStore.setEthAdress(e.target.value)
            }
          />
          <Button
            filled={true}
            onClick={() => setAdressDisabled(!adressDisabled)}
          >
            <img src={EditIcon} alt="Edit" />
          </Button>
        </div>
      </div>
      <div className={rightBlockStyle}>
        <SubtitleText>Balance</SubtitleText>
        <div className={balanceWrapperStyle}>
          <div className={balanceFlexStyle}>
            <ETHBalanceText>{userStore.ethBalance} Eth</ETHBalanceText>
            <USDBalanceText>{userStore.usdBalance} USD</USDBalanceText>
          </div>
          {appStore.currentNetwork === AppNetworks.Test && (
            <Button>Get test ETH to your wallet</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default observer(ContractWallet)
