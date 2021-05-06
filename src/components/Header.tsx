import React, { FC } from "react";
import { classnames } from "classnames/tailwind";

const headerStyle = classnames("mt-5", "mb-10");
const logoWrapperStyle = classnames("text-3xl", "font-bold");
const logoStyle = classnames(
  "bg-clip-text",
  "text-transparent",
  "bg-gradient-to-r",
  "from-base-blue",
  "to-light-purple",
  "uppercase",
  "cursor-default",
  "select-none"
);

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <div className={logoWrapperStyle}>
        <span className={logoStyle}>Fondu</span>
      </div>
    </header>
  );
};

export default Header;
