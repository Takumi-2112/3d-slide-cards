import "../styles/Hero.css";
import { Link } from "react-router-dom";
import d2vLogo from "../assets/d2v-logo.png";

function Hero() {
  return (
    <div className="master-hero">
      <div className="hero-logo">
        <img classname="d2v-hero" src={d2vLogo} alt="" />
      </div>
      <h1 className="hero-title-statement">
        Building tools for an automated tomorrow
      </h1>
    </div>
  );
}
export default Hero;
