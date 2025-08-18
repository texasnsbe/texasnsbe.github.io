/**
 * Application entry point
 * - Sets up React Router with routes for Home, Officers, Resources, and TimeMachine
 * - Global styles and Tailwind layers are imported via `index.css`.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutApp from "./Officers/Components/AboutApp.jsx";
// import ResourcesApp from "./Resources/Components/ResourcesApp.jsx";
// import TimeMachineApp from "./TimeMachine/Components/TimeMachineApp.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/officers" element={<AboutApp />} />
        {/* <Route path="/resources" element={<ResourcesApp />} />
        <Route path="/timemachine" element={<TimeMachineApp />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
