import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file includes Tailwind styles
import Login from "./login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
