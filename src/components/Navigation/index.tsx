import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppNetworks, appStore } from "store/app.store"
import { Button } from "components/Controls"

const Navigation: FC = () => {
  return (
    <nav>
      <Button onClick={() => appStore.toggleNetwork()}>
        {appStore.currentNetwork === AppNetworks.Real && "Real network"}
        {appStore.currentNetwork === AppNetworks.Test && "Test network"}
      </Button>
    </nav>
  )
}

export default observer(Navigation)
