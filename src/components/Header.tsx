import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import DarkModeToggle from 'components/DarkModeToggle'
import { LogoText } from 'components/Text'
import LanguageButtons from 'components/LanguageButtons'
import { classnames } from 'classnames/tailwind'

const headerStyle = classnames(
  'mb-10',
  'flex',
  'justify-between',
  'items-center',
  'px-3',
  'md:p-0'
)

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <LogoText>
        <a href="/">Fondu</a>
      </LogoText>
      <DarkModeToggle />
      <LanguageButtons />
    </header>
  )
}

export default observer(Header)
