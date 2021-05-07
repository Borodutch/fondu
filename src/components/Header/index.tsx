import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { headerStyle, logoStyle, logoWrapperStyle } from "./styles";
import { appStore } from "store/app.store";
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
