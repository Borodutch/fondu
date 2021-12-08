import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/InputStore'
import { BodyText } from 'components/Text'
import { FormattedMessage } from 'react-intl'

const DeployedContract: FC = () => {
  return (
    <>
      <br />
      <BodyText>
        <FormattedMessage id="deployedContractInfo" />
      </BodyText>
      <br />
      <br />
      <p>
        <BodyText>
          <FormattedMessage id="deployedContractFrom" />
        </BodyText>
        <BodyText> {inputStore.deployedContract.from}</BodyText>
      </p>
      <BodyText>
        <FormattedMessage id="deployedContractAddress" />
      </BodyText>
      <BodyText> {inputStore.deployedContract.contractAddress}</BodyText>
    </>
  )
}

export default observer(DeployedContract)
