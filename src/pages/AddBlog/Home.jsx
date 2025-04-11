import React from "react";
import Layout from "../../components/Layout/Layout";
import Cards from "./components/Cards";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </Layout>
  );
};

export default Home;
