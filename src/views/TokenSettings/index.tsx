import { inputTextStyle } from "helpers/style.helper"
import { observer } from "mobx-react-lite"
import React, { ChangeEvent, FC } from "react"
import InputMask from "react-input-mask"
import { inputStore } from "store/input.store"
import { BodyText } from "components/Text"

const TokenSettingsView: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <BodyText>
            Human-readable name of your token like "Fondu", "Bitcoin" or
            "Ethereum"
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
          <BodyText>Symbol of your token like "FDU", "BTC" or "ETH"</BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenSymbol}
            onChange={(e) => inputStore.setTokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <BodyText>ETH wallet that will receive the collected funds</BodyText>
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
          <BodyText>Number of decimals your currency supports</BodyText>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.decimals}
            onChange={(e) => inputStore.setDecimals(e.target.value)}
            placeholder="Number of decimals"
          />
        </div>
        <div className="space-y-2">
          <BodyText>How many of your tokens will user get for 1 ETH</BodyText>
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
          <BodyText>Crowdsale is bounded by a time frame</BodyText>
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
          <BodyText>You have the maximum value of tokens sold</BodyText>
          {inputStore.capped && (
            <div className="p-3 mt-2 bg-gray-50 rounded-base">
              <BodyText>
                What is the maximum amount of tokens you intend to raise?
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
            Accept Ethereum only from the whitelisted addresses
          </BodyText>
        </div>
      </div>
    </>
  )
}

export default observer(TokenSettingsView)
