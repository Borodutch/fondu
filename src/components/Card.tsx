import { classnames } from 'classnames/tailwind'
import { FC } from 'react'

const cardStyle = classnames(
  'bg-white',
  'border',
  'border-gray-200',
  'py-3',
  'px-4',
  'rounded-base',
  'w-full',
  'shadow-sm',
  'text-lg',
  'bg-base-card'
)

const Card: FC = ({ children }) => {
  return <div className={cardStyle}>{children}</div>
}

export default Card
