import conexpoLogo from "../../assets/brand-slider/conexpo_logo.webp";
import dicksLogo from "../../assets/brand-slider/dicks_logo.webp";
import edibleLogo from "../../assets/brand-slider/edible-arrangements_logo.webp";
import floorDecorLogo from "../../assets/brand-slider/floor_decor_logo.webp";
import imprintLogo from "../../assets/brand-slider/imprint_logo.webp";
import moesLogo from "../../assets/brand-slider/moes_bbq_logo.webp";
import netappLogo from "../../assets/brand-slider/netapp_logo.webp";
import nexansLogo from "../../assets/brand-slider/Nexans_logo.webp";
import nikonLogo from "../../assets/brand-slider/nikon_logo.webp";
import paccarLogo from "../../assets/brand-slider/paccar_logo.webp";
import performanceLogo from "../../assets/brand-slider/performance_health__logo.webp";
import premiumGuardLogo from "../../assets/brand-slider/premium_guard_logo.webp";
import riskiqLogo from "../../assets/brand-slider/riskiq_logo.webp";
import runwayRogueLogo from "../../assets/brand-slider/runwayrogue_logo.webp";
import takaraLogo from "../../assets/brand-slider/TaKaRa_logo.webp";

import "./BrandSlider.css";

const brands = [
  conexpoLogo,
  dicksLogo,
  edibleLogo,
  floorDecorLogo,
  imprintLogo,
  moesLogo,
  netappLogo,
  nexansLogo,
  nikonLogo,
  paccarLogo,
  performanceLogo,
  premiumGuardLogo,
  riskiqLogo,
  runwayRogueLogo,
  takaraLogo,
];

function BrandSlider() {
  return (
    <section className="brand-slider-section">
      

      <div className="brand-slider">
        <div className="brand-track">
          {[...brands, ...brands].map((logo, index) => (
            <div className="brand-logo-item" key={index}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;