import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppNetworks, appStore } from "store/app.store"
import { buttonStyleReal, buttonStyleTest } from "./styles"
import { realNetworkButtonText, testNetworkButtonText } from "components/Text"

const Navigation: FC = () => {
  return (
    <nav>
      <button
        onClick={() => appStore.toggleNetwork()}
        className={
          appStore.currentNetwork === AppNetworks.Real
            ? buttonStyleReal
            : buttonStyleTest
        }
      >
        {appStore.currentNetwork === AppNetworks.Real && realNetworkButtonText}
        {appStore.currentNetwork === AppNetworks.Test && testNetworkButtonText}
      </button>
    </nav>
  )
}

export default observer(Navigation)
