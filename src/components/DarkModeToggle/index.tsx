import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Theme, appStore } from "store/app.store"
import { buttonStyleDark, buttonStyleLight } from "./styles"

const Toggle: FC = () => {
  return (
    <button
      onClick={() => {
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
