import { useState } from "react";
import { ThreeDMarqueeDemo as ThreeDMarquee } from "./ThreeDMarquee";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="master-app bg-black w-screen overflow-x-hidden">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <ThreeDMarquee />
      <section className="hero-section"> 
        <Hero />
      </section>
      
    </div>
  );
}

export default App;
