import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const DeploymentView: FC = () => {
  return (
    <>
      <p className="pb-2 font-medium">Check your settings again:</p>
      <ol className="list-decimal list-inside">
        <li>Run ./deploy.sh in the root folder of the zip you've downloaded</li>
        <li>Follow the steps of the deployer</li>
        <li>Enjoy your smart-contract deployed!</li>
      </ol>
    </>
  );
};

export default observer(DeploymentView);
