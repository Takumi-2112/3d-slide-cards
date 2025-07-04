import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const projects = ["Wintermute", "SimStim", "Molly Protocol", "Flatline"];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = carouselRef.current;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(index);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="master-projects">
      <h1 className="projects-title">Our Projects</h1>
      <div className="carousel-container" ref={carouselRef}>
        {projects.map((name, i) => (
          <div className="carousel-slide" key={name}>
            <div className="project">
              <div className="project-image">
                <i className="fa-solid fa-image"></i>
              </div>
              <div className="project-title-description">
                <h2 className="project-name">{name}</h2>
                <p className="project-description">Description of Project One.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

