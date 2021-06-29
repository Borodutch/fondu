import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { AppNetworks, appStore } from 'store/app.store'
import { stepperWrapper } from './styles'
import { Button } from 'components/Controls'

const StepperNavigation: FC = () => {
  return (
    <div className={stepperWrapper}>
      <Button
        real={appStore.currentNetwork === AppNetworks.Real}
        active={appStore.currentTab !== 1}
        onClick={() => appStore.previousTab()}
      >
        <FormattedMessage id="previousStep" />
      </Button>
      <Button
        real={appStore.currentNetwork === AppNetworks.Real}
        active={appStore.currentTab !== 3}
        onClick={() => appStore.nextTab()}
      >
        <FormattedMessage id="nextStep" />
      </Button>
    </div>
  )
}

export default observer(StepperNavigation)
