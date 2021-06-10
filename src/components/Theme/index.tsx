import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { appStore } from "store/app.store"

const ThemeProvider: FC = ({ children }) => {
  let theme = appStore.colorTheme

  const root = window.document.documentElement
  const isDark = theme === "dark"

  root.classList.remove(isDark ? "light" : "dark")
  root.classList.value = theme
  console.log(window.localStorage)
  return <div className={theme}>{children}</div>
}
export default observer(ThemeProvider)
