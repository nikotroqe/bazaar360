import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const searchData = [
  { title: "n'Bazaar360 Homepage", description: "Digital experience of Pazari i Ri in Tirana", category: "Main", path: "/home" },
  { title: "About Pazari i Ri", description: "Discover the history and heritage of Tirana's New Bazaar", category: "About", path: "/about" },
  { title: "360° Virtual Tour", description: "Immersive 360-degree exploration of the bazaar", category: "Experience", path: "/tour360" },
  { title: "AR Stories", description: "Augmented reality stories from the bazaar", category: "Stories", path: "/ar_stories" },
  { title: "Events Calendar", description: "Upcoming events and activities at the bazaar", category: "Events", path: "/events" },
  { title: "Interactive Map", description: "Navigate the bazaar with our interactive map", category: "Navigation", path: "/map" },
  { title: "Admin Panel", description: "Manage content and settings", category: "Admin", path: "/admin" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Filtron kërkimet
  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    setQuery("");
    setShowResults(false);
    setMenuOpen(false); // Mbyll menu në mobile kur zgjedh
    navigate(item.path);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <div className="d-flex align-items-center">
          <div className="n-box me-2">n'</div>
          <Link className="navbar-brand fw-semibold m-0" to="/home">Bazaar360</Link>
        </div>

        {/* Mobile toggler */}
        <button
          className={`navbar-toggler ${menuOpen ? "open" : ""}`}
          type="button"
          aria-controls="navMenu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? "show" : ""}`} id="navMenu">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item"><NavLink to="/home" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/tour360" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>360° Exploration</NavLink></li>
            <li className="nav-item"><NavLink to="/ar_stories" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>AR Stories</NavLink></li>
            <li className="nav-item"><NavLink to="/events" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>Events</NavLink></li>
            <li className="nav-item"><NavLink to="/map" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>Map</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>Contact</NavLink></li>
            <li className="nav-item"><NavLink to="/admin" className={({ isActive }) => "nav-link" + (isActive ? " active-link" : "")}>Admin</NavLink></li>
          </ul>

          {/* Search Box */}
          <div className="search-container justify-content-end d-flex" ref={containerRef}>
            <input
              type="text"
              className="search-input"
              placeholder="Search bazaar..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowResults(true); }}
              onFocus={() => query && setShowResults(true)}
            />
            {showResults && query && (
              <div className="search-dropdown">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <div key={index} className="search-item" onClick={() => handleSelect(item)}>
                      <div className="search-item-left">
                        <div className="search-title">{item.title}</div>
                        <div className="search-description">{item.description}</div>
                      </div>
                      <div className="search-category">{item.category}</div>
                    </div>
                  ))
                ) : (
                  <div className="search-no-results">
                    <div className="no-results-title">No results for "<strong>{query}</strong>"</div>
                    <div className="no-results-sub">Try different keywords</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Login / SignUp */}
          <div className="d-flex mt-2 mt-lg-0">
            <Link to="/login" className="btn btn-outline-secondary btn-sm me-2">Login</Link>
            <Link to="/sign_up" className="btn btn-primary btn-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;