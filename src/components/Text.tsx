import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const logoTextStyle = classnames(
  'text-3xl',
  'font-bold',
  'bg-clip-text',
  'text-transparent',
  'uppercase'
)
const logoGradient = classnames(
  'bg-gradient-to-r',
  'from-logo-from',
  'to-logo-to'
)
const logoStyle = classnames(logoTextStyle, logoGradient)
export const LogoText: FC = ({ children }) => {
  return <div className={logoStyle}>{children}</div>
}

const titleStyle = classnames('text-lg', 'text-text-main', 'font-medium')
export const TitleText: FC = ({ children }) => {
  return <h2 className={titleStyle}>{children}</h2>
}

const bodyTextStyle = classnames('text-text-main', 'break-words')

export const BodyText: FC = ({ children }) => {
  return <span className={bodyTextStyle}>{children}</span>
}
