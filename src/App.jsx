import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import LoginPage from "./TheLoginPage.jsx"; 
import MainPage from "./MainPgae.jsx";
import ReportPage from "./ReportPage.jsx";
import ActivityInsight from "./ActivityInsight.jsx"
import { AnimatePresence } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/LoginPage"); // Match the route path exactly
  };

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="BrandEvolution-WhiteonNottinghamBlue-Cropped-450x173.png"
            alt="school logo"
            width={450}
            height={173}
          />
        </div>
        <div className = {styles.rightPart}>
          <div className={styles.text_container}>
            <h1>Group 18 segp</h1>
            <p>welcome to our website</p>
          </div>
          <div>
            <button onClick={goToLoginPage} className="scroll-button">
              LOGIN
            </button>
          </div>
        </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ReportPage" element={<ReportPage />} />
        <Route path="/ActivityInsight" element={<ActivityInsight />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
