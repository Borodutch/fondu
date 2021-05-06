import React from "react";
import Root from "components/Root";
import Header from "components/Header";
import Section from "components/Section";
import ContractWallet from "components/ContractWallet";
import ContractMain from "components/ContractMain";

const App = () => {
  return (
    <Root>
      <Header />
      <Section title="Contracts">
        <ContractWallet />
      </Section>
      <Section>
        <ContractMain />
      </Section>
    </Root>
  );
};

export default App;
