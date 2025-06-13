import { useState } from "react";
import "../styles/Navbar.css";
// import d2vLogo from "../assets/D2V-LOGO.png";

function Navbar({ handleLoginModalOpen, menuOpen, toggleMenu }) {

  return (
    <nav className="master-navbar">
      <div className="nav-logo">
        <h1>D2V LABS</h1>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <div className="link">
          <button className="nav-buttons" onClick={handleLoginModalOpen}>
            <span>Login</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Sign Up</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Projects</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;