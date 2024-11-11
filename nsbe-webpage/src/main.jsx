import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutApp from './JSXApps/AboutApp.jsx'
import ContactApp from './JSXApps/ContactApp.jsx'
import OpportunityApp from './JSXApps/OpportunityApp.jsx'
import ResourcesApp from './JSXApps/ResourcesApp.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/contact" element={<ContactApp />} />
        <Route path="/opportunities" element={<OpportunityApp />} />
        {/* <Route path="/resources" element={<ResourcesApp />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
