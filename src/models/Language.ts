export type Language = 'en' | 'ru'

export function flagForLanguage(language: Language) {
  switch (language) {
    case 'en':
      return '🇬🇧'
    case 'ru':
      return '🇷🇺'
  }
}
