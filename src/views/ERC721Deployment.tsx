import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { inputStore } from 'store/InputStore'
import { BodyText } from 'components/Text'
import { FormattedMessage } from 'react-intl'

const ERC721DeploymentView: FC = () => {
  const url = 'http://localhost:1337/erc721'
  let xhr = new XMLHttpRequest()
  xhr.open('POST', url, false)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(inputStore.erc721))
  if (xhr.status !== 200) {
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`)
  } else {
    inputStore.setDeployData(JSON.parse(xhr.response))
  }

  return (
    <>
      <br />
      <BodyText>
        <FormattedMessage id="bodyOfContract" />
      </BodyText>
      <br />
      <br />
      <pre>
        <BodyText>{inputStore.deployData.contract}</BodyText>
      </pre>
    </>
  )
}

export default observer(ERC721DeploymentView)
