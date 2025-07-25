import "../styles/Hero.css";
import { Link } from "react-router-dom";
import d2vLogo from "../assets/d2v-logo.png";

function Hero() {
  return (
    <div className="master-hero">
      <div className="title-case">
        <div className="hero-logo">
          <img className="d2v-hero" src={d2vLogo} alt="" />
        </div>
        <h1 className="hero-title-statement">
          TOOLS FOR AN AUTOMATED TOMORROW
        </h1>
      </div>
      <h2>
        We help build, fund, and scale AI-powered solutions for Industry 4.0.
      </h2>
    </div>
  );
}
export default Hero;
