import IntlProvider from 'i18n/IntlProvider'
import Root from 'components/Root'
import { observer } from 'mobx-react-lite'
import Header from 'components/Header'
import Section from 'components/Section'
import Wallet from 'components/Wallet'
import ContractBuilder from 'components/ContractBuilder'
import ThemeProvider from 'components/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <IntlProvider>
        <Root>
          <Header />
          <Section>
            <Wallet />
          </Section>
          <Section>
            <ContractBuilder />
          </Section>
        </Root>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default observer(App)
