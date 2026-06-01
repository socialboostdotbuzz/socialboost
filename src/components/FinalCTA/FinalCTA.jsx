import reviewIcon from "../../assets/cta/review.webp";
import heartIcon from "../../assets/cta/heart.webp";
import userIcon from "../../assets/contact/user-icon.webp";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta-section">

      <div className="cta-top-wave"></div>

      <img
        src={reviewIcon}
        alt=""
        className="cta-review-icon"
      />

      <img
        src={heartIcon}
        alt=""
        className="cta-heart-left"
      />

      <img
        src={heartIcon}
        alt=""
        className="cta-heart-right"
      />

      <img
        src={userIcon}
        alt=""
        className="cta-user-icon"
      />

      <div className="cta-content">

        <h2>
          READY TO
          <span> ELEVATE </span>
          YOUR SOCIAL
          <br />
          MEDIA MARKETING?
        </h2>

        <div className="cta-cards">

          <div className="cta-card">
            <h3>
              LET’S DISCUSS YOUR SOCIAL
              MEDIA GOALS
            </h3>

            <p>
              Schedule a Free Consultation Call
            </p>
          </div>

          <div className="cta-card">
            <h3>
              GET A PERSONALIZED SOCIAL
              MARKETING PROPOSAL
            </h3>

            <p>
              Tell Us About Your Business Needs
            </p>
          </div>

        </div>

        <a
          href="#proposal-form"
          className="cta-button"
        >
          BOOK YOUR STRATEGY CALL
        </a>

      </div>

      <div className="cta-bottom-wave"></div>

    </section>
  );
}

export default FinalCTA;