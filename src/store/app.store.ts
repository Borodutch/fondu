import { makeAutoObservable } from "mobx"
import { isSynchronized, persistence } from "mobx-persist-store"
import storageAdapter from "store/storageAdapter"

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
  }
  get isSynchronized() {
    return isSynchronized(this)
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
export const appStore = persistence({
  name: "AppStore",
  properties: ["dark"],
  adapter: storageAdapter,
})(new AppStore())
