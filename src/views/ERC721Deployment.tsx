import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/InputStore'
import { BodyText, BoldText } from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { AppNetworks, appStore } from 'store/AppStore'

const ERC721DeploymentView: FC = () => {
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
            ERC-721
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployTokenName" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc721.name}
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployTokenSymbol" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc721.symbol}
          </BodyText>
        </li>
        <li>
          <BoldText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="deployReceiver" />
          </BoldText>
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            {' '}
            {inputStore.erc721.receiver}
          </BodyText>
        </li>
      </ol>
    </>
  )
}

export default observer(ERC721DeploymentView)
