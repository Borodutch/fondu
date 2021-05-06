import { makeAutoObservable } from "mobx";

export const enum AppTabs {
  Test,
  Real,
}

class AppStore {
  dark = false;
  currentTab: AppTabs = AppTabs.Test;

  constructor() {
    makeAutoObservable(this);
  }

  toggleDark() {
    this.dark = !this.dark;
  }

  setCurrentTab(tab: AppTabs) {
    this.currentTab = tab;
  }
}

export const appStore = new AppStore();
