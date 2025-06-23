import { useState } from "react";
import { ThreeDMarqueeDemo as ThreeDMarquee } from "./ThreeDMarquee";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./pages/PRojects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="master-app bg-black w-screen overflow-x-hidden">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {/* <ThreeDMarquee /> */}
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
