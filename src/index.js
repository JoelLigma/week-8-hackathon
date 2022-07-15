import React from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App";
import { BrowserRouter } from "react-router-dom";
import "./styles/partials/_resets.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
