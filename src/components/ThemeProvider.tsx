import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'

const ThemeProvider: FC = ({ children }) => {
  const root = window.document.documentElement
  // Theme
  root.classList.remove(appStore.theme === 'dark' ? 'light' : 'dark')
  root.classList.add(appStore.theme)
  // Network
  root.classList.remove(appStore.network === 'real' ? 'test' : 'real')
  root.classList.add(appStore.network)
  return (
    <div className={`${appStore.theme} ${appStore.network}`}>{children}</div>
  )
}

export default observer(ThemeProvider)
