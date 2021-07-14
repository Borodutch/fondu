import { ChangeEvent, FC, useState } from 'react'
import InputMask from 'react-input-mask'
import EditIcon from 'assets/icons/edit.svg'
import { inputTextStyle } from 'helpers/style'
import {
  balanceFlexStyle,
  balanceWrapperStyle,
  leftBlockInnerStyle,
  leftBlockStyle,
  rightBlockStyle,
  wrapperStyle,
} from './styles'
import { observer } from 'mobx-react-lite'
import { appStore } from 'store/AppStore'
import { userStore } from 'store/UserStore'
import { TitleText, BodyText } from 'components/Text'
import { Button } from 'components/Controls'
import { FormattedMessage } from 'react-intl'

const ContractWallet: FC = () => {
  const [adressDisabled, setAdressDisabled] = useState<boolean>(true)

  return (
    <div className={wrapperStyle}>
      <div className={leftBlockStyle}>
        <TitleText>
          <FormattedMessage id="address" />
        </TitleText>
        <div className={leftBlockInnerStyle}>
          <InputMask
            type="text"
            className={inputTextStyle}
            mask="0x****************************************"
            maskChar={null}
            placeholder="Enter Eth adress"
            value={userStore.account?.address}
            disabled={adressDisabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (userStore.account) {
                userStore.account.address = e.target.value
              }
            }}
          />
          <Button
            filled={true}
            onClick={() => setAdressDisabled(!adressDisabled)}
          >
            <img src={EditIcon} alt="Edit" />
          </Button>
        </div>
      </div>
      <div className={rightBlockStyle}>
        <TitleText>
          <FormattedMessage id="balance" />
        </TitleText>
        <div className={balanceWrapperStyle}>
          <div className={balanceFlexStyle}>
            <BodyText>{userStore.ethBalance} Eth</BodyText>
            <BodyText>{userStore.usdBalance} USD</BodyText>
          </div>
          {appStore.network === 'test' && (
            <Button>
              <FormattedMessage id="buttonGetTest" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default observer(ContractWallet)
