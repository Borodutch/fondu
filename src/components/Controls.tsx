import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { hideMobile } from 'helpers/style'

const stylizedTextColor = classnames('text-base-blue')
const stylizedHoverTextColor = classnames('hover:text-white')
const stylizedBorderColor = classnames('border-blue-400')
const stylizedBackgroundColor = classnames('bg-base-blue')
const stylizedHoverBackgroundColor = classnames('hover:bg-base-blue')
const stylizedPassedTextColor = classnames('text-blue-200')
const stylizedPassedBorderColor = classnames('border-blue-200')
const stylizedPassedBackgroundColor = classnames('bg-blue-200')
const inactiveTextColor = classnames('text-gray-300')
const inactiveBorderColor = classnames('border-gray-300')
const inactiveBackgroundColor = classnames('bg-gray-300')

const baseButtonStyle = classnames(
  'flex-1',
  'p-3',
  'border',
  'hover:opacity-80',
  'focus:outline-none',
  'rounded-base',
  'transition',
  'min-w-max',
  'font-light'
)
const inactiveButtonStyle = classnames(
  baseButtonStyle,
  inactiveBorderColor,
  inactiveTextColor,
  'cursor-default'
)
const inactiveFilledButtonStyle = classnames(
  baseButtonStyle,
  inactiveBackgroundColor,
  'text-white',
  'cursor-default'
)

const activeButtonStyle = classnames(
  baseButtonStyle,
  stylizedBorderColor,
  stylizedTextColor,
  stylizedHoverTextColor,
  stylizedHoverBackgroundColor
)

const activeFilledButtonStyle = classnames(
  baseButtonStyle,
  stylizedBackgroundColor,
  'text-white'
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
  'text-white',
  'rounded-full',
  'transition',
  'flex',
  'items-center',
  'justify-center'
)

const activeTabStyle = classnames(baseTabStyle, stylizedBackgroundColor)
const inactiveTabStyle = classnames(baseTabStyle, inactiveBackgroundColor)
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
