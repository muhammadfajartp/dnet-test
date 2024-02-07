import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemesProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemesProvider>
         <CartProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </CartProvider>
      </ThemesProvider>
   </React.StrictMode>
);
