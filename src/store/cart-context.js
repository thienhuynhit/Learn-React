import React from "react";

const cartcontext = React.createContext({
  items: [],
  totalAmount: 0,
  AddItem: (item) => {},
  RemoveItem: (id) => {},
});

export default cartcontext;
