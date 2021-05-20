import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { inputStore } from "store/input.store"
import {
  checkSettingsText,
  erc20contractName,
  erc721ContractName,
  tokenTypeCheckText,
  tokenNameCheckText,
  tokenSymbolCheckText,
  tokensPerEthCheckText,
  recieverCheckText,
  decimalsCheckText,
  crowdsaleTimedCheckText,
  cappedTokensCheckText,
  whitelistCheckText,
} from "components/Text"

const DeploymentView: FC = () => {
  return (
    <>
      <p className="pb-2 font-medium">{checkSettingsText}</p>
      <ol className="list-disc list-inside">
        <li>
          <b>{tokenTypeCheckText}</b>{" "}
          {inputStore.tokenType === 0 ? erc20contractName : erc721ContractName}
        </li>
        <li>
          <b>{tokenNameCheckText}</b> {inputStore.tokenName}
        </li>
        <li>
          <b>{tokenSymbolCheckText}</b> {inputStore.tokenSymbol}
        </li>
        <li>
          <b>{tokensPerEthCheckText}</b> {inputStore.tokensFor}
        </li>
        <li>
          <b>{recieverCheckText}</b> {inputStore.toWallet}
        </li>
        <li>
          <b>{decimalsCheckText}</b> {inputStore.decimals}
        </li>
        {inputStore.timed && <li>{crowdsaleTimedCheckText}</li>}
        {inputStore.capped && (
          <li>
            {cappedTokensCheckText} {inputStore.tokensCap}
          </li>
        )}
        {inputStore.whitelist && <li>{whitelistCheckText}</li>}
      </ol>
    </>
  )
}

export default observer(DeploymentView)
