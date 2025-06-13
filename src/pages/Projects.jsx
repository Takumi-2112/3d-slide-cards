import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="master-projects">
      <Navbar />
      <h1 className="projects-title">Our Projects</h1>
      <div className="projects-content-container">
        <div className="project one">
          <h2 className="project-name">Project One</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project two">
          <h2 className="project-name">Project Two</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project three">
          <h2 className="project-name">Project Three</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project four">
          <h2 className="project-name">Project Four</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project five">
          <h2 className="project-name">Project Five</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
        <div className="project six">
          <h2 className="project-name">Project Six</h2>
          <p className="project-description">Description of Project One.</p>
        </div>
      </div>
    </div>
  );
}
