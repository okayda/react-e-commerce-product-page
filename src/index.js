import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("main-content"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
