import { classnames } from 'classnames/tailwind'

const buttonStyle = classnames(
  'py-4',
  'px-5',
  'border-2',
  'rounded-base',
  'text-sm',
  'font-medium',
  'focus:outline-none',
  'hover:opacity-80',
  'transition'
)
export const buttonStyleDark = classnames(
  buttonStyle,
  'border-gray-400',
  'text-gray-400'
)
export const buttonStyleLight = classnames(
  buttonStyle,
  'border-gray-400',
  'text-base-black'
)
