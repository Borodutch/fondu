import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppNetworks, appStore } from "store/app.store"
import { buttonStyleReal, buttonStyleTest } from "./styles"
import { FormattedMessage } from "react-intl"

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
        {appStore.currentNetwork === AppNetworks.Real && (
          <FormattedMessage id="buttonRealNetwork" />
        )}
        {appStore.currentNetwork === AppNetworks.Test && (
          <FormattedMessage id="buttonTestNetwork" />
        )}
      </button>
    </nav>
  )
}

export default observer(Navigation)
