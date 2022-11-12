import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/global.module.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("main-content"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
