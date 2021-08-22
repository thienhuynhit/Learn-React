import React, { Fragment } from "react";
import ImageMeals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";
const Header = (props) => {
  const handleCArtButton = (value) => {
    console.log("tracking data Cart Header Button");
    console.log(value);
    props.onShowCart(value);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Delivery App</h1>
        <HeaderCartButton onShow={handleCArtButton} />
      </header>
      <div className={classes["main-image"]}>
        <img src={ImageMeals} alt="A table with full dishes!"></img>
      </div>
    </Fragment>
  );
};
export default Header;
