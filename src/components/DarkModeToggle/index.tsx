import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/app.store'
import { buttonStyleDark, buttonStyleLight } from './styles'

const Toggle: FC = () => {
  return (
    <button
      onClick={() => {
        appStore.toggleDark()
      }}
      className={appStore.dark ? buttonStyleDark : buttonStyleLight}
    >
      {appStore.dark === false && 'Dark'}
      {appStore.dark === true && 'Light'}
    </button>
  )
}

export default observer(Toggle)
