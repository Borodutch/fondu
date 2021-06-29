import IntlProvider from 'i18n/IntlProvider'
import Root from 'components/Root'
import { observer } from 'mobx-react-lite'
import Header from 'components/Header'
import Section from 'components/Section'
import ContractWallet from 'components/ContractWallet'
import ContractMain from 'components/ContractMain'
import ThemeProvider from 'components/Theme'

const App = () => {
  return (
    <ThemeProvider>
      <IntlProvider>
        <Root>
          <Header />
          <Section title="Contracts">
            <ContractWallet />
          </Section>
          <Section>
            <ContractMain />
          </Section>
        </Root>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default observer(App)
