import { Menu, Transition } from '@headlessui/react'
import { Fragment, FC } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Language } from 'models/Language'
import { appStore } from 'store/AppStore'
import { classnames } from 'classnames/tailwind'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react-lite'

const buttonStyle = classnames(
  'border-blue-400',
  'text-base-blue',
  'hover:text-white',
  'place-content-center',
  'hover:bg-base-blue'
)
const menuButtonStyle = classnames(
  'border',
  'border-blue-400',
  'inline-flex',
  'justify-center',
  'px-4',
  'py-2',
  'text-base-blue',
  'rounded-md',
  'bg-opacity-20',
  'hover:text-white',
  'hover:bg-base-blue',
  'focus:outline-none',
  'w-20'
)
const menuItemStyle = classnames(
  'absolute',
  'right-0',
  'origin-top-right',
  'bg-white',
  'rounded-md',
  'shadow-lg',
  'focus:outline-none',
  'w-20'
)

const selectedButtonStyle = classnames(
  'bg-base-blue',
  'text-white',
  'place-content-center'
)

const LanguageButton: FC = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={menuButtonStyle}>
            <FormattedMessage id="language" />
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={menuItemStyle}>
            <div className="px-1 py-1 ">
              {(['en', 'ru'] as Language[]).map((k) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      key={k}
                      onClick={() => {
                        appStore.language = k
                      }}
                      className={`${
                        active ? selectedButtonStyle : buttonStyle
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {k}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default observer(LanguageButton)
