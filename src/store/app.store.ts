import { makeAutoObservable } from "mobx";

export const enum AppTabs {
  TokenType,
  TokenSettings,
  Deployment,
}

export const enum AppNetworks {
  Test,
  Real,
}

class AppStore {
  dark = false;
  currentTab: AppTabs = AppTabs.TokenType;
  currentNetwork: AppNetworks = AppNetworks.Test;

  constructor() {
    makeAutoObservable(this);
  }

  toggleDark() {
    this.dark = !this.dark;
  }
}

export const appStore = new AppStore();
