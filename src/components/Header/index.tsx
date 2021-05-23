import React, { FC } from "react"
import { headerStyle } from "./styles"
import Navigation from "components/Navigation"
import { observer } from "mobx-react-lite"
import { LogoText } from "components/Text"

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <LogoText>
        <a href="/">Fondu</a>
      </LogoText>
      <Navigation />
    </header>
  )
}

export default observer(Header)
