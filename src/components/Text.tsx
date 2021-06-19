import React, { FC } from "react"
import { classnames } from "classnames/tailwind"

const stylizedTextColor = classnames("text-base-blue")
const realStylizedTextColor = classnames("text-red-400")

export const StylizedText: FC = ({ children }) => {
  return <span className={stylizedTextColor}>{children}</span>
}

const logoTextStyle = classnames(
  "text-3xl",
  "font-bold",
  "bg-clip-text",
  "text-transparent",
  "uppercase"
)
const logoGradient = classnames(
  "bg-gradient-to-r",
  "from-base-blue",
  "to-light-purple"
)
const logoStyle = classnames(logoTextStyle, logoGradient)
const realLogoStyle = classnames(
  logoTextStyle,
  "bg-gradient-to-r",
  "from-red-600",
  "to-light-purple"
)
interface logoTextProps {
  real?: Boolean
}
export const LogoText: FC<logoTextProps> = ({ children, real }) => {
  return <div className={real ? realLogoStyle : logoStyle}>{children}</div>
}

const subtitleStyle = classnames("text-lg", "text-base-darkgray", "font-medium")
const realSubtitleStyle = classnames("text-lg", "text-red-600", "font-medium")
interface subtitleTextProps {
  real?: Boolean
}
export const SubtitleText: FC<subtitleTextProps> = ({ children, real }) => {
  return (
    <h2 className={real ? realSubtitleStyle : subtitleStyle}>{children}</h2>
  )
}

const ethBalanceStyle = classnames(stylizedTextColor, "text-xl", "transition")
const realEthBalanceStyle = classnames(
  realStylizedTextColor,
  "text-xl",
  "transition"
)
interface ETHBalanceTextProps {
  real?: Boolean
}
export const ETHBalanceText: FC<ETHBalanceTextProps> = ({ children, real }) => {
  return (
    <span className={real ? realEthBalanceStyle : ethBalanceStyle}>
      {children}
    </span>
  )
}

const usdBalanceStyle = classnames("text-text-lightgray", "text-sm")
const realUsdBalanceStyle = classnames("text-red-400", "text-sm")
interface USDBalanceTextProps {
  real?: Boolean
}
export const USDBalanceText: FC<USDBalanceTextProps> = ({ children, real }) => {
  return (
    <span className={real ? realUsdBalanceStyle : usdBalanceStyle}>
      {children}
    </span>
  )
}

const sectionTitleStyle = classnames(
  "text-2xl",
  "uppercase",
  "font-medium",
  "text-base-black",
  "mb-2"
)
const realSectionTitleStyle = classnames(
  "text-2xl",
  "uppercase",
  "font-medium",
  "text-red-900",
  "mb-2"
)
interface sectionTitleTextProps {
  real?: Boolean
}
export const SectionTitleText: FC<sectionTitleTextProps> = ({
  children,
  real,
}) => {
  return (
    <h2 className={real ? realSectionTitleStyle : sectionTitleStyle}>
      {children}
    </h2>
  )
}

const bodyTextStyle = classnames("text-base-black")
const realBodyTextStyle = classnames("text-red-600")
interface bodyTextProps {
  real?: Boolean
}
export const BodyText: FC<bodyTextProps> = ({ children, real }) => {
  return (
    <span className={real ? realBodyTextStyle : bodyTextStyle}>{children}</span>
  )
}

export const BoldText: FC<bodyTextProps> = ({ children, real }) => {
  return <b className={real ? realBodyTextStyle : bodyTextStyle}>{children}</b>
}
