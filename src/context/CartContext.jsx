import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
   const [cart, setChart] = useState(0);
   const toggleCart = () => {
      setChart((prevValue) => prevValue + 1);
   };
   return <CartContext.Provider value={{ cart, toggleCart }}>{children}</CartContext.Provider>;
};
