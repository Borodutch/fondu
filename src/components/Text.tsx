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

const subtitleStyle = classnames('text-lg', 'text-base-darkgray', 'font-medium')
export const SubtitleText: FC = ({ children }) => {
  return <h2 className={subtitleStyle}>{children}</h2>
}

const ethBalanceStyle = classnames(stylizedTextColor, 'text-xl', 'transition')
export const ETHBalanceText: FC = ({ children }) => {
  return <span className={ethBalanceStyle}>{children}</span>
}

const usdBalanceStyle = classnames('text-text-lightgray', 'text-sm')
export const USDBalanceText: FC = ({ children }) => {
  return <span className={usdBalanceStyle}>{children}</span>
}

const sectionTitleStyle = classnames(
  'text-2xl',
  'uppercase',
  'font-medium',
  'text-base-black',
  'mb-2'
)
export const SectionTitleText: FC = ({ children }) => {
  return <h2 className={sectionTitleStyle}>{children}</h2>
}

const bodyTextStyle = classnames('text-base-black')

export const BodyText: FC = ({ children }) => {
  return <span className={bodyTextStyle}>{children}</span>
}

export const BoldText: FC = ({ children }) => {
  return <b className={bodyTextStyle}>{children}</b>
}
