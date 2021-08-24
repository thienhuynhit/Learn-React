import React, { useReducer } from "react";
import cartcontext from "./cart-context";

const defaultStateCart = {
  items: [],
  TotalAmount: 0,
};
const reducer = (state, action) => {
  if (action.type === "ADDITEM") {
    const checkExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (checkExistingItem >= 0) {
      const updateItems = [...state.items];
      updateItems[checkExistingItem].amount =
        state.items[checkExistingItem].amount + action.item.amount;
      const updateTotalAmount =
        state.TotalAmount + action.item.price * action.item.amount;
      console.log(`existed items just update amount`);
      console.log(updateItems);
      console.log(updateTotalAmount);
      return { items: updateItems, TotalAmount: updateTotalAmount };
    } else {
      const updateItems = state.items.concat(action.item);
      const updateTotalAmount =
        state.TotalAmount + action.item.price * action.item.amount;
      console.log(`not existed items add item and update amount`);
      console.log(updateItems);
      console.log(updateTotalAmount);
      return { items: updateItems, TotalAmount: updateTotalAmount };
    }
  }

  if (action.type === "REMOVEITEM") {
    if (state.items.length !== 0) {
      const checkExistingItem = state.items.findIndex(
        (item) => item.id === action.id
      );
      if (checkExistingItem >= 0) {
        if (state.items[checkExistingItem].amount > 0) {
          const updateItems = [...state.items];
          updateItems[checkExistingItem].amount -= 1;
          const updateTotalAmount =
            state.TotalAmount - updateItems[checkExistingItem].price;
          console.log(`Remove! existed items update amount`);
          console.log(updateItems);
          console.log(updateTotalAmount);
          return { items: updateItems, TotalAmount: updateTotalAmount };
        } else {
          const updateItems = state.items.filter(
            (item) => item.id !== action.id
          );
          const updateTotalAmount = state.TotalAmount;
          console.log(`Remove! existed items amount=0 removed`);
          console.log(updateItems);
          console.log(updateTotalAmount);
          return { items: updateItems, TotalAmount: updateTotalAmount };
        }
      }
    }
  }

  if (action.type === "ORDER") {
    return defaultStateCart;
  }
};

const CartProvider = (props) => {
  const [stateCart, dispatchCart] = useReducer(reducer, defaultStateCart);
  const handleAddItem = (item) => {
    dispatchCart({ type: "ADDITEM", item: item });
  };
  // Add dispatch
  const handleRemoveItem = (id) => {
    dispatchCart({ type: "REMOVEITEM", id: id });
  };
  // remove dispactch
  const handleOrder = () => {
    dispatchCart({ type: "ORDER" });
  };

  const defaultValueCT = {
    items: stateCart.items,
    totalAmount: stateCart.TotalAmount,
    AddItem: handleAddItem,
    RemoveItem: handleRemoveItem,
    Order: handleOrder,
  };

  return (
    <cartcontext.Provider value={defaultValueCT}>
      {props.children}
    </cartcontext.Provider>
  );
};
export default CartProvider;
