import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WhyKicket from "./pages/WhyKicket";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Contact from "./pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/why-kicket" element={<WhyKicket />} />
        <Route path="/accreditation" element={<Service1 />} />
        <Route path="/registration" element={<Service2 />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
