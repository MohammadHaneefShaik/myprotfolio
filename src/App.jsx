import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/About/Resume";

import Contact from "./components/Contact/contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { initScrollReveal } from "./hooks/useScrollReveal";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Animated routes wrapper for page transitions
function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("page-fade-enter-active");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("page-fade-enter");
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("page-fade-enter-active");
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  // Re-initialize scroll reveal after route change
  useEffect(() => {
    const timeout = setTimeout(() => {
      initScrollReveal();
    }, 300);
    return () => clearTimeout(timeout);
  }, [displayLocation]);

  return (
    <div className={transitionStage}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Initialize scroll reveal after preloader finishes
  useEffect(() => {
    if (!load) {
      const timeout = setTimeout(() => {
        initScrollReveal();
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [load]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
