import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { appStore } from "store/app.store";
import {
  activeTabStyle,
  activeTextStyle,
  inactiveLineStyle,
  inactiveTabStyle,
  inactiveTextStyle,
  passedLineStyle,
  passedTabStyle,
  passedTextStyle,
} from "./styles";

const Stepper: FC = () => {
  return (
    <div className="w-auto md:w-4/6 mx-auto flex justify-between items-center pt-3 pb-8 space-x-3">
      <div className="flex flex-row items-center space-x-2">
        <div
          className={
            appStore.currentTab === 1 ? activeTabStyle : passedTabStyle
          }
        >
          1
        </div>
        <span
          className={
            appStore.currentTab === 1 ? activeTextStyle : passedTextStyle
          }
        >
          Token type
        </span>
      </div>
      <div
        className={
          appStore.currentTab > 1 ? passedLineStyle : inactiveLineStyle
        }
      ></div>
      <div className="flex flex-row items-center space-x-2">
        <div
          className={
            appStore.currentTab === 2
              ? activeTabStyle
              : appStore.currentTab > 2
              ? passedTabStyle
              : inactiveTabStyle
          }
        >
          2
        </div>
        <span
          className={
            appStore.currentTab === 2
              ? activeTextStyle
              : appStore.currentTab > 2
              ? passedTextStyle
              : inactiveTextStyle
          }
        >
          Token settings
        </span>
      </div>
      <div
        className={
          appStore.currentTab > 2 ? passedLineStyle : inactiveLineStyle
        }
      ></div>
      <div className="flex flex-row items-center space-x-2">
        <div
          className={
            appStore.currentTab === 3 ? activeTabStyle : inactiveTabStyle
          }
        >
          3
        </div>
        <span
          className={
            appStore.currentTab === 3 ? activeTextStyle : inactiveTextStyle
          }
        >
          Deployment
        </span>
      </div>
    </div>
  );
};

export default observer(Stepper);
