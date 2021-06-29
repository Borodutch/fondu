import { classnames } from 'classnames/tailwind'

export const inputTextStyle = classnames(
  'transition',
  'w-full',
  'rounded-base',
  'border-2',
  'border-gray-100',
  'py-2',
  'px-4',
  'focus:outline-none',
  'focus:border-gray-300',
  'bg-white',
  'text-base-black'
)
export const hideMobile = classnames('hidden', 'md:block')
