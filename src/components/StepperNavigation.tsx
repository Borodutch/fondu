import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { appStore } from 'store/AppStore'
import { Button } from 'components/Controls'
import { classnames } from 'classnames/tailwind'

const stepperWrapper = classnames('flex', 'flex-row', 'pt-4', 'space-x-4')

const StepperNavigation: FC = () => {
  return (
    <div className={stepperWrapper}>
      <Button active={appStore.tab > 1} onClick={() => appStore.decrementTab()}>
        <FormattedMessage id="previousStep" />
      </Button>
      <Button active={appStore.tab < 3} onClick={() => appStore.incrementTab()}>
        <FormattedMessage id="nextStep" />
      </Button>
    </div>
  )
}

export default observer(StepperNavigation)
