import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { appStore } from 'store/AppStore'
import Button from 'components/Button'
import { classnames } from 'classnames/tailwind'
import { inputStore, TokenType } from 'store/InputStore'
import { ethers } from 'ethers'

const stepperWrapper = classnames('flex', 'flex-row', 'pt-4', 'space-x-4')

const StepperNavigation: FC = () => {
  async function deployContract() {
    const provider = new ethers.providers.JsonRpcProvider(
      'http://127.0.0.1:7545'
    )
    const signer = provider.getSigner(inputStore.deployData.signer)
    const interfaceContract = new ethers.utils.Interface(
      inputStore.deployData.abi
    )
    const factory = new ethers.ContractFactory(
      interfaceContract,
      inputStore.deployData.bytecode,
      signer
    )
    const contract = await factory.deploy()
    inputStore.deployedContract = await contract.deployTransaction.wait()
    appStore.incrementTab()
  }
  return (
    <div className={stepperWrapper}>
      <Button
        intlKey={'previousStep'}
        disabled={appStore.tab === 1}
        onClick={() => appStore.decrementTab()}
      />

      {appStore.tab === 3 && inputStore.tokenType === TokenType.ERC721 && (
        <Button intlKey={'deployButton'} onClick={() => deployContract()} />
      )}

      {appStore.tab < 3 && (
        <Button
          intlKey={'nextStep'}
          disabled={appStore.tab === 3}
          onClick={() => appStore.incrementTab()}
        />
      )}
    </div>
  )
}

export default observer(StepperNavigation)
