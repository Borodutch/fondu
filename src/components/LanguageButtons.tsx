import { Language, flagForLanguage } from 'models/Language'
import { appStore } from 'store/AppStore'
import { classnames } from 'classnames/tailwind'
import Button from 'components/Button'

const container = classnames(
  'flex',
  'flex-row',
  'items-center',
  'justify-center'
)

export default function LanguageButtons() {
  return (
    <div className={container}>
      {(['en', 'ru'] as Language[]).map((k) => (
        <Button
          title={flagForLanguage(k)}
          key={k}
          onClick={() => {
            appStore.language = k
          }}
        />
      ))}
    </div>
  )
}
