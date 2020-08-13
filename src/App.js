import React from "react";
import Content from "./container/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import "./index.css";
import "./responsive.css";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
};
