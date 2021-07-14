import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/InputStore'
import { BodyText } from 'components/Text'
import { FormattedMessage } from 'react-intl'

const ERC20DeploymentView: FC = () => {
  return (
    <>
      <BodyText>
        <FormattedMessage id="deployCheck" />
      </BodyText>
      <ol className="list-disc list-inside pt-2">
        <li>
          <BodyText>
            <FormattedMessage id="deployTokenType" />
          </BodyText>
          <BodyText> ERC-20</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployTokenName" />
          </BodyText>
          <BodyText> {inputStore.erc20.name}</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployTokenSymbol" />
          </BodyText>
          <BodyText> {inputStore.erc20.symbol}</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployTokensFor" />
          </BodyText>
          <BodyText> {inputStore.erc20.rate}</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployReceiver" />
          </BodyText>
          <BodyText> {inputStore.erc20.receiver}</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployDecimals" />
          </BodyText>
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
