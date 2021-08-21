import classes from "./MealItemForm.module.css";
import React from "react";
import Input from "../../UI/Input.js";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
