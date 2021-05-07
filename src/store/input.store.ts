import { makeAutoObservable } from "mobx";

export enum TokenType {
  ERC20,
  ERC721,
}

class InputStore {
  tokenType: TokenType = TokenType.ERC20;

  constructor() {
    makeAutoObservable(this);
  }

  setTokenType(tokenType: TokenType) {
    this.tokenType = tokenType;
  }
}

export const inputStore = new InputStore();
