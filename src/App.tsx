import React from 'react'
import Root from 'components/Root'
import {
  LargeBlock,
  SubBlock,
  Row,
  BlockNumber,
  DashLine,
  NumberWrapper,
  TabButton,
} from 'components/Blocks'

const App = () => {
  return (
    <Root>
      <div className='text-white'>
        <h1 className='my-3 text-lg font-bold'>FONDU</h1>
        <div className='flex'>
          <h2 className='flex-grow'>CONTRACTS</h2>
          <button className='block md:hidden border-red-400 border-2 rounded'>
            Reset
          </button>
        </div>
        <LargeBlock>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col w-full'>
              <label className='text-lg flex-grow' htmlFor='adress'>
                Adress
              </label>
              <div className='flex'>
                <input
                  id='adress'
                  className='flex-grow m-1 text-gray-900'
                  type='text'
                  placeholder='etherium adress'
                />
                <button className='border-blue-300 border-2 rounded'>
                  edit
                </button>
              </div>
            </div>
            <div className='border-purple-400 opacity-25 border my-2 md:my-0 md:mx-2'></div>
            <div className='flex flex-col justify-between md:flex-row w-full'>
              <div className='w-full'>
                <p className='text-lg'>Balance</p>
                <p>0.0920 Eth</p>
                <p className='text-xs'>1.133 USD</p>
              </div>
              <button className='border-blue-300 border-2 rounded w-full self-end mt-2 md:mt-0'>
                Get test ETH to your wallet
              </button>
            </div>
          </div>
        </LargeBlock>
        <LargeBlock>
          <div className='flex flex-col'>
            <div className='flex flex-row mb-2'>
              <TabButton text='TEST NETWORK' isActive />
              <TabButton text='REAL NETWORK' />
              <div className='flex-grow'></div>
              <button className='hidden md:block border-red-400 border-2 rounded'>
                Reset
              </button>
            </div>
            <div className='-mx-3 mb-2 border-purple-400 border-opacity-25 border-b-4'></div>
            <div className='flex flex-row justify-between md:hidden my-2 items-center'>
              <BlockNumber number={1} isFilled />
              <DashLine isActive />
              <BlockNumber number={2} />
              <DashLine />
              <BlockNumber number={3} />
            </div>
            <Row>
              <NumberWrapper>
                <BlockNumber number={1} isFilled />
                <DashLine isActive />
              </NumberWrapper>
              <SubBlock>
                <p className='text-xs'>Token type:</p>
                <div className='flex flex-row'>
                  <div className='mr-5'>
                    <input name='token' type='radio' id='erc20' checked />
                    <label htmlFor='erc20'>ERC-20</label>
                  </div>
                  <div>
                    <input name='token' type='radio' id='erc721' />
                    <label htmlFor='erc721'>ERC-721</label>
                  </div>
                </div>
              </SubBlock>
            </Row>
            <Row>
              <NumberWrapper>
                <BlockNumber number={2} />
                <DashLine />
              </NumberWrapper>
              <SubBlock>
                <div className='flex justify-between flex-col md:flex-row'>
                  <div className='w-full flex flex-col mb-2 md:pr-3'>
                    <label className='text-xs flex-grow' htmlFor='token-name'>
                      Human-readable name of your token like "Fondu", "Bitcoin"
                      or "Ethereum":
                    </label>
                    <input
                      className='text-gray-900'
                      type='text'
                      id='token-name'
                      placeholder='Name'
                    />
                  </div>
                  <div className='w-full flex flex-col mb-2'>
                    <label className='text-xs flex-grow' htmlFor='token-symbol'>
                      Symbol of your token like "FDU", "BTC" or "ETH":
                    </label>
                    <input
                      className='text-gray-900'
                      type='text'
                      id='token-symbol'
                      placeholder='Symbol'
                    />
                  </div>
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-xs flex-grow' htmlFor='decimals'>
                    Number of decimals your currency supports; for instance,
                    Ethereum can go as low as 18 decimals or
                    0.000000000000000001 ETH:
                  </label>
                  <input
                    className='text-gray-900 md:w-56'
                    type='number'
                    id='decimals'
                    value='1'
                  />
                </div>
                <div className='flex justify-between flex-col md:flex-row'>
                  <div className='w-full flex flex-col mb-2 md:pr-3'>
                    <label
                      className='text-xs flex-grow'
                      htmlFor='tokens-amount'
                    >
                      How many of your tokens will user get for 1 ETH:
                    </label>
                    <input
                      className='text-gray-900 md:w-56'
                      type='number'
                      id='tokens-amount'
                      value='1'
                    />
                  </div>
                  <div className='w-full flex flex-col mb-2'>
                    <label className='text-xs flex-grow' htmlFor='eth-wallet'>
                      ETH wallet that will receive the collected funds:
                    </label>
                    <input
                      className='text-gray-900'
                      type='text'
                      id='eth-wallet'
                      placeholder='Wallet'
                    />
                  </div>
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-xs flex-grow' htmlFor='decimals'>
                    Whether your crowdsale is bounded by a time frame or not:
                  </label>
                  <div>
                    <input
                      className='text-gray-900 mr-1'
                      type='checkbox'
                      id='crowdsale-timed'
                    />
                    <label className='font-bold' htmlFor='crowdsale-timed'>
                      Is this crowdsale timed?
                    </label>
                  </div>
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-xs flex-grow' htmlFor='decimals'>
                    Whether you have the maximum value of tokens sold:
                  </label>
                  <div>
                    <input
                      className='text-gray-900 mr-1'
                      type='checkbox'
                      id='crowdsale-capped'
                    />
                    <label className='font-bold' htmlFor='crowdsale-capped'>
                      Is this crowdsale capped?
                    </label>
                  </div>
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-xs flex-grow' htmlFor='decimals'>
                    Would you like to accept Ethereum only from the whitelisted
                    addresses?
                  </label>
                  <div>
                    <input
                      className='text-gray-900 mr-1'
                      type='checkbox'
                      id='crowdsale-capped'
                    />
                    <label className='font-bold' htmlFor='crowdsale-capped'>
                      Is this crowdsale whitelist only?
                    </label>
                  </div>
                </div>
                <div className='rounded bg-gray-900 h-56 p-2'>
                  Contract code here
                </div>
              </SubBlock>
            </Row>
            <Row>
              <NumberWrapper>
                <BlockNumber number={3} />
              </NumberWrapper>
              <SubBlock>
                <p className='text-xs'>
                  What's next? <br />
                  <br />
                  1.Run ./deploy.sh in the root folder of the zip you've
                  downloaded <br />
                  2.Follow the steps of the deployer
                  <br /> 3.Enjoy your smart-contract deployed!
                </p>
                <div className='flex flex-col md:flex-row mt-2'>
                  <button className='border-blue-300 border-2 rounded mb-2 md:w-1/5 md:mr-3 md:mb-0'>
                    Deploy
                  </button>
                  <button className='border-blue-300 border-2 rounded md:w-1/5'>
                    Download Files
                  </button>
                </div>
              </SubBlock>
            </Row>
          </div>
        </LargeBlock>
      </div>
    </Root>
  )
}

export default App
