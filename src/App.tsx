import React from 'react'
import Root from 'components/Root'
import { classnames } from 'classnames/tailwind'
import { BlockNumber, DashLine, TabButton } from 'components/Blocks'

const flex = classnames('flex')
const flexGrow = classnames('flex-grow')
const flexCol = classnames(flex, 'flex-col')
const flexRow = classnames(flex, 'flex-row')
const flexRowOnDesktop = classnames(flexCol, 'md:flex-row')

const whiteText = classnames('text-white')
const darkGrayText = classnames('text-gray-900')
const largeText = classnames('text-lg')
const smallText = classnames('text-xs')
const boldFont = classnames('font-bold')

const fullWidth = classnames('w-full')
const justifyBetween = classnames('justify-between')
const marginBottom2 = classnames('mb-2')
const marginRight1 = classnames('mr-1')
const marginRight5 = classnames('mr-5')

const hideOnMobile = classnames('hidden', 'md:block')
const hideOnDesktop = classnames('block', 'md:hidden')

const button = classnames('border-red-400', 'border-2', 'rounded')
const redBorder = classnames('border-red-400')
const blueBorder = classnames('border-blue-300')

const row = classnames(flexRow, 'my-1')
const numberWrapper = classnames(hideOnMobile, 'mr-3')
const logo = classnames('my-3', 'text-lg', 'font-bold')
const label = classnames(flexGrow, smallText)
const contractCodeBlock = classnames('rounded', 'bg-gray-900', 'h-56', 'p-2')
const numberInput = classnames(darkGrayText, 'md:w-56')
const largeBlock = classnames(
  'bg-purple-500',
  'bg-opacity-25',
  'rounded',
  'my-3',
  'p-3'
)
const subBlock = classnames(
  'p-2',
  'bg-purple-500',
  'bg-opacity-25',
  'rounded',
  'flex-grow'
)
const tobBlockSplitter = classnames(
  'border-purple-400',
  'opacity-25',
  'border',
  'my-2',
  'md:my-0',
  'md:mx-2'
)
const mobileNumbersBlock = classnames(
  flexRow,
  justifyBetween,
  'md:hidden',
  'my-2',
  'items-center'
)
const tabsBottomLine = classnames(
  '-mx-3',
  'mb-2',
  'border-purple-400',
  'border-opacity-25',
  'border-b-4'
)
const wrapInputBlockOnMobile = classnames(flexCol, fullWidth, 'mb-2', 'md:pr-3')
const deployButton = classnames(
  button,
  blueBorder,
  'mb-2',
  'md:w-1/5',
  'md:mr-3',
  'md:mb-0'
)
const downloadButton = classnames(button, blueBorder, 'md:w-1/5')
const getEthButton = classnames(
  button,
  blueBorder,
  fullWidth,
  'mb-2',
  'self-end',
  'md:mt-0'
)

const App = () => {
  return (
    <Root>
      <div className={whiteText}>
        <h1 className={logo}>FONDU</h1>
        <div className={flex}>
          <h2 className={flexGrow}>CONTRACTS</h2>
          <button className={classnames(button, redBorder, hideOnDesktop)}>
            Reset
          </button>
        </div>
        <div className={largeBlock}>
          <div className={classnames(flexRowOnDesktop, justifyBetween)}>
            <div className={classnames(flexCol, justifyBetween, fullWidth)}>
              <label className={largeText} htmlFor='adress'>
                Adress
              </label>
              <div className={flex}>
                <input
                  id='adress'
                  className={classnames(flexGrow, darkGrayText)}
                  type='text'
                  placeholder='etherium adress'
                />
                <button className={classnames(button, blueBorder)}>edit</button>
              </div>
            </div>
            <div className={tobBlockSplitter}></div>
            <div
              className={classnames(
                flexRowOnDesktop,
                justifyBetween,
                fullWidth
              )}
            >
              <div className={fullWidth}>
                <p className={largeText}>Balance</p>
                <p>0.0920 Eth</p>
                <p className={smallText}>1.133 USD</p>
              </div>
              <button className={getEthButton}>
                Get test ETH to your wallet
              </button>
            </div>
          </div>
        </div>
        <div className={largeBlock}>
          <div className={flexCol}>
            <div className={classnames(flexRow, marginBottom2)}>
              <TabButton text='TEST NETWORK' isActive />
              <TabButton text='REAL NETWORK' />
              <div className={flexGrow}></div>
              <button className={classnames(button, redBorder, hideOnMobile)}>
                Reset
              </button>
            </div>
            <div className={tabsBottomLine}></div>
            <div className={mobileNumbersBlock}>
              <BlockNumber number={1} isFilled />
              <DashLine isActive />
              <BlockNumber number={2} />
              <DashLine />
              <BlockNumber number={3} />
            </div>
            <div className={row}>
              <div className={numberWrapper}>
                <BlockNumber number={1} isFilled />
                <DashLine isActive />
              </div>
              <div className={subBlock}>
                <p className={smallText}>Token type:</p>
                <div className={flexRow}>
                  <div className={marginRight5}>
                    <input name='token' type='radio' id='erc20' checked />
                    <label htmlFor='erc20'>ERC-20</label>
                  </div>
                  <div>
                    <input name='token' type='radio' id='erc721' />
                    <label htmlFor='erc721'>ERC-721</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={row}>
              <div className={numberWrapper}>
                <BlockNumber number={2} />
                <DashLine />
              </div>
              <div className={subBlock}>
                <div className={classnames(flexRowOnDesktop, justifyBetween)}>
                  <div className={wrapInputBlockOnMobile}>
                    <label className={label} htmlFor='token-name'>
                      Human-readable name of your token like "Fondu", "Bitcoin"
                      or "Ethereum":
                    </label>
                    <input
                      className={darkGrayText}
                      type='text'
                      id='token-name'
                      placeholder='Name'
                    />
                  </div>
                  <div
                    className={classnames(flexCol, fullWidth, marginBottom2)}
                  >
                    <label className={label} htmlFor='token-symbol'>
                      Symbol of your token like "FDU", "BTC" or "ETH":
                    </label>
                    <input
                      className={darkGrayText}
                      type='text'
                      id='token-symbol'
                      placeholder='Symbol'
                    />
                  </div>
                </div>
                <div className={classnames(flexCol, marginBottom2)}>
                  <label className={label} htmlFor='decimals'>
                    Number of decimals your currency supports; for instance,
                    Ethereum can go as low as 18 decimals or
                    0.000000000000000001 ETH:
                  </label>
                  <input
                    className={numberInput}
                    type='number'
                    id='decimals'
                    value='1'
                  />
                </div>
                <div className={classnames(flexRowOnDesktop, justifyBetween)}>
                  <div className={wrapInputBlockOnMobile}>
                    <label className={label} htmlFor='tokens-amount'>
                      How many of your tokens will user get for 1 ETH:
                    </label>
                    <input
                      className={numberInput}
                      type='number'
                      id='tokens-amount'
                      value='1'
                    />
                  </div>
                  <div
                    className={classnames(flexCol, fullWidth, marginBottom2)}
                  >
                    <label className={label} htmlFor='eth-wallet'>
                      ETH wallet that will receive the collected funds:
                    </label>
                    <input
                      className={darkGrayText}
                      type='text'
                      id='eth-wallet'
                      placeholder='Wallet'
                    />
                  </div>
                </div>
                <div className={classnames(flexCol, marginBottom2)}>
                  <label className={label} htmlFor='decimals'>
                    Whether your crowdsale is bounded by a time frame or not:
                  </label>
                  <div>
                    <input
                      className={marginRight1}
                      type='checkbox'
                      id='crowdsale-timed'
                    />
                    <label className={boldFont} htmlFor='crowdsale-timed'>
                      Is this crowdsale timed?
                    </label>
                  </div>
                </div>
                <div className={classnames(flexCol, marginBottom2)}>
                  <label className={label} htmlFor='decimals'>
                    Whether you have the maximum value of tokens sold:
                  </label>
                  <div>
                    <input
                      className={marginRight1}
                      type='checkbox'
                      id='crowdsale-capped'
                    />
                    <label className={boldFont} htmlFor='crowdsale-capped'>
                      Is this crowdsale capped?
                    </label>
                  </div>
                </div>
                <div className={classnames(flexCol, marginBottom2)}>
                  <label className={label} htmlFor='decimals'>
                    Would you like to accept Ethereum only from the whitelisted
                    addresses?
                  </label>
                  <div>
                    <input
                      className={marginRight1}
                      type='checkbox'
                      id='whitelist'
                    />
                    <label className={boldFont} htmlFor='whitelist'>
                      Is this crowdsale whitelist only?
                    </label>
                  </div>
                </div>
                <div className={contractCodeBlock}>Contract code here</div>
              </div>
            </div>
            <div className={row}>
              <div className={numberWrapper}>
                <BlockNumber number={3} />
              </div>
              <div className={subBlock}>
                <p className={smallText}>
                  What's next? <br />
                  <br />
                  1.Run ./deploy.sh in the root folder of the zip you've
                  downloaded <br />
                  2.Follow the steps of the deployer
                  <br /> 3.Enjoy your smart-contract deployed!
                </p>
                <div className={classnames(flexRowOnDesktop, marginBottom2)}>
                  <button className={deployButton}>Deploy</button>
                  <button className={downloadButton}>Download Files</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  )
}

export default App
