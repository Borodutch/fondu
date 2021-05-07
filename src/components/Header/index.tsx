import React, { FC } from "react";
import { headerStyle, logoStyle, logoWrapperStyle } from "./styles";
import Navigation from "components/Navigation";

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <div className={logoWrapperStyle}>
        <a className={logoStyle} href="/">
          Fondu
        </a>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
