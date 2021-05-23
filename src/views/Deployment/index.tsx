import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { inputStore } from "store/input.store"
import { BodyText, BoldText } from "components/Text"

const DeploymentView: FC = () => {
  return (
    <>
      <BoldText>Check your settings again:</BoldText>
      <ol className="list-disc list-inside pt-2">
        <li>
          <BoldText>Token type: </BoldText>
          <BodyText>
            {inputStore.tokenType === 0 ? "ERC-20" : "ERC-721"}
          </BodyText>
        </li>
        <li>
          <BoldText>Token name:</BoldText>
          <BodyText> {inputStore.tokenName}</BodyText>
        </li>
        <li>
          <BoldText>Token symbol:</BoldText>
          <BodyText> {inputStore.tokenSymbol}</BodyText>
        </li>
        <li>
          <BoldText>Tokens for 1 ETH:</BoldText>
          <BodyText> {inputStore.tokensFor}</BodyText>
        </li>
        <li>
          <BoldText>Reciever:</BoldText>
          <BodyText> {inputStore.toWallet}</BodyText>
        </li>
        <li>
          <BoldText>Decimals:</BoldText>
          <BodyText> {inputStore.decimals}</BodyText>
        </li>
        {inputStore.timed && (
          <li>
            <BodyText>Crowdsale is bounded by a time frame</BodyText>
          </li>
        )}
        {inputStore.capped && (
          <li>
            <BodyText>
              Amount of tokens intend to raise: {inputStore.tokensCap}
            </BodyText>
          </li>
        )}
        {inputStore.whitelist && (
          <li>
            <BodyText>
              Accept Ethereum only from the whitelisted addresses
            </BodyText>
          </li>
        )}
      </ol>
    </>
  )
}

export default observer(DeploymentView)
