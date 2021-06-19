import React, { FC } from "react"
import { headerStyle } from "./styles"
import Navigation from "components/Navigation"
import { observer } from "mobx-react-lite"
import DarkModeToggle from "components/DarkModeToggle"
import { LogoText } from "components/Text"
import LanguageButtons from "components/LanguageButtons"
import { AppNetworks, appStore } from "store/app.store"

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <LogoText real={appStore.currentNetwork === AppNetworks.Real}>
        <a href="/">Fondu</a>
      </LogoText>
      <DarkModeToggle />
      <LanguageButtons />
      <Navigation />
    </header>
  )
}

export default observer(Header)
