import { ThemeContext } from "components/Theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Theme, appStore } from "store/app.store"
import { buttonStyleDark, buttonStyleLight } from "./styles"

export const Toggle: FC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isLight() {
    return theme === "light"
  }
  return (
    <button
      onClick={(e) => {
        setTheme(isLight() ? "dark" : "light")
        appStore.toggleDark()
      }}
      className={
        appStore.currentTheme === Theme.Light
          ? buttonStyleLight
          : buttonStyleDark
      }
    >
      {appStore.currentTheme === Theme.Light && "Dark"}
      {appStore.currentTheme === Theme.Dark && "Light"}
    </button>
  )
}

export default observer(Toggle)
