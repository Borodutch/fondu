import { classnames } from 'classnames/tailwind'
import { FC } from 'react'

const cardStyle = classnames(
  'bg-background-card',
  'border',
  'border-card',
  'py-3',
  'px-4',
  'rounded-base',
  'w-full',
  'shadow-sm',
  'text-lg'
)

const Card: FC = ({ children }) => {
  return <div className={cardStyle}>{children}</div>
}

export default Card
