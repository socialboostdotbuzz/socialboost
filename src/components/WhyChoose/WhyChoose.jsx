import "./WhyChoose.css";

const whyCards = [
  {
    title: "Our Unique Approach: Strategy First, Results Obsessed",
    points: [
      "Deep Dive Discovery & Goal Alignment",
      "Customized Strategies, Not Cookie-Cutter Plans",
      "Continuous Optimization Based on Data",
    ],
  },
  {
    title: "Your Dedicated Team Of Social Media Experts",
    points: [
      "Experienced Strategists, Creatives, and Ad Specialists",
      "Proactive Communication and Collaboration",
    ],
  },
];

function WhyChoose() {
  return (
    <section className="why-choose-section">
      <div className="why-inner">
        <h2>
          Why Choose Social Boost As Your
          <br />
          Social Marketing Agency <span>Partner?</span>
        </h2>

        <p className="why-subtitle">
          Decades of data. Millions in spend. Insights you can’t Google.
        </p>

        <div className="why-card-grid">
          {whyCards.map((card) => (
            <div className="why-card" key={card.title}>
              <h3>{card.title}</h3>

              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;