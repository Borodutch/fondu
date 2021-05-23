import { inputTextStyle } from "helpers/style.helper"
import { observer } from "mobx-react-lite"
import React, { ChangeEvent, FC } from "react"
import InputMask from "react-input-mask"
import { inputStore } from "store/input.store"
import { FormattedMessage } from "react-intl"

const TokenSettingsView: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <p>
            <FormattedMessage id="tokenSettingsName" />
          </p>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenName}
            onChange={(e) => inputStore.setTokenName(e.target.value)}
            placeholder="Token name"
          />
        </div>
        <div className="space-y-2">
          <p>
            <FormattedMessage id="tokenSettingsSymbol" />
          </p>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenSymbol}
            onChange={(e) => inputStore.setTokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <p>
            <FormattedMessage id="tokenSettingsWallet" />
          </p>
          <InputMask
            type="text"
            className={inputTextStyle}
            mask="0x****************************************"
            maskChar={null}
            defaultValue={inputStore.toWallet}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              inputStore.setToWallet(e.target.value)
            }
            placeholder="ETH wallet"
          />
        </div>
        <div className="space-y-2">
          <p>
            <FormattedMessage id="tokenSettingsDecimals" />
          </p>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.decimals}
            onChange={(e) => inputStore.setDecimals(e.target.value)}
            placeholder="Number of decimals"
          />
        </div>
        <div className="space-y-2">
          <p>
            <FormattedMessage id="tokenSettingsAmount" />
          </p>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.tokensFor}
            onChange={(e) => inputStore.setTokensFor(e.target.value)}
            placeholder="Tokens for 1 ETH"
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
          <FormattedMessage id="tokenSettingsTimed" />
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
          <FormattedMessage id="tokenSettingsSold" />
          {inputStore.capped && (
            <div className="p-3 mt-2 bg-gray-50 rounded-base">
              <FormattedMessage id="tokenSettingsRaise" />
              <input
                type="number"
                className={inputTextStyle}
                defaultValue={inputStore.tokensCap}
                onChange={(e) => inputStore.setTokensCap(e.target.value)}
                placeholder="Amount of tokens"
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
          <FormattedMessage id="tokenSettingsWhitelist" />
        </div>
      </div>
    </>
  )
}

export default observer(TokenSettingsView)
