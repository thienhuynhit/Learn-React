import classes from "./Cart.module.css";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
// nhan data tu context va render xuong dong thoi cung update  state cua 2 button add va remove
const Cart = (props) => {
  const cartItemsG = useContext(CartContext);
  const { items, totalAmount } = cartItemsG;
  const cartItemRemoveHandler = (id) => {
    cartItemsG.RemoveItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartItemsG.AddItem({ ...item, amount: 1 });
  };
  // handle order button
  const handleOrder = () => {
    if (totalAmount > 0) {
      props.onOrder(true);
      cartItemsG.Order();
    } else {
      props.onOrder(false);
    }
  };
  // demo cho hien thi thoi
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  // end demo
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Math.trunc(totalAmount * 100) / 100}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
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
