import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppNetworks, appStore } from "store/app.store"
import { Button } from "components/Controls"
import { FormattedMessage } from "react-intl"

const Navigation: FC = () => {
  return (
    <nav>
      <Button
        onClick={() => appStore.toggleNetwork()}
        real={appStore.currentNetwork === AppNetworks.Real}
      >
        {appStore.currentNetwork === AppNetworks.Real && (
          <FormattedMessage id="buttonRealNetwork" />
        )}
        {appStore.currentNetwork === AppNetworks.Test && (
          <FormattedMessage id="buttonTestNetwork" />
        )}
      </Button>
    </nav>
  )
}

export default observer(Navigation)
