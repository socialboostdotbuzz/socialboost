import Navbar from "./components/Navbar/Navbar";
import BrandSlider from "./components/BrandSlider/BrandSlider";
import Problems from "./components/Problems/Problems";
import Benefits from "./components/Benefits/Benefits";
import Services from "./components/Services/Services";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import CreatorCTA from "./components/CreatorCTA/CreatorCTA";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Testimonials from "./components/Testimonials/Testimonials";
import Process from "./components/Process/Process";
import Partnership from "./components/Partnership/Partnership";
import TrustedBrands from "./components/TrustedBrands/TrustedBrands";
import ContactForm from "./components/ContactForm/ContactForm";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";

import phoneFrame from "./assets/creator/phoneframe.svg";
import heroVideo from "./assets/hero/videoframe.mp4";

import "./index.css";

function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("proposal-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Navbar scrollToForm={scrollToForm} />

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Your Results-Driven <span>Social Media</span> Agency For Measurable
            Growth
          </h1>

          <p>
            <strong>Stop Guessing, Start Growing:</strong> Partner with Social
            Boost, a digital marketing agency focused on leads, content and
            business growth.
          </p>

          <button onClick={scrollToForm} className="hero-btn">
            Let’s Drive Growth Together
          </button>
        </div>

        <div className="hero-visual">
          <div className="hero-blue-blob"></div>

          <div className="hero-phone-wrap">
            <div className="hero-phone-video-wrap">
              <video
                className="hero-phone-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>

            <img src={phoneFrame} alt="" className="hero-phone-frame" />
          </div>
        </div>
      </section>

      <BrandSlider />
      <Problems />
      <Benefits />
      <Services />
      <CaseStudies />
      <CreatorCTA />
      <WhyChoose />
      <Testimonials />
      <Process />
      <Partnership />
      <TrustedBrands />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;