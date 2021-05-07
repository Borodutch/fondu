import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import Card from "components/Card";
import Stepper from "components/Stepper";
import StepperNavigation from "components/StepperNavigation";
import TokenTypeView from "views/TokenType";
import TokenSettingsView from "views/TokenSettings";
import DeploymentView from "views/Deployment";
import { appStore } from "store/app.store";
import { contractInnerStyle, contractWrapperStyle } from "./styles";

const ContractMain: FC = () => {
  return (
    <>
      <div className={contractWrapperStyle}>
        <div className={contractInnerStyle}>
          <Stepper />
          <Card>
            {appStore.currentTab === 1 && <TokenTypeView />}
            {appStore.currentTab === 2 && <TokenSettingsView />}
            {appStore.currentTab === 3 && <DeploymentView />}
          </Card>
          <StepperNavigation />
        </div>
      </div>
    </>
  );
};

export default observer(ContractMain);
