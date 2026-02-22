import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Komponentët për çdo faqe
import Home from "./pages/Home";
import About from "./pages/About";
import Tour360 from "./pages/Tour360";
import ARStories from "./pages/ARStories";
import Events from "./pages/Events";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Partner from "./pages/Partner";

// Registeri dhe login
import Login from "./register/Login";
import SignUp from "./register/SignUp";


const App = () => {
  return (
    <Router>
      <div style={{margin: 60}}>
        <Navbar /> {/* Navbar shfaqet gjithmonë */}
      </div>
      

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour360" element={<Tour360 />} />
        <Route path="/ar_stories" element={<ARStories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/partner" element={<Partner />} />

        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />

        {/* Default route */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer/> {/* Footer shfaqet gjithmonë */}
    </Router>
  );
};

export default App;