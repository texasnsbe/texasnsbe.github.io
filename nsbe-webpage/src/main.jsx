/**
 * Application entry point
 * - Sets up React Router and renders the appropriate route components.
 * - Global styles and Tailwind layers are imported via `index.css`.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutApp from "./Officers/Components/AboutApp.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/officers" element={<AboutApp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
