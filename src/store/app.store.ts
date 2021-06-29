import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { newAccount, clearSubscriptions } from 'helpers/eth'
import Language from 'models/Language'

export enum AppNetworks {
  Test,
  Real,
}

class AppStore {
  language: Language = Language.en
  dark = false
  currentTab = 1
  currentNetwork: AppNetworks = AppNetworks.Test

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'Appstore',
      properties: ['dark'],
      storage: window.localStorage,
    })
  }

  toggleDark() {
    this.dark = !this.dark
  }

  nextTab() {
    if (this.currentTab !== 3) this.currentTab++
  }

  toggleNetwork() {
    clearSubscriptions()

    this.currentNetwork =
      this.currentNetwork === AppNetworks.Test
        ? AppNetworks.Real
        : AppNetworks.Test
    this.currentTab = 1

    newAccount()
  }

  previousTab() {
    if (this.currentTab !== 1) this.currentTab--
  }
}

export const appStore = new AppStore()
