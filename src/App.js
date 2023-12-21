import React from "react";
import Layout from "./layout";
import HeroPage from "./pages/hero";
import AboutPage from "./pages/about";
import SkillsPage from "./pages/skills";

const App = () => {
  return (
    <>
      <Layout>
        <HeroPage />
        <AboutPage />
        <SkillsPage />
      </Layout>
    </>
  );
};

export default App;
