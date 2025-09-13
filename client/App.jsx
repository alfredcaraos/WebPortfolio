import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./src/pages/Home";
import Project from "./src/pages/Project";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import Skills from "./src/pages/Skills";

// Import Layout
import HomeLayout from "../client/src/layout/HomeLayout";
import ProjectLayout from "../client/src/layout/ProjectLayout";

// Import Component
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import RootLayout from "./src/layout/RootLayout";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/skills" element={<Skills />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
