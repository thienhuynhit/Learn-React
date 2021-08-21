import AvailableMeals from "./AvailableMeals.js";
import MealsSummary from "./MealsSummary.js";
import React from "react";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};
export default Meals;
