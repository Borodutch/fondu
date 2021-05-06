import { makeAutoObservable } from "mobx";

class UserStore {
  ethAdress = "";
  publicKey = "";
  privateKey = "";

  constructor() {
    makeAutoObservable(this);
  }

  setEthAdress(adress: string) {
    this.ethAdress = adress;
  }
}

export const userStore = new UserStore();
