import classes from "./Cart.module.css";
import React from "react";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const handleCloseCart = () => {
    props.onClose(false);
  };
  const handleOrder = () => {
    props.onOrder(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "Break", amount: 2, price: 2.16 }].map((xx) => (
        <li key={xx.id}>{xx.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleCloseCart}>
          Close
        </button>
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
