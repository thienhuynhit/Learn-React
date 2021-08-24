import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.js";
import cartcontext from "../../../store/cart-context";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCT = useContext(cartcontext);
  const handleAmoutForm = (value) => {
    console.log(value);
    cartCT.AddItem({
      id: props.id,
      name: props.name,
      amount: value,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm Amount={handleAmoutForm} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
