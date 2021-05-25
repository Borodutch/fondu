import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { rootStyle, rootDarkStyle } from "./styles"
import { AppNetworks, appStore } from "store/app.store"

const Root: FC = ({ children }) => {
  return (
    <main
      className={
        appStore.currentTheme === AppNetworks.Light ? rootDarkStyle : rootStyle
      }
    >
      {children}
    </main>
  )
}

export default observer(Root)
