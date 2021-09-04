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
  'font-light'
)
const disabledButtonStyle = classnames(
  baseButtonStyle,
  'border-gray-300',
  'text-gray-300',
  'pointer-events-none'
)

const buttonStyle = classnames(
  baseButtonStyle,
  'border-active',
  'text-main',
  'hover:text-background-main',
  'hover:bg-main'
)

const selectedButtonStyle = classnames(
  baseButtonStyle,
  'bg-main',
  'text-background-main'
)
const buttonSize = classnames('min-w-max')

interface ButtonTextProps {
  disabled?: boolean
  selected?: boolean
  title?: string
  intlKey?: string
  icon?: string
  size?: boolean
}

const Button: FC<
  ButtonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  disabled = false,
  selected = false,
  title,
  icon,
  intlKey,
  size = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        (size ? buttonSize : buttonStyle) +
        ' ' +
        (disabled
          ? disabledButtonStyle
          : selected
          ? selectedButtonStyle
          : buttonStyle)
      }
    >
      {!!icon && <img src={icon} alt={icon} />}
      {!!intlKey ? <FormattedMessage id={intlKey} /> : <span>{title}</span>}
    </button>
  )
}

export default Button
