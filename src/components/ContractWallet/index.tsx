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
import { userStore } from "store/user.store"
import { SubtitleText, ETHBalanceText, USDBalanceText } from "components/Text"
import { Button } from "components/Controls"
import { FormattedMessage } from "react-intl"
import { newAccount, updateBalance } from "helpers/eth"

const ContractWallet: FC = () => {
  const [adressDisabled, setAdressDisabled] = useState<boolean>(true)

  useEffect(() => {
    const account = newAccount()
    updateBalance(account.address)
  }, [])

  return (
    <div className={wrapperStyle}>
      <div className={leftBlockStyle}>
        <SubtitleText>
          <FormattedMessage id="address" />
        </SubtitleText>
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
        <SubtitleText>
          <FormattedMessage id="balance" />
        </SubtitleText>
        <div className={balanceWrapperStyle}>
          <div className={balanceFlexStyle}>
            <ETHBalanceText>{userStore.ethBalance} Eth</ETHBalanceText>
            <USDBalanceText>{userStore.usdBalance} USD</USDBalanceText>
          </div>
          {appStore.currentNetwork === AppNetworks.Test && (
            <Button>
              <FormattedMessage id="buttonGetTest" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default observer(ContractWallet)
