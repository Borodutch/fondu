import { FC } from 'react'
import Navigation from 'components/Navigation'
import { observer } from 'mobx-react-lite'
import DarkModeToggle from 'components/DarkModeToggle'
import { LogoText } from 'components/Text'
import LanguageButtons from 'components/LanguageButtons'
import { classnames } from 'classnames/tailwind'

const headerStyle = classnames(
  'mb-10',
  'flex',
  'flex-row',
  'justify-between',
  'items-center'
)

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
