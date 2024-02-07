import React, { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext({});

export const ThemesProvider = ({ children }) => {
   const [theme, setTheme] = useState("LIGHT");
   localStorage.setItem("data", theme);
   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
   };
   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
