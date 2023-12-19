import React from "react";
import Layout from "./layout";
import HeroPage from "./pages/hero";
import AboutPage from "./pages/about";

const App = () => {
  return (
    <>
      <Layout>
        <HeroPage />
        <AboutPage />
      </Layout>
    </>
  );
};

export default App;
