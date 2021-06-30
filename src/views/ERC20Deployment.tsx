import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/InputStore'
import { BodyText, BoldText } from 'components/Text'
import { FormattedMessage } from 'react-intl'

const ERC20DeploymentView: FC = () => {
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
          <BodyText> ERC-20</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenName" />
          </BoldText>
          <BodyText> {inputStore.erc20.name}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokenSymbol" />
          </BoldText>
          <BodyText> {inputStore.erc20.symbol}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployTokensFor" />
          </BoldText>
          <BodyText> {inputStore.erc20.rate}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployReceiver" />
          </BoldText>
          <BodyText> {inputStore.erc20.receiver}</BodyText>
        </li>
        <li>
          <BoldText>
            <FormattedMessage id="deployDecimals" />
          </BoldText>
          <BodyText> {inputStore.erc20.decimals}</BodyText>
        </li>
        {inputStore.erc20.timed && (
          <li>
            <BodyText>
              <FormattedMessage id="deployTimed" />
            </BodyText>
          </li>
        )}
        {inputStore.erc20.capped && (
          <li>
            <BodyText>
              <FormattedMessage id="deployRaise" />
              {inputStore.erc20.maxTokens}
            </BodyText>
          </li>
        )}
        {inputStore.erc20.whitelist && (
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

export default observer(ERC20DeploymentView)
