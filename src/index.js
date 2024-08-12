import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";

import "./style/global.css";
import { CartProvider } from "./contexts/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Home />
  </CartProvider>
);
