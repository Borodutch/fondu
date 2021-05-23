import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { appStore } from "store/app.store"
import { stepperWrapper } from "./styles"
import { Button } from "components/Controls"

const StepperNavigation: FC = () => {
  return (
    <div className={stepperWrapper}>
      <Button
        active={appStore.currentTab !== 1}
        onClick={() => appStore.previousTab()}
      >
        Previous step
      </Button>
      <Button
        active={appStore.currentTab !== 3}
        onClick={() => appStore.nextTab()}
      >
        Next step
      </Button>
    </div>
  )
}

export default observer(StepperNavigation)
