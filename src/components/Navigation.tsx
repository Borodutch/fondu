import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import { Button } from 'components/Controls'
import { FormattedMessage } from 'react-intl'

const Navigation: FC = () => {
  return (
    <nav>
      <Button onClick={() => appStore.toggleNetwork()}>
        {appStore.network === 'real' && (
          <FormattedMessage id="buttonRealNetwork" />
        )}
        {appStore.network === 'test' && (
          <FormattedMessage id="buttonTestNetwork" />
        )}
      </Button>
    </nav>
  )
}

export default observer(Navigation)
