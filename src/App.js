import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Tour360 from "./pages/Tour360";
import ARStories from "./pages/ARStories";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Partner from "./pages/Partner";

// Auth
import Login from "./register/Login";
import SignUp from "./register/SignUp";

const App = () => {
  return (
    <Router>
      <div style={{margin: 60}}>
        <Navbar /> {/* Navbar shfaqet gjithmonë */}
      </div>

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour360" element={<Tour360 />} />
        <Route path="/ar_stories" element={<ARStories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

        {/* Extra */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/partner" element={<Partner />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />

        {/* Default */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;