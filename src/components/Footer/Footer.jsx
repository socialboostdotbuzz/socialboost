import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa6";

import checklistImg from "../../assets/footer/checklist.webp";
import googlePartner from "../../assets/footer/google_partner.webp";
import linkedinPartner from "../../assets/footer/linkedin_partner.webp";
import locationIcon from "../../assets/footer/location.png";
import metaPartner from "../../assets/footer/meta_partner.webp";
import pinterestPartner from "../../assets/footer/pinterest_partner.webp";
import redditPartner from "../../assets/footer/reddit_partner.webp";
import tiktokMarketingPartner from "../../assets/footer/tiktok_marketing_partner.webp";
import tiktokShopPartner from "../../assets/footer/tiktok_shop_partner.webp";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-address">
          <div className="footer-location-icon">
            <img src={locationIcon} alt="" />
          </div>

          <div>
            <h3>Social Boost: The Social Media Agency</h3>
            <p>
              Suite 1204, Prestige Trade Tower,
              <br />
              Bengaluru, Karnataka 560001
              <br />
              +91 91234 56789
            </p>
          </div>
        </div>

        <div className="footer-column">
          <h4>Agency</h4>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#resources">Resources</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <a href="#services">Social Media Strategy</a>
          <a href="#services">Social Media Management</a>
          <a href="#services">Community Management & Listening</a>
          <a href="#services">Social Content Production</a>
          <a href="#services">Paid Social Advertising</a>
          <a href="#services">Influencer Marketing</a>
          <a href="#services">Data Analysis ROI Modeling</a>
          <a href="#services">Social Media Consulting</a>
          <a href="#services">Outbound Engagement</a>
          <a href="#services">Social Selling</a>
          <a href="#services">Reddit Marketing Agency</a>
        </div>
      </div>

      <div className="newsletter-card">
        <div className="newsletter-content">
          <h2>
            Join 10,000+ Marketers Getting
            <br />
            Ahead On Social. Subscribe Now.
          </h2>

          <form className="newsletter-form">
            <label>
              Email Address*
              <input type="email" placeholder="Email" />
            </label>

            <button type="submit">Subscribe To Newsletter</button>
          </form>
        </div>

        <div className="newsletter-icon">
          <img src={checklistImg} alt="" />
        </div>
      </div>

      <div className="footer-social">
        <h2>Get In Touch</h2>
        <p>But only if you’re ready to turn clicks into clients.</p>

        <div className="social-icons">
          <a className="linkedin" href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="facebook" href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a className="twitter" href="#" aria-label="X">
            <FaXTwitter />
          </a>
          <a className="pinterest" href="#" aria-label="Pinterest">
            <FaPinterestP />
          </a>
          <a className="youtube" href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a className="tiktok" href="#" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a className="instagram" href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a className="reddit" href="#" aria-label="Reddit">
            <FaRedditAlien />
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="partner-badges">
        <img src={googlePartner} alt="Google Partner" />
        <img src={tiktokShopPartner} alt="TikTok Shop Partner" />
        <img src={tiktokMarketingPartner} alt="TikTok Marketing Partner" />
        <img src={metaPartner} alt="Meta Business Partner" />
        <img src={redditPartner} alt="Reddit Marketing Partner" />
        <img src={linkedinPartner} alt="LinkedIn Marketing Partner" />
        <img src={pinterestPartner} alt="Pinterest Partner" />
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Social Boost. All rights reserved.</p>

        <div>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;