import card1 from "../../assets/benefits/card1.webp";
import card2 from "../../assets/benefits/card2.webp";
import card3 from "../../assets/benefits/card3.webp";
import card4 from "../../assets/benefits/card4.webp";

import "./Benefits.css";

const portfolioCards = [
  {
    title: "Tender Slider Thursday",
    image: card1,
  },
  {
    title: "Dick's Sporting Goods Campaign",
    image: card2,
  },
  {
    title: "A3C Campaign",
    image: card3,
  },
  {
    title: "Baseball Campaign",
    image: card4,
  },
];

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-inner">
        <h2>
          Social Boost Delivers Strategic Social
          <br />
          Marketing That Converts
        </h2>

        <div className="benefit-points">
          <p>
            <span>Data-driven strategies</span> tailored to your
            <br />
            goals
          </p>

          <p>
            <span>Expert execution</span> across all major
            <br />
            platforms
          </p>

          <p>
            <span>Transparent reporting</span> focused on key
            <br />
            business metrics
          </p>
        </div>
      </div>

      <div className="portfolio-strip">
        <div className="portfolio-track">
          {[...portfolioCards, ...portfolioCards, ...portfolioCards].map(
            (card, index) => (
              <div className="portfolio-card" key={`${card.title}-${index}`}>
                <img src={card.image} alt={card.title} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Benefits;