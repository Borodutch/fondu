import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { appStore } from "store/app.store"

interface ThemeProps {
  value?: string
}

const ThemeProvider: FC<ThemeProps> = ({ children }) => {
  let theme = appStore.dark ? "dark" : "light"

  const root = window.document.documentElement
  const isDark = theme === "dark"

  root.classList.remove(isDark ? "light" : "dark")
  root.classList.value = theme
  console.log(root.classList)
  return <div className={theme}>{children}</div>
}
export default observer(ThemeProvider)
