import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: n' + Bazaar360 */}
        <div className="d-flex align-items-center">
          <div className="n-box me-2" title="n'">n'</div>
          <Link className="navbar-brand fw-semibold m-0" to="/home">Bazaar360</Link>
        </div>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right: links, search, buttons */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tour360">360° Exploration</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ar_stories">AR Stories</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/map">Map</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
          </ul>

          <form className="d-flex mx-3 mb-2 mb-lg-0" role="search">
            <input
              className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"
            />
            <button className="btn btn-outline-primary btn-sm" type="submit">Search</button>
          </form>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-secondary btn-sm me-2">Login</Link>
            <Link to="/sign_up" className="btn btn-primary btn-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

