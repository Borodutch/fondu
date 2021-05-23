import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { inputStore } from "store/input.store"
import { FormattedMessage } from "react-intl"

const DeploymentView: FC = () => {
  return (
    <>
      <p className="pb-2 font-medium">
        <FormattedMessage id="deployCheck" />
      </p>
      <ol className="list-disc list-inside">
        <li>
          <b>
            <FormattedMessage id="deployTokenType" />
          </b>{" "}
          {inputStore.tokenType === 0 ? "ERC-20" : "ERC-721"}
        </li>
        <li>
          <b>
            <FormattedMessage id="deployTokenName" />
          </b>{" "}
          {inputStore.tokenName}
        </li>
        <li>
          <b>
            <FormattedMessage id="deployTokenSymbol" />
          </b>{" "}
          {inputStore.tokenSymbol}
        </li>
        <li>
          <b>
            <FormattedMessage id="deployTokensFor" />
          </b>{" "}
          {inputStore.tokensFor}
        </li>
        <li>
          <b>
            <FormattedMessage id="deployReceiver" />
          </b>{" "}
          {inputStore.toWallet}
        </li>
        <li>
          <b>
            <FormattedMessage id="deployDecimals" />
          </b>{" "}
          {inputStore.decimals}
        </li>
        {inputStore.timed && (
          <li>
            <FormattedMessage id="deployTimed" />
          </li>
        )}
        {inputStore.capped && (
          <li>
            <FormattedMessage id="deployRaise" />
            {inputStore.tokensCap}
          </li>
        )}
        {inputStore.whitelist && (
          <li>
            <FormattedMessage id="deployWhitelist" />
          </li>
        )}
      </ol>
    </>
  )
}

export default observer(DeploymentView)
