import React, { FC } from "react";
import { classnames } from "classnames/tailwind";

const rootStyle = classnames("container", "mx-auto", "px-5");
const Root: FC = ({ children }) => {
  return <main className={rootStyle}>{children}</main>;
};

export default Root;
