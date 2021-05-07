import React, { FC } from "react";

const Stepper: FC = () => {
  return (
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
  );
};

export default Stepper;
