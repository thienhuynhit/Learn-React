import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";

const HeaderCartButton = (props) => {
  const handleClick = (event) => {
    props.onShow(true);
  };
  return (
    <React.Fragment>
      <button className={classes.button} onClick={handleClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </React.Fragment>
  );
};
export default HeaderCartButton;
