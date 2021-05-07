import React, { FC } from "react";
import { headerStyle, logoStyle, logoWrapperStyle } from "./styles";

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <div className={logoWrapperStyle}>
        <a className={logoStyle} href="/">
          Fondu
        </a>
      </div>
      <nav>nav</nav>
    </header>
  );
};

export default Header;
