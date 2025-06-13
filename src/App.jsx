import { useState } from "react";
import { ThreeDMarqueeDemo as ThreeDMarquee } from "./ThreeDMarquee";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="master-app bg-black w-screen">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <ThreeDMarquee />
    </div>
  );
}

export default App;
