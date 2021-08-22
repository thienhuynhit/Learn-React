import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
function App() {
  const [isShowCart, setisShowCart] = useState(false);
  const handleShowCart = (value) => {
    setisShowCart(value);
  };
  const handleCloseCart = (value) => {
    setisShowCart(value);
  };
  const handleOrder = (value) => {
    value && console.log("Ordering...");
  };
  return (
    <Fragment>
      {isShowCart && <Cart onClose={handleCloseCart} onOrder={handleOrder} />}
      <Header onShowCart={handleShowCart}></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
