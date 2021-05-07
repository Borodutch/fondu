import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { appStore } from "store/app.store";

const Navigation: FC = () => {
  return (
    <nav>
      <button onClick={() => appStore.toggleNetwork()}>Toggle network</button>
    </nav>
  );
};

export default observer(Navigation);
