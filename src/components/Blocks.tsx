import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import classNames from 'classnames'

const largeBlockClasses = classnames(
  'bg-purple-500',
  'bg-opacity-25',
  'rounded',
  'my-3',
  'p-3'
)
export const LargeBlock: FC = ({ children }) => {
  return <div className={largeBlockClasses}>{children}</div>
}

const subBlockClasses = classnames(
  'p-2',
  'bg-purple-500',
  'bg-opacity-25',
  'rounded',
  'flex-grow'
)
export const SubBlock: FC = ({ children }) => {
  return <div className={subBlockClasses}>{children}</div>
}

const row = classnames('flex', 'flex-row', 'my-1')
export const Row: FC = ({ children }) => {
  return <div className={row}>{children}</div>
}

type BlockNumberProps = {
  number: Number
  isFilled?: Boolean
}
export const BlockNumber: FC<BlockNumberProps> = ({
  number,
  isFilled = false,
}) => {
  const classes = classnames(
    'border-2',
    'rounded-full',
    'w-10',
    'h-10',
    'flex',
    'border-purple-400',
    { 'text-purple-400': !isFilled },
    { 'bg-purple-900': !isFilled },
    { 'bg-purple-400': isFilled === true }
  )
  return (
    <div className={classes}>
      <p className='m-auto'>{number}</p>
    </div>
  )
}

type DashLineProps = {
  isActive?: Boolean
}
export const DashLine: FC<DashLineProps> = ({ isActive = false }) => {
  const classes = classNames(
    'flex-grow',
    'border',
    'border-dashed',
    'border-purple-400',
    'h-full',
    'w-0',
    'm-auto',
    { 'border-opacity-25': !isActive }
  )
  return <div className={classes} />
}

const numberWrapper = classnames('mr-3', 'hidden', 'md:block')
export const NumberWrapper: FC = ({ children }) => {
  return <div className={numberWrapper}>{children}</div>
}

type TabButtonProps = {
  text: String
  isActive?: Boolean
}
export const TabButton: FC<TabButtonProps> = ({ text, isActive = false }) => {
  const classes = classNames(
    'mx-3 w-full',
    'md:w-auto',
    'text-center',
    'text-purple-400',
    { 'opacity-25': !isActive }
  )
  return <p className={classes}>{text}</p>
}
