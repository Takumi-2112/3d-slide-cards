import "../styles/About.css";

function About() {
  return (
    <div className="master-about">
      <div className="mission-statement">
        <h1 className="about-title">About D2V Labs</h1>
        <p className="mission-text">
          D2V Labs is an AI incubation factory built to empower the next
          generation of technical founders. We provide the mentorship,
          infrastructure, and execution playbooks young teams need to turn bold
          ideas into validated, scalable ventures.

          Our mission is to accelerate the journey from vision to reality for
          builders shaping tomorrow's AI economy.
        </p>
      </div>

      <div className="what-we-do">
        <h2 className="wwo-title">What We Offer</h2>
        <ul className="offerings-list">
          <li>-  Hands-on mentorship from industry veterans</li>
          <li>-  State-of-the-art AI development infrastructure</li>
          <li>-  Proven execution frameworks for rapid scaling</li>
          <li>-  Network of partners and investors</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
