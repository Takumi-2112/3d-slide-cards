import "../styles/About.css";

function About() {
  return (
    <div className="master-about">
      <div className="mission-statement">
        {/* <h1 className="about-title">About D2V Labs</h1> */}
        <p className="mission-text">
          D2V Labs partners with founders to build, fund, and scale innovative
          AI powered solutions for Industry 4.0. Our framework gives technical
          leaders the strategic and operational resources required to translate
          their concepts into viable, high-growth businesses.
        </p>
      </div>

      <div className="what-we-do">
        <h2 className="wwo-title">OUR UNFAIR ADVANTAGE</h2>
        <ul className="offerings-list">
          <li>
            Build faster and smarter. We plug you into a world-class ecosystem
            of AI tools and cloud infrastructure. Our hands-on team helps you
            architect a scalable solution efficiently, cutting your setup time
            and letting you leverage powerful resources without the waste. The
            goal is simple: get your product to market quickly and be ready for
            scale.
          </li>
          <li>
            Any capital is good, but smart capital is game-changing. We connect
            you with our trusted network of investors and partners who provide
            not just funding, but the crucial industry expertise and
            collaborative opportunities to truly propel forward.
          </li>
          <li>
            The real test happens outside the lab. We provide the frameworks for
            massive scale and, more importantly, access to the live customer
            environments needed for critical testing. Your innovation gets
            battle-tested and validated in the real world, ensuring it makes an
            impact from day one.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
