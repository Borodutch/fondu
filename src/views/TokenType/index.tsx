import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { inputStore, TokenType } from "store/input.store";
import { AppNetworks, appStore } from "store/app.store";
import {
  buttonStyleActiveReal,
  buttonStyleActiveTest,
  buttonStyleInactive,
} from "./styles";

const TokenTypeView: FC = () => {
  return (
    <div className="flex flex-row justify-evenly text-2xl py-4 items-center">
      <button
        className={
          inputStore.tokenType === TokenType.ERC20
            ? appStore.currentNetwork === AppNetworks.Test
              ? buttonStyleActiveTest
              : buttonStyleActiveReal
            : buttonStyleInactive
        }
        onClick={() => inputStore.setTokenType(TokenType.ERC20)}
      >
        ERC-20
      </button>
      <div className="text-gray-400 text-lg">or</div>
      <button
        className={
          inputStore.tokenType === TokenType.ERC721
            ? appStore.currentNetwork === AppNetworks.Test
              ? buttonStyleActiveTest
              : buttonStyleActiveReal
            : buttonStyleInactive
        }
        onClick={() => inputStore.setTokenType(TokenType.ERC721)}
      >
        ERC-721
      </button>
    </div>
  );
};

export default observer(TokenTypeView);
