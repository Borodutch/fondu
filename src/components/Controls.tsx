import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { hideMobile } from 'helpers/style'

const stylizedTextColor = classnames('text-base-blue')
const realStylizedTextColor = classnames('text-red-400')

const stylizedBorderColor = classnames('border-blue-400')
const realStylizedBorderColor = classnames('border-red-400')

const stylizedBackgroundColor = classnames('bg-base-blue')
const realStylizedBackgroundColor = classnames('bg-red-400')

const stylizedPassedTextColor = classnames('text-blue-200')
const realStylizedPassedTextColor = classnames('text-red-200')

const stylizedPassedBorderColor = classnames('border-blue-200')
const realStylizedPassedBorderColor = classnames('border-red-200')

const stylizedPassedBackgroundColor = classnames('bg-blue-200')
const realStylizedPassedBackgroundColor = classnames('bg-red-200')

const inactiveTextColor = classnames('text-gray-300')
const realInactiveTextColor = classnames('text-red-300')

const inactiveBorderColor = classnames('border-gray-300')
const realInactiveBorderColor = classnames('border-red-300')

const inactiveBackgroundColor = classnames('bg-gray-300')

const realInactiveBackgroundColor = classnames('bg-red-100')

const baseButtonStyle = classnames(
  'flex-1',
  'p-3',
  'border-2',
  'hover:opacity-80',
  'focus:outline-none',
  'rounded-base',
  'transition',
  'min-w-max'
)
const inactiveButtonStyle = classnames(
  baseButtonStyle,
  inactiveBorderColor,
  inactiveTextColor,
  'cursor-default'
)
const realInactiveButtonStyle = classnames(
  baseButtonStyle,
  realInactiveBorderColor,
  realInactiveTextColor,
  'cursor-default'
)
const inactiveFilledButtonStyle = classnames(
  baseButtonStyle,
  inactiveBackgroundColor,
  'text-white',
  'cursor-default'
)
const realInactiveFilledButtonStyle = classnames(
  baseButtonStyle,
  realInactiveBackgroundColor,
  'text-red-400',
  'cursor-default'
)

const activeButtonStyle = classnames(
  baseButtonStyle,
  stylizedBorderColor,
  stylizedTextColor
)

const realActiveButtonStyle = classnames(
  baseButtonStyle,
  realStylizedBorderColor,
  realStylizedTextColor
)
const activeFilledButtonStyle = classnames(
  baseButtonStyle,
  stylizedBackgroundColor,
  'text-white'
)
const realActiveFilledButtonStyle = classnames(
  baseButtonStyle,
  realStylizedBackgroundColor,
  'text-red-400'
)

interface buttonTextProps {
  active?: Boolean
  filled?: Boolean
  real?: Boolean
}
export const Button: FC<
  buttonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, active = true, filled = false, real = false, ...props }) => {
  return (
    <button
      {...props}
      className={
        real
          ? !active
            ? !filled
              ? realInactiveButtonStyle
              : realInactiveFilledButtonStyle
            : !filled
            ? realActiveButtonStyle
            : realActiveFilledButtonStyle
          : !active
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
const realContractButtonStyleActive = classnames(
  contractButtonStyle,
  realStylizedBorderColor,
  realStylizedTextColor
)

const contractButtonStyleInactive = classnames(
  contractButtonStyle,
  'text-text-gray',
  'border-dashed'
)
const realContractButtonStyleInactive = classnames(
  contractButtonStyle,
  'text-red-400',
  'border-dashed'
)
interface contractButtonTextProps {
  active: Boolean
  real?: Boolean
}
export const ContractButton: FC<
  contractButtonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, active, real, ...props }) => {
  return (
    <button
      {...props}
      className={
        real
          ? active
            ? realContractButtonStyleActive
            : realContractButtonStyleInactive
          : active
          ? contractButtonStyleActive
          : contractButtonStyleInactive
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
const realActiveTabStyle = classnames(baseTabStyle, realStylizedBackgroundColor)

const inactiveTabStyle = classnames(baseTabStyle, inactiveBackgroundColor)
const realInactiveTabStyle = classnames(
  baseTabStyle,
  realInactiveBackgroundColor
)

const passedTabStyle = classnames(baseTabStyle, stylizedPassedBackgroundColor)
const realPassedTabStyle = classnames(
  baseTabStyle,
  realStylizedPassedBackgroundColor
)

const baseTextStyle = classnames(hideMobile, 'transition')
const activeTextStyle = classnames(baseTextStyle, stylizedTextColor)
const realActiveTextStyle = classnames(baseTextStyle, realStylizedTextColor)

const inactiveTextStyle = classnames(baseTextStyle, inactiveTextColor)
const realInactiveTextStyle = classnames(baseTextStyle, realInactiveTextColor)

const passedTextStyle = classnames(baseTextStyle, stylizedPassedTextColor)
const realPassedTextStyle = classnames(
  baseTextStyle,
  realStylizedPassedTextColor
)

const baseLineStyle = classnames('border-b-2', 'w-10', 'md:w-40')
const inactiveLineStyle = classnames(baseLineStyle, 'border-dashed')
const passedLineStyle = classnames(baseLineStyle, stylizedPassedBorderColor)
const realPassedLineStyle = classnames(
  baseLineStyle,
  realStylizedPassedBorderColor
)

interface stepperTabHeaderProps {
  tabs: Array<String>
  currentTab: Number
  real?: Boolean
}

export const StepperTabs: FC<stepperTabHeaderProps> = ({
  tabs,
  currentTab,
  real,
}) => {
  return (
    <div className={stepperWrapper}>
      {tabs.map((tab: String, index) => (
        <div key={index}>
          <div className={singleStepStyle}>
            <div
              className={
                index + 1 === currentTab
                  ? real
                    ? realActiveTabStyle
                    : activeTabStyle
                  : index < currentTab
                  ? real
                    ? realPassedTabStyle
                    : passedTabStyle
                  : real
                  ? realInactiveTabStyle
                  : inactiveTabStyle
              }
            >
              {index + 1}
            </div>
            <span
              className={
                index + 1 === currentTab
                  ? real
                    ? realActiveTextStyle
                    : activeTextStyle
                  : index < currentTab
                  ? real
                    ? realPassedTextStyle
                    : passedTextStyle
                  : real
                  ? realInactiveTextStyle
                  : inactiveTextStyle
              }
            >
              {tab}
            </span>
          </div>
          {index < tabs.length - 1 && (
            <div
              className={
                index + 1 < currentTab
                  ? real
                    ? realPassedLineStyle
                    : passedLineStyle
                  : inactiveLineStyle
              }
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}
