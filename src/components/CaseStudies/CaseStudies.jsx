import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "./CaseStudies.css";

const caseStudies = [
  {
    logo: "ANGOSTURA",
    title: "Angostura",
    text: "Recipe for success? Global strategy, thumb-stopping content, and measurable results shaken, not stirred...",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900",
  },
  {
    logo: "CONEXPO CON/AGG",
    title: "Conexpo",
    text: "Leveraged past data to craft a strong posting schedule for this construction brand...",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900",
  },
  {
    logo: "ANGI",
    title: "Angi",
    text: "Reached homeowners by producing helpful short-form content and performance-led campaigns...",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900",
  },
  {
    logo: "SNOW BRAND",
    title: "Winter Gear",
    text: "Built seasonal content and targeted ad creatives for stronger product discovery...",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900",
  },
  {
    logo: "FIRST TRADE",
    title: "First Trade",
    text: "Improved brand engagement through sharp creative, clear messaging and consistent campaign testing...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900",
  },
  {
    logo: "STYLE HUB",
    title: "Style Hub",
    text: "Developed a visual-first social presence designed to increase reach, saves and shopping interest...",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900",
  },
  {
    logo: "URBAN CAFE",
    title: "Urban Cafe",
    text: "Created local-first creative assets that increased walk-ins, enquiries and repeat engagement...",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900",
  },
  {
    logo: "MEDPLUS",
    title: "Medplus",
    text: "Built trust-led educational content with clean visuals and conversion-focused ad messaging...",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900",
  },
];

function CaseStudies() {
  const [active, setActive] = useState(1);

  const movePrev = () => {
    setActive((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const moveNext = () => {
    setActive((prev) => (prev + 1) % caseStudies.length);
  };

  const getCardClass = (index) => {
    const total = caseStudies.length;
    const diff = (index - active + total) % total;

    if (diff === 0) return "case-card active";
    if (diff === 1) return "case-card right-one";
    if (diff === 2) return "case-card right-two";
    if (diff === total - 1) return "case-card left-one";
    if (diff === total - 2) return "case-card left-two";

    return "case-card hidden";
  };

  return (
    <section id="work" className="case-studies-section">
      <div className="case-top">
        <h2>Real Results: See How We Drive Growth For Brands Like Yours</h2>

        <button>Explore More Case Studies</button>
      </div>

      <div className="case-stage">
        {caseStudies.map((item, index) => (
          <article className={getCardClass(index)} key={item.title}>
            <div className="case-logo">{item.logo}</div>

            <img src={item.image} alt={item.title} />

            <div className="case-info">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="case-controls">
        <button onClick={movePrev} aria-label="Previous case study">
          <FaArrowLeft />
        </button>

        <button onClick={moveNext} aria-label="Next case study">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default CaseStudies;