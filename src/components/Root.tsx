import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('container', 'mx-auto', 'px-5')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
