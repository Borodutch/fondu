import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/input.store'
import { BodyText, BoldText } from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { AppNetworks, appStore } from 'store/app.store'

const ERC20DeploymentView: FC = () => {
  return (
    <>
      <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
        <FormattedMessage id="deployCheck" />
      </BoldText>
      <ol className="list-disc list-inside pt-2">
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployTokenType" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            ERC-20
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployTokenName" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc20.name}
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployTokenSymbol" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc20.symbol}
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployTokensFor" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc20.rate}
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployReceiver" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc20.receiver}
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployDecimals" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc20.decimals}
          </BodyText>
        </li>
        {inputStore.erc20.timed && (
          <li>
            <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
              <FormattedMessage id="deployTimed" />
            </BodyText>
          </li>
        )}
        {inputStore.erc20.capped && (
          <li>
            <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
              <FormattedMessage id="deployRaise" />
              {inputStore.erc20.maxTokens}
            </BodyText>
          </li>
        )}
        {inputStore.erc20.whitelist && (
          <li>
            <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
              <FormattedMessage id="deployWhitelist" />
            </BodyText>
          </li>
        )}
      </ol>
    </>
  )
}

export default observer(ERC20DeploymentView)
