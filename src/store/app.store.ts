import { makeAutoObservable } from "mobx";

export enum AppNetworks {
  Test,
  Real,
}

class AppStore {
  dark = false;
  currentTab = 1;
  currentNetwork: AppNetworks = AppNetworks.Test;

  constructor() {
    makeAutoObservable(this);
  }

  toggleDark() {
    this.dark = !this.dark;
  }

  nextTab() {
    if (this.currentTab !== 3) this.currentTab++;
  }

  ppreviousTab() {
    if (this.currentTab !== 1) this.currentTab--;
  }
}

export const appStore = new AppStore();
