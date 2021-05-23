import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { appStore } from "store/app.store"
import { StepperTabs } from "components/Controls"

const Stepper: FC = () => {
  return (
    <StepperTabs
      tabs={["Token type", "Token settings", "Deployment"]}
      currentTab={appStore.currentTab}
    />
  )
}

export default observer(Stepper)
