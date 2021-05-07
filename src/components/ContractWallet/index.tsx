import React, { FC } from "react";
import EditIcon from "assets/icons/edit.svg";
import { inputTextStyle } from "helpers/style.helper";
import {
  addButtonStyle,
  balanceFlexStyle,
  balanceWrapperStyle,
  editButtonStyleReal,
  editButtonStyleTest,
  ethBalanceStyleReal,
  ethBalanceStyleTest,
  leftBlockInnerStyle,
  leftBlockStyle,
  rightBlockStyle,
  subtitleStyle,
  usdBalanceStyle,
  wrapperStyle,
} from "./styles";
import { observer } from "mobx-react-lite";
import { AppNetworks, appStore } from "store/app.store";

const ContractWallet: FC = () => {
  return (
    <div className={wrapperStyle}>
      <div className={leftBlockStyle}>
        <h2 className={subtitleStyle}>Adress</h2>
        <div className={leftBlockInnerStyle}>
          <input
            type="text"
            className={inputTextStyle}
            placeholder="Enter Eth adress"
          />
          <button
            className={
              appStore.currentNetwork === AppNetworks.Test
                ? editButtonStyleTest
                : editButtonStyleReal
            }
          >
            <img src={EditIcon} alt="Edit" />
          </button>
        </div>
      </div>
      <div className={rightBlockStyle}>
        <h2 className={subtitleStyle}>Balance</h2>
        <div className={balanceWrapperStyle}>
          <div className={balanceFlexStyle}>
            <span
              className={
                appStore.currentNetwork === AppNetworks.Real
                  ? ethBalanceStyleReal
                  : ethBalanceStyleTest
              }
            >
              0.0920 Eth
            </span>
            <span className={usdBalanceStyle}>1.133 USD</span>
          </div>
          {appStore.currentNetwork === AppNetworks.Test && (
            <button className={addButtonStyle}>
              Get test ETH to your wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(ContractWallet);
