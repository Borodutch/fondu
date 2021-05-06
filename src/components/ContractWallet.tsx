import { classnames } from "classnames/tailwind";
import { inputTextStyle } from "helpers/style.helper";
import EditIcon from "assets/icons/edit.svg";
import React, { FC } from "react";

const wrapperStyle = classnames("flex", "md:flex-row", "flex-col", "p-4");
const leftBlockStyle = classnames(
  "flex-grow",
  "pb-5",
  "md:pb-0",
  "md:pr-10",
  "md:border-r-2",
  "border-b-2",
  "md:border-b-0",
  "border-gray-100",
  "space-y-1"
);
const rightBlockStyle = classnames("flex-grow", "md:pl-10", "pt-5", "md:pt-0");
const subtitleStyle = classnames("text-lg", "text-gray-600", "font-medium");
const leftBlockInnerStyle = classnames("flex", "flex-row", "space-x-3");
const editButtonStyle = classnames(
  "bg-base-blue",
  "p-3",
  "pr-2",
  "rounded-base",
  "hover:opacity-80",
  "transition",
  "focus:outline-none"
);
const addButtonStyle = classnames(
  "border-2",
  "border-blue-400",
  "py-3",
  "px-10",
  "rounded-base",
  "text-base-blue",
  "text-sm",
  "focus:outline-none",
  "hover:opacity-80",
  "transition"
);
const balanceWrapperStyle = classnames(
  "flex",
  "md:flex-row",
  "flex-col",
  "space-y-2",
  "md:space-y-0"
);
const balanceFlexStyle = classnames("flex", "flex-col", "flex-grow");
const ethBalanceStyle = classnames("text-xl", "text-base-blue");
const usdBalanceStyle = classnames("text-gray-400", "text-sm");

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
