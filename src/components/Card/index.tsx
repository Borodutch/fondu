import React, { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <div className="bg-white border border-gray-200 py-3 px-4 rounded-base w-full shadow-sm text-lg">
      {children}
    </div>
  );
};

export default Card;
