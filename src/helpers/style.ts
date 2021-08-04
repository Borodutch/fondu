import { classnames } from 'classnames/tailwind'

export const inputTextStyle = classnames(
  'transition',
  'w-full',
  'rounded-base',
  'border-2',
  'border-input',
  'py-2',
  'px-4',
  'focus:outline-none',
  'focus:border-gray-300',
  'bg-background-card',
  'text-text-main'
)
export const hideMobile = classnames('hidden', 'md:block')
