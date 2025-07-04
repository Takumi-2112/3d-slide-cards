import { useState } from "react";
import { ThreeDMarqueeDemo as ThreeDMarquee } from "./ThreeDMarquee";
import "./index.css";
import "./styles/HeroProject.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="master-app bg-black w-screen overflow-x-hidden">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="hero-project-container">
        <Hero />
        <Projects />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
