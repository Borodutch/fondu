import { observer } from 'mobx-react-lite'
import { classnames } from 'classnames/tailwind'
import { FC } from 'react'
import { appStore } from 'store/AppStore'
import { FormattedMessage } from 'react-intl'

const sliderStyle = classnames('flex', 'flex-row', 'justify-center')
const baseLineStyle = classnames(
  'border-b-2',
  'w-10',
  'md:w-40',
  'border-solid'
)
const activeLineStyle = classnames(baseLineStyle, 'border-active')
const inactiveLineStyle = classnames(baseLineStyle, 'border-gray-400')
const baseButtonStyle = classnames(
  'flex-grow',
  'p-3',
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
  'text-gray-300'
)

interface SliderTextProps {
  title?: string
  intlKey?: string
}

const SliderButton: FC<
  SliderTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, intlKey, ...props }) => {
  return (
    <button>
      {!!intlKey ? <FormattedMessage id={intlKey} /> : <span>{title}</span>}
    </button>
  )
}

const Slider = () => {
  return (
    <div className={sliderStyle}>
      <SliderButton
        className={
          appStore.network === 'test' ? activeButtonStyle : inactiveButtonStyle
        }
        intlKey="buttonTestNetwork"
        onClick={() => (appStore.network = 'test')}
      />
      <SliderButton
        className={
          appStore.network === 'real' ? activeButtonStyle : inactiveButtonStyle
        }
        intlKey="buttonRealNetwork"
        onClick={() => (appStore.network = 'real')}
      />
    </div>
  )
}

export default observer(Slider)
