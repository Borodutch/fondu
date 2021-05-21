import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppNetworks, appStore } from "store/app.store"
import { langStore } from "store/language.store"
import { buttonStyleReal, buttonStyleTest } from "./styles"

const Navigation: FC = () => {
  return (
    <nav>
      <button
        onClick={() => langStore.toggleLanguage()}
        className={
          langStore.currentLanguage === "en" ? buttonStyleReal : buttonStyleTest
        }
      >
        {langStore.currentLanguage === "en" && "English"}
        {langStore.currentLanguage === "ru" && "Русский"}
      </button>
      <button
        onClick={() => appStore.toggleNetwork()}
        className={
          appStore.currentNetwork === AppNetworks.Real
            ? buttonStyleReal
            : buttonStyleTest
        }
      >
        {appStore.currentNetwork === AppNetworks.Real && "Real network"}
        {appStore.currentNetwork === AppNetworks.Test && "Test network"}
      </button>
    </nav>
  )
}

export default observer(Navigation)
