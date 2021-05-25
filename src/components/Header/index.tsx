import React, { FC } from "react"
import {
  headerStyle,
  logoStyleReal,
  logoStyleTest,
  logoWrapperStyle,
} from "./styles"
import Navigation from "components/Navigation"
import { observer } from "mobx-react-lite"
import { AppNetworks, appStore } from "store/app.store"
import DarkModeToggle from "components/DarkModeToggle"

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <div className={logoWrapperStyle}>
        <a
          className={
            appStore.currentNetwork === AppNetworks.Real
              ? logoStyleReal
              : logoStyleTest
          }
          href="/"
        >
          Fondu
        </a>
      </div>
      <DarkModeToggle />

      <Navigation />
    </header>
  )
}

export default observer(Header)
