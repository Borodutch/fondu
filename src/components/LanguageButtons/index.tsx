import React from "react"
import Language, { flagForLanguage } from "models/Language"
import { appStore } from "store/app.store"
import { container, languageButton } from "./styles"

export default function LanguageButtons() {
  return (
    <div className={container}>
      {Object.values(Language).map((k) => (
        <button
          className={languageButton}
          key={k}
          onClick={() => {
            appStore.language = k
          }}
        >
          {flagForLanguage(k)}
        </button>
      ))}
    </div>
  )
}
