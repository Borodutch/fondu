import React from "react";
import Root from "./components/Root";
import Header from "./components/Header";
import Section from "components/Section";
import ContractWallet from "components/ContractWallet";

const App = () => {
  return (
    <Root>
      <Header />
      <Section title="Contracts">
        <ContractWallet />
      </Section>
      <Section>Main</Section>
    </Root>
  );
};

export default App;
