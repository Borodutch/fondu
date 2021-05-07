import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { appStore } from "store/app.store";

const StepperNavigation: FC = () => {
  return (
    <div className="flex flex-row pt-4 space-x-4">
      <button
        className={
          "flex-grow p-3 bg border-2 border-gray-300 text-gray-300 rounded-base hover:opacity-80 focus:outline-none"
        }
        onClick={() => appStore.ppreviousTab()}
      >
        Previous step
      </button>
      <button
        className={
          "flex-grow p-3 border-2 border-base-blue text-base-blue rounded-base hover:opacity-80 focus:outline-none"
        }
        onClick={() => appStore.nextTab()}
      >
        Next step
      </button>
    </div>
  );
};

export default observer(StepperNavigation);
