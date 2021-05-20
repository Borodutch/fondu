import React, { ChangeEvent, FC, useEffect, useState } from "react"
import InputMask from "react-input-mask"
import EditIcon from "assets/icons/edit.svg"
import { inputTextStyle } from "helpers/style.helper"
import {
  addButtonStyle,
  balanceFlexStyle,
  balanceWrapperStyle,
  editButtonStyleReal,
  editButtonStyleTest,
  ethBalanceStyleReal,
  ethBalanceStyleTest,
  leftBlockInnerStyle,
  leftBlockStyle,
  rightBlockStyle,
  subtitleStyle,
  usdBalanceStyle,
  wrapperStyle,
} from "./styles"
import { observer } from "mobx-react-lite"
import { AppNetworks, appStore } from "store/app.store"
import { web3Store } from "store/web3.store"
import { userStore } from "store/user.store"
import useSWR from "swr"
import { fetcher } from "helpers/fetcher.helper"
import {
  ethWalletPlaceholderText,
  editAdressIconAltText,
  ethereumSymbol,
  dollarSymbol,
  getTestEthButtonText,
  ethAdressLabel,
  ethBalanceLabel,
} from "components/Text"

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
        <h2 className={subtitleStyle}>{ethAdressLabel}</h2>
        <div className={leftBlockInnerStyle}>
          <InputMask
            type="text"
            className={inputTextStyle}
            mask="0x****************************************"
            maskChar={null}
            placeholder={ethWalletPlaceholderText}
            value={userStore.ethAdress}
            disabled={adressDisabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              userStore.setEthAdress(e.target.value)
            }
          />
          <button
            className={
              appStore.currentNetwork === AppNetworks.Test
                ? editButtonStyleTest
                : editButtonStyleReal
            }
            onClick={() => setAdressDisabled(!adressDisabled)}
          >
            <img src={EditIcon} alt={editAdressIconAltText} />
          </button>
        </div>
      </div>
      <div className={rightBlockStyle}>
        <h2 className={subtitleStyle}>{ethBalanceLabel}</h2>
        <div className={balanceWrapperStyle}>
          <div className={balanceFlexStyle}>
            <span
              className={
                appStore.currentNetwork === AppNetworks.Real
                  ? ethBalanceStyleReal
                  : ethBalanceStyleTest
              }
            >
              {userStore.ethBalance} {ethereumSymbol}
            </span>
            <span className={usdBalanceStyle}>
              {userStore.usdBalance} {dollarSymbol}
            </span>
          </div>
          {appStore.currentNetwork === AppNetworks.Test && (
            <button className={addButtonStyle}>{getTestEthButtonText}</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default observer(ContractWallet)
