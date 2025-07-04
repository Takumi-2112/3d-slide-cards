import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach(project => {
      if (project) observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach(project => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <div className="master-projects">
      <h1 className="projects-title">Our Projects</h1>
      <div className="projects-content-container">
        {["Wintermute", "SimStim", "Molly Protocol", "Flatline"].map((name, i) => (
          <div
            className="project"
            key={name}
            ref={el => (projectRefs.current[i] = el)}
          >
            <div className="project-image">
              <i className="fa-solid fa-image"></i>
            </div>
            <div className="project-title-description">
              <h2 className="project-name">{name}</h2>
              <p className="project-description">Description of Project One.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
