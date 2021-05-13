import { inputTextStyle } from "helpers/style.helper";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { inputStore } from "store/input.store";

const TokenSettingsView: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <p>
            Human-readable name of your token like "Fondu", "Bitcoin" or
            "Ethereum"
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
          <p>Symbol of your token like "FDU", "BTC" or "ETH"</p>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.tokenSymbol}
            onChange={(e) => inputStore.setTokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <p>ETH wallet that will receive the collected funds</p>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.toWallet}
            onChange={(e) => inputStore.setToWallet(e.target.value)}
            placeholder="ETH wallet"
          />
        </div>
        <div className="space-y-2">
          <p>Number of decimals your currency supports</p>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.decimals}
            onChange={(e) => inputStore.setDecimals(e.target.value)}
            placeholder="Number of decimals"
          />
        </div>
        <div className="space-y-2">
          <p>How many of your tokens will user get for 1 ETH</p>
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
          Crowdsale is bounded by a time frame
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
          You have the maximum value of tokens sold
          {inputStore.capped && (
            <div className="p-3 mt-2 bg-gray-50 rounded-base">
              What is the maximum amount of tokens you intend to raise?
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
          Accept Ethereum only from the whitelisted addresses
        </div>
      </div>
    </>
  );
};

export default observer(TokenSettingsView);
