import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { classnames } from 'classnames/tailwind'

export const sectionStyle = classnames('mt-4')
export const sectionBlockStyle = classnames('bg-base-gray', 'rounded-base')

const Section: FC = ({ children }) => {
  return (
    <section className={sectionStyle}>
      <div className={sectionBlockStyle}>{children}</div>
    </section>
  )
}

export default observer(Section)
