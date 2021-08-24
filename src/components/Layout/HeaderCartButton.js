import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";
import cartcontext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCT = useContext(cartcontext);
  const { items } = cartCT;
  let Total = items.reduce((preVal, items) => preVal + items.amount, 0);
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onShow}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{Total}</span>
      </button>
    </React.Fragment>
  );
};
export default HeaderCartButton;
