import { inputTextStyle } from 'helpers/style'
import { observer } from 'mobx-react-lite'
import { ChangeEvent, FC, useEffect } from 'react'
import InputMask from 'react-input-mask'
import EditIcon from 'assets/icons/edit.svg'
import { leftBlockInnerStyle } from 'components/Wallet/styles'
import { inputStore } from 'store/InputStore'
import { BodyText } from 'components/Text'
import { Button, buttonSize } from 'components/Button'
import { FormattedMessage } from 'react-intl'
import { getWeb3 } from 'helpers/web3'

const ERC20TokenSettingsView: FC = () => {
  useEffect(() => {
    if (inputStore.erc20.receiver === '') {
      const newAccount = getWeb3().eth.accounts.create()
      inputStore.setERC20Receiver(newAccount.address)
      inputStore.setERC20PrivateKey(newAccount.privateKey)
    }
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsName" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.erc20.name}
            onChange={(e) => inputStore.setERC20TokenName(e.target.value)}
            placeholder="Token name"
          />
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsSymbol" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            defaultValue={inputStore.erc20.symbol}
            onChange={(e) => inputStore.setERC20TokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsWallet" />
          </BodyText>
          <div className={leftBlockInnerStyle}>
            <InputMask
              type="text"
              className={inputTextStyle}
              mask="0x****************************************"
              maskChar={null}
              placeholder="ETH wallet"
              value={inputStore.erc20.receiver}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                inputStore.setERC20Receiver(e.target.value)
              }
            />
            <div className={buttonSize}>
              <Button
                icon={EditIcon}
                selected={true}
                onClick={() => alert(inputStore.erc20.privateKey)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsDecimals" />
          </BodyText>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.erc20.decimals}
            onChange={(e) => inputStore.setERC20Decimals(e.target.value)}
            placeholder="Number of decimals"
          />
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsAmount" />
          </BodyText>
          <input
            type="number"
            className={inputTextStyle}
            defaultValue={inputStore.erc20.rate}
            onChange={(e) => inputStore.setERC20Rate(e.target.value)}
            placeholder="Tokens for 1 ETH"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input
            type="checkbox"
            className="mr-2 dark:bg-base-dark"
            defaultChecked={inputStore.erc20.timed}
            onChange={(e) => inputStore.setERC20Timed(e.target.checked)}
          />
          <BodyText>
            <FormattedMessage id="tokenSettingsTimed" />
          </BodyText>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.erc20.capped}
            onChange={(e) => inputStore.setERC20Capped(e.target.checked)}
          />
          <BodyText>
            <FormattedMessage id="tokenSettingsSold" />
          </BodyText>
          {inputStore.erc20.capped && (
            <div className="p-3 mt-2 bg-base-light rounded-base">
              <BodyText>
                <FormattedMessage id="tokenSettingsRaise" />
              </BodyText>
              <input
                type="number"
                className={inputTextStyle}
                defaultValue={inputStore.erc20.maxTokens}
                onChange={(e) => inputStore.setERC20TokensCap(e.target.value)}
                placeholder="Amount of tokens"
              />
            </div>
          )}{' '}
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.erc20.whitelist}
            onChange={(e) => inputStore.setERC20Whitelist(e.target.checked)}
          />
          <BodyText>
            <FormattedMessage id="tokenSettingsWhitelist" />
          </BodyText>
        </div>
      </div>
    </>
  )
}

export default observer(ERC20TokenSettingsView)
