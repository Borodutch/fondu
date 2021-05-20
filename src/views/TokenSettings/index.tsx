import { inputTextStyle } from "helpers/style.helper"
import { observer } from "mobx-react-lite"
import React, { ChangeEvent, FC } from "react"
import InputMask from "react-input-mask"
import { inputStore } from "store/input.store"
import {
  tokenNameLabel,
  tokenNamePlaceholderText,
  tokenSymbolLabel,
  tokenSymbolPlaceholderText,
  ethWalletLabel,
  ethWalletPlaceholderText,
  numberOfDecimalsLabel,
  numberOfDecimalsPlaceholderText,
  tokensPerEthLabel,
  tokensPerEthPlaceholderText,
  crowdsaleTimedCheckboxText,
  cappedTokensCheckboxText,
  cappedTokensLabel,
  cappedTokensPlaceholderText,
  whitelistCheckboxText,
} from "components/Text"

const TokenSettingsView: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <p>{tokenNameLabel}</p>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenName}
            onChange={(e) => inputStore.setTokenName(e.target.value)}
            placeholder={tokenNamePlaceholderText}
          />
        </div>
        <div className="space-y-2">
          <p>{tokenSymbolLabel}</p>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenSymbol}
            onChange={(e) => inputStore.setTokenSymbol(e.target.value)}
            placeholder={tokenSymbolPlaceholderText}
          />
        </div>
        <div className="space-y-2">
          <p>{ethWalletLabel}</p>
          <InputMask
            type="text"
            className={inputTextStyle}
            mask="0x****************************************"
            maskChar={null}
            defaultValue={inputStore.toWallet}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              inputStore.setToWallet(e.target.value)
            }
            placeholder={ethWalletPlaceholderText}
          />
        </div>
        <div className="space-y-2">
          <p>{numberOfDecimalsLabel}</p>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.decimals}
            onChange={(e) => inputStore.setDecimals(e.target.value)}
            placeholder={numberOfDecimalsPlaceholderText}
          />
        </div>
        <div className="space-y-2">
          <p>{tokensPerEthLabel}</p>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.tokensFor}
            onChange={(e) => inputStore.setTokensFor(e.target.value)}
            placeholder={tokensPerEthPlaceholderText}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.timed}
            onChange={(e) => inputStore.setTimed(e.target.checked)}
          />
          {crowdsaleTimedCheckboxText}
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.capped}
            onChange={(e) => inputStore.setCapped(e.target.checked)}
          />
          {cappedTokensCheckboxText}
          {inputStore.capped && (
            <div className="p-3 mt-2 bg-gray-50 rounded-base">
              {cappedTokensLabel}
              <input
                type="number"
                className={inputTextStyle}
                defaultValue={inputStore.tokensCap}
                onChange={(e) => inputStore.setTokensCap(e.target.value)}
                placeholder={cappedTokensPlaceholderText}
              />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.whitelist}
            onChange={(e) => inputStore.setWhitelist(e.target.checked)}
          />
          {whitelistCheckboxText}
        </div>
      </div>
    </>
  )
}

export default observer(TokenSettingsView)
