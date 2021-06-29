enum Language {
  en = 'en',
  ru = 'ru',
}

export function flagForLanguage(language: Language) {
  switch (language) {
    case Language.en:
      return '🇬🇧'
    case Language.ru:
      return '🇷🇺'
  }
}

export default Language
