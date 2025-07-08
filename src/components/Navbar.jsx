import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import d2vLogo from "../assets/d2v-logo.png";

function Navbar({ handleLoginModalOpen, menuOpen, toggleMenu }) {
  return (
    <nav className="master-navbar">
      <div className="nav-logo">
        <img className="d2v-nav" src={d2vLogo} alt="" />
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <div className="link">
          <a href="mailto:info@d2vlabs.com">
          <button className="nav-buttons">
            <span>Contact</span>
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
