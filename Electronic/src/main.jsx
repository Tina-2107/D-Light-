import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyState from "./context/data/MyState";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyState>
    <App />
  </MyState>
);
