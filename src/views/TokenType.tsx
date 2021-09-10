import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { inputStore, TokenType } from 'store/InputStore'
import Button from 'components/Button'
import { classnames } from 'classnames/tailwind'

const tokenTypeStyle = classnames(
  'flex',
  'flex-row',
  'space-x-3',
  'place-content-evenly',
  'text-2xl',
  'py-4',
  'items-center'
)
const tokenTypeText = classnames('text-text-main', 'text-lg')

const TokenTypeView: FC = () => {
  return (
    <div className={tokenTypeStyle}>
      <div>
        <Button
          title="ERC-20"
          selected={inputStore.tokenType === TokenType.ERC20}
          onClick={() => inputStore.setTokenType(TokenType.ERC20)}
        />
      </div>
      <div className={tokenTypeText}>
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
