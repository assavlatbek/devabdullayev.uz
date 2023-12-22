import React from "react";
import Layout from "./layout";
import HeroPage from "./pages/hero";
import AboutPage from "./pages/about";
import SkillsPage from "./pages/skills";
import PortfolioPage from "./pages/portfolio";

const App = () => {
  return (
    <>
      <Layout>
        <HeroPage />
        <AboutPage />
        <SkillsPage />
        <PortfolioPage />
      </Layout>
    </>
  );
};

export default App;
