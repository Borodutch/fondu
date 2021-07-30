import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import Button from 'components/Button'
const Navigation: FC = () => {
  return (
    <nav>
      <Button
        intlKey={
          appStore.network === 'real'
            ? 'buttonRealNetwork'
            : 'buttonTestNetwork'
        }
        onClick={() => appStore.toggleNetwork()}
      ></Button>
    </nav>
  )
}

export default observer(Navigation)
