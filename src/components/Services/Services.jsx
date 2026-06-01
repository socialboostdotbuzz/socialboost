import bulbIcon from "../../assets/services/bulb.webp";
import flashlightIcon from "../../assets/services/flashlight.webp";
import ideaIcon from "../../assets/services/idea.webp";
import moneyIcon from "../../assets/services/moneyinhand.webp";
import targetIcon from "../../assets/services/bluetarget.webp";
import mailIcon from "../../assets/services/mailicon.webp";

import "./Services.css";

const services = [
  {
    icon: bulbIcon,
    title: "Social Media Strategy & Consulting",
    points: [
      "Building Your Roadmap for Social Success",
      "Competitor Analysis & Audience Insights",
      "Platform Selection & Content Pillars",
    ],
  },
  {
    icon: flashlightIcon,
    title: "Creative Content Production",
    points: [
      "Engaging Visuals & Copy That Resonates",
      "Video Production, Graphics & Photography",
      "Tailored Content for Each Platform",
    ],
  },
  {
    icon: ideaIcon,
    title: "Social Media Management & Community Engagement",
    points: [
      "Consistent Posting & Brand Voice Management",
      "Proactive Community Building & Interaction",
      "Reputation Monitoring & Management",
    ],
  },
  {
    icon: moneyIcon,
    title: "Paid Social Advertising Campaigns",
    points: [
      "Targeted Ad Campaigns for Leads & Sales",
      "Ad Creative Development & A/B Testing",
      "Budget Optimization & Performance Tracking",
    ],
  },
  {
    icon: targetIcon,
    title: "Influencer Marketing Programs",
    points: [
      "Connecting Your Brand with Authentic Voices",
      "Campaign Strategy & Influencer Vetting",
      "Performance Measurement & Reporting",
    ],
  },
  {
    icon: mailIcon,
    title: "Social Selling & Outbound Engagement",
    points: [
      "Leveraging Social for Direct Sales & Lead Gen",
      "Prospecting and Outreach Strategies",
      "Maintaining Consistent Executive Leadership",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-bg-pattern"></div>

      <h2>
        Our Comprehensive Social Media Marketing
        <span>Services</span>
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt="" className="service-icon-img" />

            <h3>{service.title}</h3>

            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="services-more">And more...</p>

      <button className="services-btn">See All Services</button>
    </section>
  );
}

export default Services;