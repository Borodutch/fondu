import { makeAutoObservable } from "mobx"

const messagesInRussian = {
  subtitleBalance: "Возьмите на тест ETH в кошелек",
}

const messagesInEnglish = {
  subtitleBalance: "Get test ETH to your wallet",
}

class LanguageStore {
  currentLanguage: string = "en"

  constructor() {
    makeAutoObservable(this)
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === "en" ? "ru" : "en"
  }

  loadLocaleData(locale: string) {
    switch (locale) {
      case "ru":
        this.currentLanguage = "ru"
        // return import("../lang/ru.json")
        return messagesInRussian
      default:
        this.currentLanguage = "en"
        // return import("../lang/en-US.json")
        return messagesInEnglish
    }
  }
}

export const langStore = new LanguageStore()
