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
          <button className="nav-buttons" onClick={handleLoginModalOpen}>
            <span>Login</span>
          </button>
        </div>
        <div className="link">
          <button className="nav-buttons">
            <span>Sign Up</span>
          </button>
        </div>
        {/* <div className="link">
          <button className="nav-buttons">
            <Link to={"/projects"}>
              <span>Projects</span>
            </Link>
          </button>
        </div> */}
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
