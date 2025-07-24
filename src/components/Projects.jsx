import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const projects = ["Wintermute", "Flatline"];
  const projectDescriptions = [
    "Wintermute is a local, low-code/no-code generative AI system that automates and streamlines complex data tasks within highly regulated or air-gapped environments, operating fully offline to guarantee data privacy and regulatory compliance.",
    "Flatline is a next-generation user interface designed to facilitate dynamic interaction and idea synthesis with large language models (LLMs). Rather than treating conversations as linear chat threads, it enables users to navigate and explore dialogue as an interactive, evolving knowledge space—unlocking deeper insights and more fluid collaboration.",
  ];

  const iconClassesArray = [
    "fa-solid fa-spaghetti-monster-flying",
    "fa-solid fa-robot",
    "fa-solid fa-ghost",
    "fa-solid fa-shuttle-space",
  ];

  const [slots, setSlots] = useState(
    projects.map(() => Array(3).fill("fa-solid fa-robot"))
  );

  const shuffleIntervals = useRef([]);
  const [showDescription, setShowDescription] = useState(
    projects.map(() => false)
  );

  const startShuffle = (projectIndex) => {
    // Clear any existing interval for this project
    if (shuffleIntervals.current[projectIndex]) {
      clearInterval(shuffleIntervals.current[projectIndex]);
    }

    // Reset description visibility and slots
    setShowDescription((prev) =>
      prev.map((val, i) => (i === projectIndex ? false : val))
    );
    setSlots((prev) =>
      prev.map((slot, i) =>
        i === projectIndex ? Array(3).fill("fa-solid fa-robot") : slot
      )
    );

    let count = 0;
    const interval = setInterval(() => {
      setSlots((prev) =>
        prev.map((slotIcons, i) =>
          i === projectIndex
            ? slotIcons.map(
                () =>
                  iconClassesArray[
                    Math.floor(Math.random() * iconClassesArray.length)
                  ]
              )
            : slotIcons
        )
      );
      count += 1;
      if (count >= 15) {
        clearInterval(interval);
        shuffleIntervals.current[projectIndex] = null;

        setTimeout(() => {
          setShowDescription((prev) =>
            prev.map((val, i) => (i === projectIndex ? true : val))
          );
        }, 150);
      }
    }, 150);

    shuffleIntervals.current[projectIndex] = interval;
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            startShuffle(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const elements = document.querySelectorAll(".project");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      // Clean up all intervals on unmount
      shuffleIntervals.current.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <div className="master-projects">
      <h1 className="projects-title">Our Projects</h1>
      <div className="carousel-container" ref={carouselRef}>
        {projects.map((name, i) => (
          <div className="carousel-slide" key={name}>
            <div className="project" data-index={i}>
              <div className="project-image">
                {showDescription[i] ? (
                  <div className="project-content">
                    <h2 className="project-name fade-in-text">{name}</h2>
                    <p
                      className="project-text fade-in-text"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {projectDescriptions[i]}
                    </p>
                  </div>
                ) : (
                  <div className="slot-machine">
                    {slots[i].map((icon, idx) => (
                      <i key={idx} className={icon}></i>
                    ))}
                  </div>
                )}
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
