import React from "react"
import Root from "components/Root"
import { observer } from "mobx-react-lite"
import Header from "components/Header"
import Section from "components/Section"
import ContractWallet from "components/ContractWallet"
import ContractMain from "components/ContractMain"
import { ThemeProvider } from "components/Theme/index"

const App = () => {
  return (
    <ThemeProvider>
      <Root>
        <Header />
        <Section title="Contracts">
          <ContractWallet />
        </Section>
        <Section>
          <ContractMain />
        </Section>
      </Root>
    </ThemeProvider>
  )
}

export default observer(App)
