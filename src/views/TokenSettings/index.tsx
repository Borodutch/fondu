import { inputTextStyle } from "helpers/style.helper"
import { observer } from "mobx-react-lite"
import React, { ChangeEvent, FC, useEffect } from "react"
import InputMask from "react-input-mask"
import EditIcon from "assets/icons/edit.svg"
import { leftBlockInnerStyle } from "components/ContractWallet/styles"
import { web3Store } from "store/web3.store"
import { inputStore } from "store/input.store"
import { BodyText } from "components/Text"
import { Button } from "components/Controls"
import { FormattedMessage } from "react-intl"

const TokenSettingsView: FC = () => {
  useEffect(() => {
    if (inputStore.toWallet === "") {
      const newAccount = web3Store.testContext.eth.accounts.create()
      inputStore.setToWallet(newAccount.address)
      inputStore.setPrivateKey(newAccount.privateKey)
    }
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsName" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenName}
            onChange={(e) => inputStore.setTokenName(e.target.value)}
            placeholder="Token name"
          />
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsSymbol" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenSymbol}
            onChange={(e) => inputStore.setTokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsWallet" />
          </BodyText>
          <div className={leftBlockInnerStyle}>
            <InputMask
              type="text"
              className={inputTextStyle}
              mask="0x****************************************"
              maskChar={null}
              placeholder="ETH wallet"
              value={inputStore.toWallet}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                inputStore.setToWallet(e.target.value)
              }
            />
            <Button filled={true} onClick={() => alert(inputStore.privateKey)}>
              <img src={EditIcon} alt="Edit" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsDecimals" />
          </BodyText>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.decimals}
            onChange={(e) => inputStore.setDecimals(e.target.value)}
            placeholder="Number of decimals"
          />
        </div>

        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsAmount" />
          </BodyText>
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
          <BodyText>
            <FormattedMessage id="tokenSettingsTimed" />
          </BodyText>
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
          <BodyText>
            <FormattedMessage id="tokenSettingsSold" />
          </BodyText>
          {inputStore.capped && (
            <div className="p-3 mt-2 bg-gray-50 rounded-base">
              <BodyText>
                <FormattedMessage id="tokenSettingsRaise" />
              </BodyText>
              <input
                type="number"
                className={inputTextStyle}
                defaultValue={inputStore.tokensCap}
                onChange={(e) => inputStore.setTokensCap(e.target.value)}
                placeholder="Amount of tokens"
              />
            </div>
          )}{" "}
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
          <BodyText>
            <FormattedMessage id="tokenSettingsWhitelist" />
          </BodyText>
        </div>
      </div>
    </>
  )
}

export default observer(TokenSettingsView)
