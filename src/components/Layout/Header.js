import React, { Fragment } from "react";
import ImageMeals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={ImageMeals} alt="A table with full dishes!!"></img>
      </div>
    </Fragment>
  );
};
export default Header;
