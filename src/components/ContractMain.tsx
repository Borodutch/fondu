import { classnames } from "classnames/tailwind";
import React, { FC } from "react";

const ContractMain: FC = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="w-4/6 mx-auto flex justify-between text-xl items-center pt-3 pb-8">
            <div className="flex flex-row items-center space-x-2">
              <div className="w-8 h-8 text-white rounded-full bg-base-blue flex items-center justify-center">
                1
              </div>
              <span className="text-base-blue">Token type</span>
            </div>
            <div className="border-b-2 border-dashed w-40"></div>
            <div className="flex flex-row items-center space-x-2">
              <div className="w-8 h-8 text-gray-300 rounded-full border border-gray-300 flex items-center justify-center">
                2
              </div>
              <span className="text-gray-300">Token settings</span>
            </div>
            <div className="border-b-2 border-dashed w-40"></div>
            <div className="flex flex-row items-center space-x-2">
              <div className="w-8 h-8 text-gray-300 rounded-full border border-gray-300 flex items-center justify-center">
                3
              </div>
              <span className="text-gray-300">Deployment</span>
            </div>
          </div>
          <div className="bg-white border border-gray-200 py-3 px-4 rounded-base w-full shadow-sm text-lg">
            <p className="pb-2 font-medium">Token type</p>
            <div className="space-y-1">
              <div>
                <input
                  name="token"
                  type="radio"
                  id="erc20"
                  checked
                  className="mr-1"
                />
                <label htmlFor="erc20">ERC-20</label>
              </div>
              <div>
                <input name="token" type="radio" id="erc721" className="mr-1" />
                <label htmlFor="erc721">ERC-721</label>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-4 space-x-4">
            <button className="flex-grow p-3 bg border-2 border-gray-300 text-gray-300 rounded-base hover:opacity-80 focus:outline-none">
              Previous step
            </button>
            <button className="flex-grow p-3 border-2 border-base-blue text-base-blue rounded-base hover:opacity-80 focus:outline-none">
              Next step
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractMain;
