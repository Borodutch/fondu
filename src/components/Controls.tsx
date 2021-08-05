import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { hideMobile } from 'helpers/style'

const stylizedTextColor = classnames('text-main')
const stylizedBackgroundColor = classnames('bg-main')
const stylizedPassedTextColor = classnames('text-main')
const stylizedPassedBorderColor = classnames('border-active')
const inactiveTextColor = classnames('text-gray-300')
const inactiveBorderColor = classnames('border-active')
const inactiveBackgroundColor = classnames('bg-gray-300')

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
  'text-background-main',
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
const passedTabStyle = classnames(
  baseTabStyle,
  stylizedBackgroundColor,
  'opacity-50'
)
const baseTextStyle = classnames(hideMobile, 'transition')
const activeTextStyle = classnames(baseTextStyle, stylizedTextColor)
const inactiveTextStyle = classnames(baseTextStyle, inactiveTextColor)
const passedTextStyle = classnames(
  baseTextStyle,
  stylizedPassedTextColor,
  'opacity-50'
)

const baseLineStyle = classnames('border-b-2', 'w-10', 'md:w-40')
const inactiveLineStyle = classnames(
  baseLineStyle,
  'border-dashed',
  'border-gray-300'
)
const passedLineStyle = classnames(
  baseLineStyle,
  stylizedPassedBorderColor,
  'opacity-50'
)

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
        <>
          <div key={index} className={singleStepStyle}>
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
        </>
      ))}
    </div>
  )
}
