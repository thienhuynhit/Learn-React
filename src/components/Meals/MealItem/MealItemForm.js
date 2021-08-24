import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";
import Input from "../../UI/Input.js";

const MealItemForm = (props) => {
  const [isValidAmount, setisValidAmount] = useState(true);
  const amountNumber = useRef();
  const handleAmount = (event) => {
    event.preventDefault();
    const amount = amountNumber.current.value;
    if (
      amount.trim().length === 0 ||
      Number(amount) < 0 ||
      Number(amount) > 5
    ) {
      setisValidAmount(false);
      return;
    } else {
      setisValidAmount(true);
      props.Amount(Number(amount));
      // Add data

      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={handleAmount}>
      <Input
        ref={amountNumber}
        name="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isValidAmount && <p>please input your amount!! 🛒🛒</p>}
    </form>
  );
};
export default MealItemForm;
