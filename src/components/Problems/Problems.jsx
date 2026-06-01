import magnetIcon from "../../assets/problems/magnet.svg";
import upsdownsIcon from "../../assets/problems/upsdowns.svg";
import graphIcon from "../../assets/problems/graph.svg";
import bulbIcon from "../../assets/problems/bulb.svg";

import "./Problems.css";

const problems = [
  {
    icon: magnetIcon,
    title: "No leads from social media?",
  },
  {
    icon: upsdownsIcon,
    title: "Posting daily but no growth?",
  },
  {
    icon: graphIcon,
    title: "Unsure how to measure ROI?",
  },
  {
    icon: bulbIcon,
    title: "Need better content ideas?",
  },
];

function Problems() {
  return (
    <section className="problems-section">
      <h2>Tired Of Social Media Efforts That Don’t Deliver?</h2>

      <div className="problem-grid">
        {problems.map((problem, index) => (
          <div className="problem-card" key={index}>
            <img
              src={problem.icon}
              alt=""
              className="problem-icon-img"
            />

            <h3>{problem.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problems;