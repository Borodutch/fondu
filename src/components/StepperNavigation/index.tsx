import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { AppNetworks, appStore } from "store/app.store";
import {
  activeButtonStyleReal,
  activeButtonStyleTest,
  inactiveButtonStyle,
  stepperWrapper,
} from "./styles";

const StepperNavigation: FC = () => {
  return (
    <div className={stepperWrapper}>
      <button
        className={
          appStore.currentTab === 1
            ? inactiveButtonStyle
            : appStore.currentNetwork === AppNetworks.Test
            ? activeButtonStyleTest
            : activeButtonStyleReal
        }
        onClick={() => appStore.previousTab()}
      >
        Previous step
      </button>
      <button
        className={
          appStore.currentTab === 3
            ? inactiveButtonStyle
            : appStore.currentNetwork === AppNetworks.Test
            ? activeButtonStyleTest
            : activeButtonStyleReal
        }
        onClick={() => appStore.nextTab()}
      >
        Next step
      </button>
    </div>
  );
};

export default observer(StepperNavigation);
