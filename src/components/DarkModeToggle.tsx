import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import Button from 'components/Button'

const Toggle: FC = () => {
  return (
    <div>
      <Button
        title={appStore.theme}
        onClick={() => {
          appStore.toggleDark()
        }}
      />
    </div>
  )
}

export default observer(Toggle)
