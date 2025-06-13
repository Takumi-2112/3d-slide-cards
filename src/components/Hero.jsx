import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="master-hero">
      <h1 className="hero-title">D2V LABS</h1>
      <h3 className="hero-title-statement">
        The Genesis of AI-Powered Innovation
      </h3>
      <Link to={"/projects"}>
        <button className="hero-button">
          Explore our projects
          <i className="fa-solid fa-arrow-right hero-arrow"></i>
        </button>
      </Link>
    </div>
  );
}
export default Hero;
