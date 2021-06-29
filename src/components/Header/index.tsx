import React, { FC } from 'react'
import { headerStyle } from './styles'
import Navigation from 'components/Navigation'
import { observer } from 'mobx-react-lite'
import DarkModeToggle from 'components/DarkModeToggle'
import { LogoText } from 'components/Text'
import LanguageButtons from 'components/LanguageButtons'

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <LogoText>
        <a href="/">Fondu</a>
      </LogoText>
      <DarkModeToggle />
      <LanguageButtons />
      <Navigation />
    </header>
  )
}

export default observer(Header)
