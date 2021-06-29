import { classnames } from 'classnames/tailwind'

export const container = classnames(
  'flex',
  'flex-row',
  'items-center',
  'justify-center',
  'mb-4'
)

export const languageButton = classnames(
  'py-3',
  'px-4',
  'border-2',
  'rounded-base',
  'text-sm',
  'font-medium',
  'text-base-black',
  'focus:outline-none',
  'hover:opacity-40',
  'transition',
  'border-gray-400'
)
