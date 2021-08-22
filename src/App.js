import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
function App() {
  const [isShowCart, setisShowCart] = useState(false);
  const handleShowCart = () => {
    setisShowCart(true);
  };
  const handleCloseCart = () => {
    setisShowCart(false);
  };
  const handleOrder = (value) => {
    value && console.log("Ordering...");
  };
  return (
    <Fragment>
      {isShowCart && <Cart onClose={handleCloseCart} onOrder={handleOrder} />}
      <Header onShow={handleShowCart}></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
