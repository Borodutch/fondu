import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppNetworks, appStore } from "store/app.store"
import { buttonStyleDark, buttonStyleLight } from "./styles"
import { theme } from "../Theme/theme"

const Mode: FC = () => {
  return (
    <nav>
      <button
        onClick={() => {
          appStore.toggleDark()
          theme()
        }}
        className={
          appStore.currentTheme === AppNetworks.Light
            ? buttonStyleDark
            : buttonStyleLight
        }
      >
        {appStore.currentTheme === AppNetworks.Light && "Light"}
        {appStore.currentTheme === AppNetworks.Dark && "Dark"}
      </button>
    </nav>
  )
}

export default observer(Mode)
