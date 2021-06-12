import { inputTextStyle } from "helpers/style.helper"
import { observer } from "mobx-react-lite"
import React, { ChangeEvent, FC } from "react"
import InputMask from "react-input-mask"
import { inputStore } from "store/input.store"
import { BodyText } from "components/Text"
import { FormattedMessage } from "react-intl"

const ERC721TokenSettingsView: FC = () => {
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
            defaultValue={inputStore.erc721.name}
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
            defaultValue={inputStore.erc721.symbol}
            onChange={(e) => inputStore.setERC20TokenSymbol(e.target.value)}
            placeholder="Token symbol"
          />
        </div>
        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsWallet" />
          </BodyText>
          <InputMask
            type="text"
            className={inputTextStyle}
            mask="0x****************************************"
            maskChar={null}
            defaultValue={inputStore.erc721.receiver}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              inputStore.setERC20Receiver(e.target.value)
            }
            placeholder="ETH wallet"
          />
        </div>
      </div>
    </>
  )
}

export default observer(ERC721TokenSettingsView)
