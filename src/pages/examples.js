import React from "react";
import Header from "../components/examples/Header";
import HeaderStatic from "../components/HeaderStatic";
import Layout from "../components/Layout";

const examples = () => {
  return (
    <Layout>
      <h1>hello from examples page</h1>
      <Header></Header>
      <HeaderStatic></HeaderStatic>
    </Layout>
  );
};

export default examples;
