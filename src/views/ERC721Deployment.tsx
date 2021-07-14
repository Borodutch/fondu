import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/InputStore'
import { BodyText } from 'components/Text'
import { FormattedMessage } from 'react-intl'

const ERC721DeploymentView: FC = () => {
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
          <BodyText> ERC-721</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployTokenName" />
          </BodyText>
          <BodyText> {inputStore.erc721.name}</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployTokenSymbol" />
          </BodyText>
          <BodyText> {inputStore.erc721.symbol}</BodyText>
        </li>
        <li>
          <BodyText>
            <FormattedMessage id="deployReceiver" />
          </BodyText>
          <BodyText> {inputStore.erc721.receiver}</BodyText>
        </li>
      </ol>
    </>
  )
}

export default observer(ERC721DeploymentView)
