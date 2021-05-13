import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { inputStore } from "store/input.store";

const DeploymentView: FC = () => {
  return (
    <>
      <p className="pb-2 font-medium">Check your settings again:</p>
      <ol className="list-disc list-inside">
        <li>
          <b>Token type:</b> {inputStore.tokenType === 0 ? "ERC-20" : "ERC-721"}
        </li>
        <li>
          <b>Token name:</b> {inputStore.tokenName}
        </li>
        <li>
          <b>Token symbol:</b> {inputStore.tokenSymbol}
        </li>
        <li>
          <b>Tokens for 1 ETH:</b> {inputStore.tokensFor}
        </li>
        <li>
          <b>Reciever:</b> {inputStore.toWallet}
        </li>
        <li>
          <b>Decimals:</b> {inputStore.decimals}
        </li>
        {inputStore.timed && <li>Crowdsale is bounded by a time frame</li>}
        {inputStore.capped && (
          <li>Amount of tokens intend to raise: {inputStore.tokensCap}</li>
        )}
        {inputStore.whitelist && (
          <li>Accept Ethereum only from the whitelisted addresses</li>
        )}
      </ol>
    </>
  );
};

export default observer(DeploymentView);
