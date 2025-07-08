import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const projects = ["Wintermute", "SimStim", "Molly Protocol", "Flatline"];

  const iconClassesArray = [
    "fa-solid fa-spaghetti-monster-flying", // free
    // "fa-solid fa-alien-8bit",
    "fa-solid fa-skull", // free
    "fa-solid fa-skull-crossbones", // free
    // "fa-solid fa-alien",
    // "fa-solid fa-hydra",
    "fa-solid fa-robot", // free
    "fa-solid fa-ghost", // free
    // "fa-solid fa-ufo",
    // "fa-solid fa-raygun",
    // "fa-solid fa-planet-ringed",
    // "fa-solid fa-atom-simple",
    // "fa-solid fa-cat-space",
    // "fa-solid fa-rocket-launch",
    // "fa-solid fa-sword",
    // "fa-solid fa-dinosaur",
    // "fa-solid fa-t-rex",
    "fa-solid fa-shuttle-space", // free
  ];

  const [slots, setSlots] = useState(
    projects.map(() => Array(4).fill("fa-robot"))
  );
  const shuffleIntervals = useRef([]);
  const hasAnimated = useRef(projects.map(() => false));

  const startShuffle = (projectIndex) => {
    if (shuffleIntervals.current[projectIndex]) return;

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
      }
    }, 100);

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
    const cooldowns = Array(projects.length).fill(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !cooldowns[index]) {
            cooldowns[index] = true;
            startShuffle(index);

            // Add a cooldown to prevent retriggering too quickly
            setTimeout(() => {
              cooldowns[index] = false;
            }, 2000); // 2 seconds cooldown before it can retrigger
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
                <div className="slot-machine">
                  {slots[i].map((icon, idx) => (
                    <i key={idx} className={icon}></i>
                  ))}
                </div>
              </div>
              <div className="project-title-description">
                <h2 className="project-name">{name}</h2>
                <p className="project-description">
                  Description of Project One.
                </p>
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
