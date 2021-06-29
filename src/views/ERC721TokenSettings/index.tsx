import { inputTextStyle } from 'helpers/style.helper'
import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, FC, useEffect } from 'react'
import InputMask from 'react-input-mask'
import EditIcon from 'assets/icons/edit.svg'
import { leftBlockInnerStyle } from 'components/ContractWallet/styles'
import { web3Store } from 'store/web3.store'
import { inputStore } from 'store/input.store'
import { BodyText } from 'components/Text'
import { Button } from 'components/Controls'
import { FormattedMessage } from 'react-intl'
import { AppNetworks, appStore } from 'store/app.store'

const ERC721TokenSettingsView: FC = () => {
  useEffect(() => {
    if (inputStore.erc721.receiver === '') {
      const newAccount = web3Store.testContext.eth.accounts.create()
      inputStore.setERC721Receiver(newAccount.address)
      inputStore.setERC721PrivateKey(newAccount.privateKey)
    }
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="tokenSettingsName" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.erc721.name}
            onChange={(e) => inputStore.setERC721TokenName(e.target.value)}
            placeholder="Token name"
          />
        </div>
        <div className="space-y-2">
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="tokenSettingsSymbol" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.erc721.symbol}
            onChange={(e) => inputStore.setERC721TokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <BodyText real={appStore.currentNetwork === AppNetworks.Real}>
            <FormattedMessage id="tokenSettingsWallet" />
          </BodyText>
          <div className={leftBlockInnerStyle}>
            <InputMask
              type="text"
              className={inputTextStyle}
              mask="0x****************************************"
              maskChar={null}
              placeholder="ETH wallet"
              value={inputStore.erc721.receiver}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                inputStore.setERC721Receiver(e.target.value)
              }
            />
            <Button
              filled={true}
              onClick={() => alert(inputStore.erc721.privateKey)}
            >
              <img src={EditIcon} alt="Edit" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(ERC721TokenSettingsView)
