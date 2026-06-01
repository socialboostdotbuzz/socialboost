import { useState } from "react";
import partnershipImg from "../../assets/images/partnership.jpg";
import targetImg from "../../assets/images/target.webp";
import "./Partnership.css";

const accordionItems = [
  {
    title: "Flexible Solutions Tailored To Your Needs",
    points: [
      "Custom Packages Based on Scope and Goals",
      "Retainer, Project-Based, and Consulting Options",
    ],
  },
  {
    title: "Transparent Pricing Focused On Value",
    points: [
      "Clear Monthly Deliverables",
      "No Hidden Charges",
      "Plans Built Around Business Growth",
    ],
  },
];

function Partnership() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="partnership-section">
      <div className="partnership-bg-lines"></div>

      <div className="partnership-inner">
        <div className="partnership-image-wrap">
          <img src={partnershipImg} alt="Social Boost partnership planning" />
          <img src={targetImg} alt="" className="target-img" />
        </div>

        <div className="partnership-content">
          <h2>
            Understanding Our
            <br />
            Partnership Models
            <br />& Investment
          </h2>

          <div className="partnership-accordion">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div className={`partner-item ${isOpen ? "active" : ""}`} key={item.title}>
                  <button type="button" onClick={() => toggleItem(index)}>
                    <span>{item.title}</span>
                    <strong>{isOpen ? "−" : "+"}</strong>
                  </button>

                  {isOpen && (
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <a href="#proposal-form" className="partner-cta">
            Request Your Custom Proposal
          </a>
        </div>
      </div>
    </section>
  );
}

export default Partnership;