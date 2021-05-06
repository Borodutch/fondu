import { makeAutoObservable } from "mobx";

class InputStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const inputStore = new InputStore();
