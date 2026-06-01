import elementLap from "../../assets/creator/element_lap.webp";
import notepad from "../../assets/creator/notepad.webp";
import tiktokOverlay from "../../assets/creator/tiktok-overlay_2.png";
import creatorVideo from "../../assets/creator/creator-reel.mp4";
import "./CreatorCTA.css";


function CreatorCTA() {
  return (
    <section className="creator-cta-section">
      <div className="creator-marquee">
        <div className="creator-marquee-track">
          <span>ARE YOU IN? 🤝</span>
          <span>ARE YOU IN? 🤝</span>
          <span>ARE YOU IN? 🤝</span>
          <span>ARE YOU IN? 🤝</span>
          <span>ARE YOU IN? 🤝</span>
          <span>ARE YOU IN? 🤝</span>
        </div>
      </div>

      <div className="creator-blue-area">
        <div className="creator-wave"></div>

        <img src={elementLap} alt="" className="creator-laptop" />
        <img src={notepad} alt="" className="creator-notepad" />

        <div className="reel-phone">
          <video
    className="creator-video"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src={creatorVideo} type="video/mp4" />
  </video>

  <img
    src={tiktokOverlay}
    alt=""
    className="tiktok-overlay"
  />
        </div>
      </div>
    </section>
  );
}

export default CreatorCTA;