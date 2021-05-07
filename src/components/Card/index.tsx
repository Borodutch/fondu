import React, { FC } from "react";
import { cardStyle } from "./styles";

const Card: FC = ({ children }) => {
  return <div className={cardStyle}>{children}</div>;
};

export default Card;
