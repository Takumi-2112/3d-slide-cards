import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

import icon1 from "../assets/icons/1.svg";
import icon2 from "../assets/icons/2.svg";
import icon3 from "../assets/icons/3.svg";
import icon4 from "../assets/icons/4.svg";
import icon5 from "../assets/icons/5.svg";
import icon6 from "../assets/icons/6.svg";
import icon7 from "../assets/icons/7.svg";
import icon8 from "../assets/icons/8.svg";
import icon9 from "../assets/icons/9.svg";
import icon10 from "../assets/icons/10.svg";
import icon11 from "../assets/icons/11.svg";
import icon12 from "../assets/icons/12.svg";
import icon13 from "../assets/icons/13.svg";
import icon14 from "../assets/icons/14.svg";
import icon15 from "../assets/icons/15.svg";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const projects = ["Wintermute", "Flatline"];
  const projectDescriptions = [
    "Wintermute is a local, low-code/no-code generative AI system that automates and streamlines complex data tasks within highly regulated or air-gapped environments, operating fully offline to guarantee data privacy and regulatory compliance.",
    "Flatline is a next-generation user interface designed to facilitate dynamic interaction and idea synthesis with large language models (LLMs). Rather than treating conversations as linear chat threads, it enables users to navigate and explore dialogue as an interactive, evolving knowledge space—unlocking deeper insights and more fluid collaboration.",
  ];

  // ✅ Use imported SVGs
  const iconArray = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
  ];

  const [slots, setSlots] = useState(
    projects.map(() => Array(3).fill(icon1)) 
  );

  const shuffleIntervals = useRef([]);
  const [showDescription, setShowDescription] = useState(
    projects.map(() => false)
  );

  const startShuffle = (projectIndex) => {
    if (shuffleIntervals.current[projectIndex]) {
      clearInterval(shuffleIntervals.current[projectIndex]);
    }

    setShowDescription((prev) =>
      prev.map((val, i) => (i === projectIndex ? false : val))
    );
    setSlots((prev) =>
      prev.map((slot, i) => (i === projectIndex ? Array(3).fill(icon1) : slot))
    );

    let count = 0;
    const interval = setInterval(() => {
      setSlots((prev) =>
        prev.map((slotIcons, i) =>
          i === projectIndex
            ? slotIcons.map(
                () => iconArray[Math.floor(Math.random() * iconArray.length)]
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
    }, 250);

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
      shuffleIntervals.current.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <div className="master-projects">
      <h1 className="projects-title">Current Projects</h1>
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
                      <img
                        key={idx}
                        src={icon}
                        alt="icon"
                        className="slot-icon"
                      />
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
