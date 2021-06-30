import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import { classnames } from 'classnames/tailwind'

const buttonStyle = classnames(
  'py-4',
  'px-5',
  'border-2',
  'rounded-base',
  'text-sm',
  'font-medium',
  'focus:outline-none',
  'hover:opacity-80',
  'transition'
)
const buttonStyleDark = classnames(
  buttonStyle,
  'border-gray-400',
  'text-gray-400'
)
const buttonStyleLight = classnames(
  buttonStyle,
  'border-gray-400',
  'text-base-black'
)

const Toggle: FC = () => {
  return (
    <button
      onClick={() => {
        appStore.toggleDark()
      }}
      className={appStore.theme === 'dark' ? buttonStyleDark : buttonStyleLight}
    >
      {appStore.theme}
    </button>
  )
}

export default observer(Toggle)
