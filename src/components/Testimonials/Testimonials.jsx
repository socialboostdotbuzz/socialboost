import "./Testimonials.css";
import quotesImg from "../../assets/images/quotes.webp";
import npsLogo from "../../assets/images/testimonials/nps.webp";
import frasleLogo from "../../assets/images/testimonials/frasle.webp";
import aemLogo from "../../assets/images/testimonials/aem.webp";
import creditRepairLogo from "../../assets/images/testimonials/creditrepair.webp";

const testimonials = [
  {
    logo: npsLogo,
    quote: "So far we’ve seen strong growth across our sites and platforms. Our project manager was fantastic, timely, professional, and always available to meet our needs. Social Boost’s custom approach helped us create solutions that worked very well.",
    name: "Amanda Hammond",
    company: "National Park Service",
  },
  {
    logo: frasleLogo,
    quote: "Social Boost’s project management is great. Everything is highly organized and communication is smooth. Their team is prompt, responsive, and always helps us keep projects moving forward.",
    name: "Julia Grupa",
    company: "Fras-le",
  },
  {
    logo: aemLogo,
    quote: "We’ve seen significant growth on our social media channels. Our followers increased, engagement improved, and our accounts have seen similar growth across multiple platforms.",
    name: "Jordanne Waldschmidt",
    company: "Association of Equipment Manufacturers",
  },
  {
    logo: creditRepairLogo,
    quote: "Social Boost has helped us push our videos to the most recommended audience. They understand our needs, coordinate clearly, and meet regularly to keep everything on track.",
    name: "Claudia Gebhardt",
    company: "Inverness Dermatology",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-top">
        <h2>What Our Clients Say</h2>
        <button>See More</button>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="testimonial-logo">
  <img src={item.logo} alt={item.company} />
</div>
            <img
  src={quotesImg}
  alt="Quote"
  className="quote-mark"
/>

            <p>{item.quote}</p>

            <div className="testimonial-person">
              <h3>{item.name}</h3>
              <span>{item.company}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonial-dots"></div>
    </section>
  );
}

export default Testimonials;