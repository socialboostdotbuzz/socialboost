import rocket from "../../assets/process/rocket.svg";
import "./Process.css";

const processSteps = [
  { number: "1", title: "Discovery & Strategy Development" },
  { number: "2", title: "Content Creation & Campaign Setup" },
  { number: "3", title: "Execution & Community Management" },
  { number: "4", title: "Performance Monitoring & Optimization" },
];

const loopSteps = [...processSteps, ...processSteps, ...processSteps];

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-top-wave"></div>
      <div className="process-dots"></div>

      <div className="process-heading">
        <h2>
          <span>OUR PROVEN PROCESS:</span> HOW WE
          <br />
          DELIVER SOCIAL MEDIA SUCCESS
        </h2>
      </div>

      <div className="process-window">
        <div className="process-track">
          {loopSteps.map((step, index) => (
            <div className="process-card" key={`${step.number}-${index}`}>
              <div className="step-number">STEP {step.number}</div>
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        <div className="timeline-moving">
          {loopSteps.map((step, index) => (
            <span className="timeline-dot" key={`dot-${step.number}-${index}`} />
          ))}
        </div>
      </div>

      <div className="rocket-wrap">
        <img src={rocket} alt="" className="process-rocket" />
      </div>

      <div className="process-bottom-wave"></div>
    </section>
  );
}

export default Process;