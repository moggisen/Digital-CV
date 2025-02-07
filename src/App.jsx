/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/pages/Navbar";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import About from "./Components/pages/About";
import Projects from "./Components/pages/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
    
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
