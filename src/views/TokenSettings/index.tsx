import { inputTextStyle } from "helpers/style.helper";
import React, { FC } from "react";

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
            placeholder="Token name"
          />
        </div>
        <div className="space-y-2">
          <p>Symbol of your token like "FDU", "BTC" or "ETH"</p>
          <input
            type="text"
            className={inputTextStyle}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <p>ETH wallet that will receive the collected funds</p>
          <input
            type="text"
            className={inputTextStyle}
            placeholder="ETH wallet"
          />
        </div>
        <div className="space-y-2">
          <p>Number of decimals your currency supports</p>
          <input
            type="text"
            className={inputTextStyle}
            placeholder="Number of decimals"
          />
        </div>
        <div className="space-y-2">
          <p>How many of your tokens will user get for 1 ETH</p>
          <input
            type="text"
            className={inputTextStyle}
            placeholder="Tokens for 1 ETH"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input type="checkbox" className="mr-2" />
          Crowdsale is bounded by a time frame
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input type="checkbox" className="mr-2" />
          You have the maximum value of tokens sold
          <div className="p-3 mt-2 bg-gray-50 rounded-base">
            What is the maximum amount of tokens you intend to raise?
            <input
              type="text"
              className={inputTextStyle}
              placeholder="Amount of tokens"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input type="checkbox" className="mr-2" />
          Accept Ethereum only from the whitelisted addresses
        </div>
      </div>
    </>
  );
};

export default TokenSettingsView;
