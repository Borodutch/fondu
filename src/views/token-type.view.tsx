import React, { FC } from "react";

const TokenTypeView: FC = () => {
  return (
    <>
      <p className="pb-2 font-medium">Token type</p>
      <div className="space-y-1">
        <div>
          <input
            name="token"
            type="radio"
            id="erc20"
            defaultChecked
            className="mr-1"
          />
          <label htmlFor="erc20">ERC-20</label>
        </div>
        <div>
          <input name="token" type="radio" id="erc721" className="mr-1" />
          <label htmlFor="erc721">ERC-721</label>
        </div>
      </div>
    </>
  );
};

export default TokenTypeView;
