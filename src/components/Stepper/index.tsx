import React, { FC } from "react"
import { useIntl } from "react-intl"
import { observer } from "mobx-react-lite"
import { AppNetworks, appStore } from "store/app.store"
import { StepperTabs } from "components/Controls"

const Stepper: FC = () => {
  const { formatMessage } = useIntl()
  return (
    <StepperTabs
      tabs={[
        formatMessage({ id: "tokenType" }),
        formatMessage({ id: "tokenSettings" }),
        formatMessage({ id: "deployment" }),
      ]}
      currentTab={appStore.currentTab}
      real={appStore.currentNetwork === AppNetworks.Real}
    />
  )
}

export default observer(Stepper)
