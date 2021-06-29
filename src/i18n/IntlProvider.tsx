import React, { FC } from 'react'
import Language from 'models/Language'
import { IntlProvider as BaseIntlProvider } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { appStore } from 'store/app.store'
import en from 'i18n/locales/en.json'
import ru from 'i18n/locales/ru.json'

const messages = {
  en,
  ru,
}

const IntlProvider: FC = ({ children }) => {
  return (
    <BaseIntlProvider
      locale={appStore.language}
      defaultLocale={Language.en}
      messages={messages[appStore.language]}
    >
      {children}
    </BaseIntlProvider>
  )
}

export default observer(IntlProvider)
