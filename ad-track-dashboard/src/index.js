import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct way for React 18+
import App from "./App";
import "./styles/global.css"; // Ensure styles are imported

// ✅ Use createRoot() instead of ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
