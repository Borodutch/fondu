import { makeAutoObservable } from "mobx"
import { makePersistable } from "mobx-persist-store"

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
  currentTab = 1
  currentNetwork: AppNetworks = AppNetworks.Test

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: "Appstore",
      properties: ["dark"],
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
