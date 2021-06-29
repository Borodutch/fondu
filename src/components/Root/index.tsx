import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { rootStyle } from './styles'

const Root: FC = ({ children }) => {
  return <main className={rootStyle}>{children}</main>
}

export default observer(Root)
