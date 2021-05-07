import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { appStore } from "store/app.store";
import {
  activeButtonStyle,
  inactiveButtonStyle,
  stepperWrapper,
} from "./styles";

const StepperNavigation: FC = () => {
  return (
    <div className={stepperWrapper}>
      <button
        className={
          appStore.currentTab === 1 ? inactiveButtonStyle : activeButtonStyle
        }
        onClick={() => appStore.previousTab()}
      >
        Previous step
      </button>
      <button
        className={
          appStore.currentTab === 3 ? inactiveButtonStyle : activeButtonStyle
        }
        onClick={() => appStore.nextTab()}
      >
        Next step
      </button>
    </div>
  );
};

export default observer(StepperNavigation);
