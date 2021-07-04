import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import { Button } from 'components/Controls'

const Toggle: FC = () => {
  return (
    <div>
      <Button
        onClick={() => {
          appStore.toggleDark()
        }}
      >
        {appStore.theme}
      </Button>
    </div>
  )
}

export default observer(Toggle)
