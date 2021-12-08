import { inputTextStyle } from 'helpers/style'
import { observer } from 'mobx-react-lite'
import { ChangeEvent, FC, useEffect } from 'react'
import InputMask from 'react-input-mask'
import EditIcon from 'assets/icons/edit.svg'
import { leftBlockInnerStyle } from 'components/Wallet/styles'
import { inputStore } from 'store/InputStore'
import { BodyText } from 'components/Text'
import Button from 'components/Button'
import { FormattedMessage } from 'react-intl'
import { getWeb3 } from 'helpers/web3'

const ERC721TokenSettingsView: FC = () => {
  useEffect(() => {
    if (inputStore.erc721.receiver === '') {
      const newAccount = getWeb3().eth.accounts.create()
      inputStore.setERC721Receiver(newAccount.address)
      inputStore.setERC721PrivateKey(newAccount.privateKey)
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
            defaultValue={inputStore.erc721.name}
            onChange={(e) => inputStore.setERC721TokenName(e.target.value)}
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
            onChange={(e) => inputStore.setERC721TokenSymbol(e.target.value)}
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
              value={inputStore.erc721.receiver}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                inputStore.setERC721Receiver(e.target.value)
              }
            />
            <Button
              icon={EditIcon}
              selected={true}
              maxSize
              onClick={() => alert(inputStore.erc721.privateKey)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <BodyText>
            <FormattedMessage id="tokenSettingsBaseUri" />
          </BodyText>
          <input
            type="text"
            className={inputTextStyle}
            onChange={(e) => inputStore.setERC721BaseUri(e.target.value)}
            placeholder="https://..."
          />
        </div>

        <div>
          <div>
            <div>
              <input
                type="checkbox"
                className="mr-2"
                defaultChecked={inputStore.erc721.mintable}
                onChange={(e) => inputStore.setERC721Mintable(e.target.checked)}
              />
              <BodyText>
                <FormattedMessage id="tokenSettingsMintable" />
              </BodyText>
            </div>
          </div>
          {inputStore.erc721.mintable && (
            <div>
              <input
                type="checkbox"
                className="mr-2"
                defaultChecked={inputStore.erc721.autoIncrementIds}
                onChange={(e) =>
                  inputStore.setERC721AutoIncrementIds(e.target.checked)
                }
              />
              <BodyText>
                <FormattedMessage id="tokenSettingsAutoIncrementIds" />
              </BodyText>
            </div>
          )}
        </div>

        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.erc721.burnable}
            onChange={(e) => inputStore.setERC721Burnable(e.target.checked)}
          />
          <BodyText>
            <FormattedMessage id="tokenSettingsBurnable" />
          </BodyText>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              defaultChecked={inputStore.erc721.pausable}
              onChange={(e) => inputStore.setERC721Pausable(e.target.checked)}
            />
            <BodyText>
              <FormattedMessage id="tokenSettingsPausable" />
            </BodyText>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.erc721.enumerable}
            onChange={(e) => inputStore.setERC721Enumerable(e.target.checked)}
          />
          <BodyText>
            <FormattedMessage id="tokenSettingsEnumerable" />
          </BodyText>
        </div>
        <div>
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={inputStore.erc721.uriStorage}
            onChange={(e) => inputStore.setERC721UriStorage(e.target.checked)}
          />
          <BodyText>
            <FormattedMessage id="tokenSettingsUriStorage" />
          </BodyText>
        </div>
        {inputStore.erc721.ownable && (
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  className="mr-2"
                  defaultChecked={inputStore.erc721.ownable}
                  onChange={(e) =>
                    inputStore.setERC721Ownable(e.target.checked)
                  }
                />
                <BodyText>
                  <FormattedMessage id="tokenSettingsOwnable" />
                </BodyText>
              </label>
            </div>

            <div className="space-y-2">
              <label>
                <input
                  type="radio"
                  className="mr-2"
                  defaultChecked={inputStore.erc721.roles}
                  onChange={(e) => inputStore.setERC721Roles(e.target.checked)}
                />
                <BodyText>
                  <FormattedMessage id="tokenSettingsRoles" />
                </BodyText>
              </label>
            </div>
          </div>
        )}

        {inputStore.erc721.roles && (
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  className="mr-2"
                  defaultChecked={inputStore.erc721.ownable}
                  onChange={(e) =>
                    inputStore.setERC721Ownable(e.target.checked)
                  }
                />
                <BodyText>
                  <FormattedMessage id="tokenSettingsOwnable" />
                </BodyText>
              </label>
            </div>

            <div className="space-y-2">
              <label>
                <input
                  type="radio"
                  className="mr-2"
                  defaultChecked={inputStore.erc721.roles}
                  onChange={(e) => inputStore.setERC721Roles(e.target.checked)}
                />
                <BodyText>
                  <FormattedMessage id="tokenSettingsRoles" />
                </BodyText>
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default observer(ERC721TokenSettingsView)
