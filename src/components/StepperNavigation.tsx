import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { appStore } from 'store/AppStore'
import Button from 'components/Button'
import { classnames } from 'classnames/tailwind'

const stepperWrapper = classnames('flex', 'flex-row', 'pt-4', 'space-x-4')

const StepperNavigation: FC = () => {
  return (
    <div className={stepperWrapper}>
      <Button
        intlKey={'previousStep'}
        disabled={appStore.tab === 1}
        onClick={() => appStore.decrementTab()}
      />
      <Button
        intlKey={'nextStep'}
        disabled={appStore.tab === 3}
        onClick={() => appStore.incrementTab()}
      />
    </div>
  )
}

export default observer(StepperNavigation)
