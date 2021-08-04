import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import { classnames } from 'classnames/tailwind'

const ThemeProvider: FC = ({ children }) => {
  const backgroundStyle = classnames('bg-background-main', 'h-screen', 'pt-5')

  const root = window.document.documentElement
  // Theme
  root.classList.remove(appStore.theme === 'dark' ? 'light' : 'dark')
  root.classList.add(appStore.theme)
  // Network
  root.classList.remove(appStore.network === 'real' ? 'test' : 'real')
  root.classList.add(appStore.network)
  return (
    <div className={`${appStore.theme} ${appStore.network} ${backgroundStyle}`}>
      {children}
    </div>
  )
}

export default observer(ThemeProvider)
