import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'

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
  const classes = classnames(
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

type TabButtonProps = {
  text: String
  isActive?: Boolean
}
export const TabButton: FC<TabButtonProps> = ({ text, isActive = false }) => {
  const classes = classnames(
    'mx-3',
    'w-full',
    'md:w-auto',
    'text-center',
    'text-purple-400',
    { 'opacity-25': !isActive }
  )
  return <p className={classes}>{text}</p>
}
