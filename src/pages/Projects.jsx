import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="master-projects">
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <h1 className="projects-title">Our Projects</h1>
      <div className="projects-content-container">
        <div className="project one">
          <h2 className="project-name">Wintermute</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project two">
          <h2 className="project-name">SimStim</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project three">
          <h2 className="project-name">Molly Protocol</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project four">
          <h2 className="project-name">Flatline</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
      </div>
    </div>
  );
}
