import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { inputStore } from "store/input.store"
import { BodyText, BoldText } from "components/Text"
import { FormattedMessage } from "react-intl"

const DeploymentView: FC = () => {
  return (
    <>
      <BoldText>
        <FormattedMessage id="deployCheck" />
      </BoldText>
      <ol className="list-disc list-inside pt-2">
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenType" />
          </BoldText>
          <BodyText>
            {inputStore.tokenType === 0 ? "ERC-20" : "ERC-721"}
          </BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenName" />
          </BoldText>
          <BodyText> {inputStore.tokenName}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenSymbol" />
          </BoldText>
          <BodyText> {inputStore.tokenSymbol}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokensFor" />
          </BoldText>
          <BodyText> {inputStore.tokensFor}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployReceiver" />
          </BoldText>
          <BodyText> {inputStore.toWallet}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployDecimals" />
          </BoldText>
          <BodyText> {inputStore.decimals}</BodyText>
        </li>
        {inputStore.timed && (
          <li>
            <BodyText>
              <FormattedMessage id="deployTimed" />
            </BodyText>
          </li>
        )}
        {inputStore.capped && (
          <li>
            <BodyText>
              <FormattedMessage id="deployRaise" />
              {inputStore.tokensCap}
            </BodyText>
          </li>
        )}
        {inputStore.whitelist && (
          <li>
            <BodyText>
              <FormattedMessage id="deployWhitelist" />
            </BodyText>
          </li>
        )}
      </ol>
    </>
  )
}

export default observer(DeploymentView)
