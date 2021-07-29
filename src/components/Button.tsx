import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { FormattedMessage } from 'react-intl'

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
const disabledButtonStyle = classnames(
  baseButtonStyle,
  'border-gray-300',
  'text-gray-300',
  'cursor-default'
)

const buttonStyle = classnames(
  baseButtonStyle,
  'border-blue-400',
  'text-base-blue',
  'hover:text-white',
  'hover:bg-base-blue'
)

const selectedButtonStyle = classnames(
  baseButtonStyle,
  'bg-base-blue',
  'text-white'
)

interface buttonTextProps {
  disabled?: boolean
  selected?: boolean
  title?: string
  intlKey?: string
  icon?: string
}

const Button: FC<
  buttonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  disabled = false,
  selected = false,
  title,
  icon,
  intlKey,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        disabled
          ? disabledButtonStyle
          : selected
          ? selectedButtonStyle
          : buttonStyle
      }
    >
      <img src={icon} alt="" />
      {intlKey !== undefined ? (
        <FormattedMessage id={intlKey} />
      ) : (
        <span>{title}</span>
      )}
    </button>
  )
}

export default Button
