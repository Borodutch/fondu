import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { inputStore } from "store/input.store"
import { BodyText, BoldText } from "components/Text"
import { FormattedMessage } from "react-intl"

const ERC721DeploymentView: FC = () => {
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
          <BodyText> ERC-721</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenName" />
          </BoldText>
          <BodyText> {inputStore.erc721.name}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenSymbol" />
          </BoldText>
          <BodyText> {inputStore.erc721.symbol}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployReceiver" />
          </BoldText>
          <BodyText> {inputStore.erc721.receiver}</BodyText>
        </li>
      </ol>
    </>
  )
}

export default observer(ERC721DeploymentView)
