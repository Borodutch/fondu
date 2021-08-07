import { observer } from 'mobx-react-lite'

import { classnames } from 'classnames/tailwind'
import { FC } from 'react'
import { appStore } from 'store/AppStore'

const sliderStyle = classnames('flex', 'flex-row')
const baseLineStyle = classnames(
  'border-b-2',
  'w-10',
  'md:w-40',
  'border-solid'
)
const activeLineStyle = classnames(
  baseLineStyle,
  'border-active',
  'flex-shrink-0'
)
const inactiveLineStyle = classnames(
  baseLineStyle,
  'border-gray-400',
  'flex-grow'
)
const baseButtonStyle = classnames(
  'p-3',
  'hover:opacity-80',
  'focus:outline-none',
  'transition'
)
const activeButtonStyle = classnames(
  baseButtonStyle,
  activeLineStyle,
  'text-main'
)
const inactiveButtonStyle = classnames(
  baseButtonStyle,
  inactiveLineStyle,
  'text-gray-300',
  'opacity-80'
)

const Slider: FC = ({ children }) => {
  return (
    <div className={sliderStyle}>
      <button
        onClick={() => (appStore.network = 'test')}
        className={
          appStore.network === 'test' ? activeButtonStyle : inactiveButtonStyle
        }
      >
        TEST NETWORK
      </button>
      <button
        onClick={() => (appStore.network = 'real')}
        className={
          appStore.network === 'real' ? activeButtonStyle : inactiveButtonStyle
        }
      >
        REAL NETWORK
      </button>
    </div>
  )
}

export default observer(Slider)
