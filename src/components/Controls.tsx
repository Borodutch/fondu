import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { hideMobile } from 'helpers/style'

// const stylizedTextColor = classnames('text-base-blue')
// const stylizedBorderColor = classnames('border-blue-400')
// const stylizedBackgroundColor = classnames('bg-base-blue')
// const stylizedPassedTextColor = classnames('text-blue-200')
// const stylizedPassedBorderColor = classnames('border-blue-200')
// const stylizedPassedBackgroundColor = classnames('bg-blue-200')
// const inactiveTextColor = classnames('text-gray-300')
// const inactiveBorderColor = classnames('border-gray-300')
// const inactiveBackgroundColor = classnames('bg-gray-300')
const stylizedTextColor = classnames('text-text-textMain')
const stylizedBorderColor = classnames('border-border')
const stylizedBackgroundColor = classnames('bg-base-active')
const stylizedPassedTextColor = classnames('text-text-textNetwork')
const stylizedPassedBorderColor = classnames('border-active')
const stylizedPassedBackgroundColor = classnames('bg-base-active')
const inactiveTextColor = classnames('text-text-textNetwork')
const inactiveBorderColor = classnames('border-active')
const inactiveBackgroundColor = classnames('bg-base-background')

const baseButtonStyle = classnames(
  'flex-1',
  'p-3',
  // 'border-2',
  'hover:opacity-80',
  'focus:outline-none',
  'rounded-base',
  'transition',
  'min-w-max'
)
const inactiveButtonStyle = classnames(
  'border-2',
  baseButtonStyle,
  inactiveBorderColor,
  // inactiveTextColor,
  'text-text-textNetwork',
  'cursor-default'
)
const inactiveFilledButtonStyle = classnames(
  baseButtonStyle,
  inactiveBackgroundColor,
  // 'text-text-textInactive',
  'text-pink-400',
  'cursor-default'
)

const activeButtonStyle = classnames(
  baseButtonStyle,
  'bg-button-active',
  // stylizedBorderColor,
  // stylizedTextColor
  'text-text-textButton'
)

const activeFilledButtonStyle = classnames(
  baseButtonStyle,
  stylizedBackgroundColor,
  // 'text-text-textMain'
  'text-pink-400'
)

interface buttonTextProps {
  active?: Boolean
  filled?: Boolean
}
export const Button: FC<
  buttonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, active = true, filled = false, ...props }) => {
  return (
    <button
      {...props}
      className={
        !active
          ? !filled
            ? inactiveButtonStyle
            : inactiveFilledButtonStyle
          : !filled
          ? activeButtonStyle
          : activeFilledButtonStyle
      }
    >
      {children}
    </button>
  )
}

const contractButtonStyle = classnames(
  'font-medium',
  'p-2',
  'border-2',
  'rounded-base',
  'focus:outline-none'
)
const contractButtonStyleActive = classnames(
  contractButtonStyle,
  stylizedBorderColor,
  stylizedTextColor
)
const contractButtonStyleInactive = classnames(
  contractButtonStyle,
  'text-text-gray',
  'border-dashed'
)
interface contractButtonTextProps {
  active: Boolean
}
export const ContractButton: FC<
  contractButtonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, active, ...props }) => {
  return (
    <button
      {...props}
      className={
        active ? contractButtonStyleActive : contractButtonStyleInactive
      }
    >
      {children}
    </button>
  )
}

const stepperWrapper = classnames(
  'w-auto',
  'md:w-4/6',
  'mx-auto',
  'flex',
  'justify-between',
  'items-center',
  'pt-3',
  'pb-8',
  'space-x-3'
)
const singleStepStyle = classnames(
  'flex',
  'flex-row',
  'items-center',
  'space-x-2'
)
const baseTabStyle = classnames(
  'w-8',
  'h-8',
  'text-text-textButton',
  'rounded-full',
  'transition',
  'flex',
  'items-center',
  'justify-center'
)

const activeTabStyle = classnames(baseTabStyle, stylizedBackgroundColor)
const inactiveTabStyle = classnames(
  baseTabStyle,
  inactiveBackgroundColor,
  inactiveBorderColor
)
const passedTabStyle = classnames(baseTabStyle, stylizedPassedBackgroundColor)
const baseTextStyle = classnames(hideMobile, 'transition')
const activeTextStyle = classnames(baseTextStyle, stylizedTextColor)
const inactiveTextStyle = classnames(baseTextStyle, inactiveTextColor)
const passedTextStyle = classnames(baseTextStyle, stylizedPassedTextColor)

const baseLineStyle = classnames('border-b-2', 'w-10', 'md:w-40')
const inactiveLineStyle = classnames(baseLineStyle, 'border-dashed')
const passedLineStyle = classnames(baseLineStyle, stylizedPassedBorderColor)

interface stepperTabHeaderProps {
  tabs: Array<String>
  currentTab: Number
}

export const StepperTabs: FC<stepperTabHeaderProps> = ({
  tabs,
  currentTab,
}) => {
  return (
    <div className={stepperWrapper}>
      {tabs.map((tab: String, index) => (
        <div key={index}>
          <div className={singleStepStyle}>
            <div
              className={
                index + 1 === currentTab
                  ? activeTabStyle
                  : index < currentTab
                  ? passedTabStyle
                  : inactiveTabStyle
              }
            >
              {index + 1}
            </div>
            <span
              className={
                index + 1 === currentTab
                  ? activeTextStyle
                  : index < currentTab
                  ? passedTextStyle
                  : inactiveTextStyle
              }
            >
              {tab}
            </span>
          </div>
          {index < tabs.length - 1 && (
            <div
              className={
                index + 1 < currentTab ? passedLineStyle : inactiveLineStyle
              }
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}
