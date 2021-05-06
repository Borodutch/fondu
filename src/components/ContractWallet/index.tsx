import React, { FC } from "react";
import EditIcon from "assets/icons/edit.svg";
import { inputTextStyle } from "helpers/style.helper";
import {
  addButtonStyle,
  balanceFlexStyle,
  balanceWrapperStyle,
  editButtonStyle,
  ethBalanceStyle,
  leftBlockInnerStyle,
  leftBlockStyle,
  rightBlockStyle,
  subtitleStyle,
  usdBalanceStyle,
  wrapperStyle,
} from "./styles";

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
          <button className={editButtonStyle}>
            <img src={EditIcon} alt="Edit" />
          </button>
        </div>
      </div>
      <div className={rightBlockStyle}>
        <h2 className={subtitleStyle}>Balance</h2>
        <div className={balanceWrapperStyle}>
          <div className={balanceFlexStyle}>
            <span className={ethBalanceStyle}>0.0920 Eth</span>
            <span className={usdBalanceStyle}>1.133 USD</span>
          </div>
          <button className={addButtonStyle}>
            Get test ETH to your wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractWallet;
