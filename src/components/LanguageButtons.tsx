import Language, { flagForLanguage } from 'models/Language'
import { appStore } from 'store/AppStore'
import { classnames } from 'classnames/tailwind'

const container = classnames(
  'flex',
  'flex-row',
  'items-center',
  'justify-center',
  'mb-4'
)
const languageButton = classnames(
  'py-3',
  'px-4',
  'border-2',
  'rounded-base',
  'text-sm',
  'font-medium',
  'text-base-black',
  'focus:outline-none',
  'hover:opacity-40',
  'transition',
  'border-gray-400'
)

export default function LanguageButtons() {
  return (
    <div className={container}>
      {Object.values(Language).map((k) => (
        <button
          className={languageButton}
          key={k}
          onClick={() => {
            appStore.language = k
          }}
        >
          {flagForLanguage(k)}
        </button>
      ))}
    </div>
  )
}
