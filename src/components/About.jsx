import "../styles/About.css";

function About() {
  return (
    <div className="master-about">
      <div className="what-we-do">
        <h2 className="wwo-title">Straight to the Point</h2>
        <div className="advantage-div">
          <div className="advantage">
            <span className="advantage-title">Build Faster and Smarter</span>
            <p>
              We plug you into a world-class ecosystem of AI tools and cloud
              infrastructure. Our hands-on team helps you architect a scalable
              solution efficiently, cutting your setup time and letting you
              leverage powerful resources without the waste. The goal is simple:
              get your product to market quickly and be ready for scale.
            </p>
          </div>
          <div className="advantage">
            <span className="advantage-title">Smart Capital Access</span>
            <p>
              Any capital is good, but smart capital is game-changing. We
              connect you with our trusted network of investors and partners who
              provide not just funding, but the crucial industry expertise and
              collaborative opportunities to truly propel forward.
            </p>
          </div>
          <div className="advantage">
            <span className="advantage-title">Real-World Validation</span>
            {/* <p>
              The real test happens outside the lab. We provide the frameworks
              for massive scale and, more importantly, access to the live
              customer environments needed for critical testing. Your innovation
              gets battle-tested and validated in the real world, ensuring it
              makes an impact from day one.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
