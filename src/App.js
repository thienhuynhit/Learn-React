import React, { useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider.js";
function App() {
  const [isShowCart, setisShowCart] = useState(false);
  const handleShowCart = () => {
    setisShowCart(true);
  };
  const handleCloseCart = () => {
    setisShowCart(false);
  };
  const handleOrder = (value) => {
    value ? console.log("Ordering...") : console.log("Please Re-Order!!");
  };
  return (
    <CartProvider>
      {isShowCart && <Cart onClose={handleCloseCart} onOrder={handleOrder} />}
      <Header onShow={handleShowCart}></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;
