import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { inputStore, TokenType } from 'store/InputStore'
import { ContractButton } from 'components/Controls'
import { AppNetworks, appStore } from 'store/AppStore'

const TokenTypeView: FC = () => {
  return (
    <div className="flex flex-row justify-evenly text-2xl py-4 items-center">
      <ContractButton
        active={inputStore.tokenType === TokenType.ERC20}
        onClick={() => inputStore.setTokenType(TokenType.ERC20)}
        real={appStore.currentNetwork === AppNetworks.Real}
      >
        ERC-20
      </ContractButton>
      <div className="text-text-gray text-lg">
        <FormattedMessage id="or" />
      </div>
      <ContractButton
        active={inputStore.tokenType === TokenType.ERC721}
        onClick={() => inputStore.setTokenType(TokenType.ERC721)}
        real={appStore.currentNetwork === AppNetworks.Real}
      >
        ERC-721
      </ContractButton>
    </div>
  )
}

export default observer(TokenTypeView)
