import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { inputStore, TokenType } from 'store/InputStore'
import Button from 'components/Button'

const TokenTypeView: FC = () => {
  return (
    <div className="flex flex-row justify-evenly text-2xl py-4 items-center">
      <div>
        <Button
          title="ERC-20"
          selected={inputStore.tokenType === TokenType.ERC20}
          onClick={() => inputStore.setTokenType(TokenType.ERC20)}
        />
      </div>
      <div className="text-text-gray text-lg">
        <FormattedMessage id="or" />
      </div>
      <div>
        <Button
          title="ERC-721"
          selected={inputStore.tokenType === TokenType.ERC721}
          onClick={() => inputStore.setTokenType(TokenType.ERC721)}
        />
      </div>
    </div>
  )
}

export default observer(TokenTypeView)
