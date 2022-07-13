import React from "react";
// import "./App.js";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import datA from "./data";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <p className="popular">POPULAR TOUR PLACES</p>
      <Card dataa={datA} />
    </div>
  );
};

export default App;
