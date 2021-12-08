import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { Language } from 'models/Language'

export type Theme = 'dark' | 'light'
export type ETHNetwork = 'test' | 'real'

class AppStore {
  language: Language = 'en'
  theme: Theme = 'dark'
  tab = 1
  network: ETHNetwork = 'test'

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'Appstore',
      properties: ['theme', 'language', 'network', 'tab'],
      storage: window.localStorage,
    })
  }

  toggleDark() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'
  }

  incrementTab() {
    if (this.tab < 4) {
      this.tab++
    }
  }

  toggleNetwork() {
    this.network = this.network === 'real' ? 'test' : 'real'
  }

  decrementTab() {
    if (this.tab > 1) {
      this.tab--
    }
  }
}

export const appStore = new AppStore()
