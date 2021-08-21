import React, { Fragment } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart />
      <Header></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
