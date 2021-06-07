import { makeAutoObservable } from "mobx"

export enum AppNetworks {
  Test,
  Real,
}

export enum Theme {
  Dark,
  Light,
}
class AppStore {
  dark = false
  currentTheme: Theme = Theme.Light
  currentTab = 1
  currentNetwork: AppNetworks = AppNetworks.Test

  constructor() {
    makeAutoObservable(this)
  }

  toggleDark() {
    this.dark = !this.dark
    this.currentTheme =
      this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light
  }

  nextTab() {
    if (this.currentTab !== 3) this.currentTab++
  }

  toggleNetwork() {
    this.currentNetwork =
      this.currentNetwork === AppNetworks.Test
        ? AppNetworks.Real
        : AppNetworks.Test
    this.currentTab = 1
  }

  previousTab() {
    if (this.currentTab !== 1) this.currentTab--
  }
}

export const appStore = new AppStore()
