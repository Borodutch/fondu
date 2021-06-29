import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'

const ThemeProvider: FC = ({ children }) => {
  const root = window.document.documentElement
  root.classList.remove(appStore.theme === 'dark' ? 'light' : 'dark')
  root.classList.value = appStore.theme
  return <div className={appStore.theme}>{children}</div>
}

export default observer(ThemeProvider)
