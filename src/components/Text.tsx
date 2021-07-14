import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const stylizedTextColor = classnames('text-base-blue')
export const StylizedText: FC = ({ children }) => {
  return <span className={stylizedTextColor}>{children}</span>
}

const logoTextStyle = classnames(
  'text-3xl',
  'font-bold',
  'bg-clip-text',
  'text-transparent',
  'uppercase'
)
const logoGradient = classnames(
  'bg-gradient-to-r',
  'from-base-blue',
  'to-light-purple'
)
const logoStyle = classnames(logoTextStyle, logoGradient)
export const LogoText: FC = ({ children }) => {
  return <div className={logoStyle}>{children}</div>
}

const titleStyle = classnames('text-lg', 'text-base-darkgray', 'font-medium')
export const TitleText: FC = ({ children }) => {
  return <h2 className={titleStyle}>{children}</h2>
}


const bodyTextStyle = classnames('text-base-black')

export const BodyText: FC = ({ children }) => {
  return <span className={bodyTextStyle}>{children}</span>
}