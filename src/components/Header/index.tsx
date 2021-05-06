import React, { FC } from "react";
import { headerStyle, logoStyle, logoWrapperStyle } from "./styles";

const Header: FC = () => {
  return (
    <header className={headerStyle}>
      <div className={logoWrapperStyle}>
        <span className={logoStyle}>Fondu</span>
      </div>
      <nav>nav</nav>
    </header>
  );
};

export default Header;
