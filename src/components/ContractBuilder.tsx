import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import Card from 'components/Card'
import Stepper from 'components/Stepper'
import StepperNavigation from 'components/StepperNavigation'
import TokenTypeView from 'views/TokenType'
import ERC20TokenSettingsView from 'views/ERC20TokenSettings'
import ERC721TokenSettingsView from 'views/ERC721TokenSettings'
import ERC20DeploymentView from 'views/ERC20Deployment'
import ERC721DeploymentView from 'views/ERC721Deployment'
import DeployedContract from 'views/DeployedContract'
import { appStore } from 'store/AppStore'
import { inputStore, TokenType } from 'store/InputStore'
import { classnames } from 'classnames/tailwind'

const contractWrapperStyle = classnames('p-4')
const contractInnerStyle = classnames('flex', 'flex-col')

const ContractMain: FC = () => {
  return (
    <>
      <div className={contractWrapperStyle}>
        <div className={contractInnerStyle}>
          <Stepper />
          <Card>
            {appStore.tab === 1 && <TokenTypeView />}
            {appStore.tab === 2 && inputStore.tokenType === TokenType.ERC20 && (
              <ERC20TokenSettingsView />
            )}
            {appStore.tab === 2 &&
              inputStore.tokenType === TokenType.ERC721 && (
                <ERC721TokenSettingsView />
              )}
            {appStore.tab === 3 && inputStore.tokenType === TokenType.ERC20 && (
              <ERC20DeploymentView />
            )}
            {appStore.tab === 3 &&
              inputStore.tokenType === TokenType.ERC721 && (
                <ERC721DeploymentView />
              )}
            {appStore.tab === 4 && <DeployedContract />}
          </Card>
          <StepperNavigation />
        </div>
      </div>
    </>
  )
}

export default observer(ContractMain)
