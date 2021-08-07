import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { hideMobile } from 'helpers/style'

const backgroundColor = classnames('bg-main')

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

const activeTabStyle = classnames(baseTabStyle, backgroundColor)
const inactiveTabStyle = classnames(
  baseTabStyle,
  'bg-gray-300',
  'border-active'
)
const passedTabStyle = classnames(activeTabStyle, 'opacity-50')
const baseTextStyle = classnames(hideMobile, 'transition')
const activeTextStyle = classnames(baseTextStyle, 'text-main')
const inactiveTextStyle = classnames(baseTextStyle, 'text-gray-300')
const passedTextStyle = classnames(activeTextStyle, 'opacity-50')

interface stepperTabHeaderProps {
  tabs: Array<String>
  currentTab: Number
}

const StepperTabs: FC<stepperTabHeaderProps> = ({ tabs, currentTab }) => {
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
        </>
      ))}
    </div>
  )
}

export default StepperTabs
