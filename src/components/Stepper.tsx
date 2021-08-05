import { FC } from 'react'
import { useIntl } from 'react-intl'
import { observer } from 'mobx-react-lite'
import { appStore } from 'store/AppStore'
import StepperTabs from 'components/StepperTabs'

const Stepper: FC = () => {
  const { formatMessage } = useIntl()
  return (
    <StepperTabs
      tabs={[
        formatMessage({ id: 'tokenType' }),
        formatMessage({ id: 'tokenSettings' }),
        formatMessage({ id: 'deployment' }),
      ]}
      currentTab={appStore.tab}
    />
  )
}

export default observer(Stepper)
