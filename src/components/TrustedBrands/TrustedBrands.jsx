import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import brand1 from "../../assets/brands/brand-1.svg";
import brand2 from "../../assets/brands/brand-2.svg";
import brand3 from "../../assets/brands/brand-3.svg";

import firstradeLogo from "../../assets/brands/Firstrade-logo.webp";
import hitachiLogo from "../../assets/brands/Hitachi-logo.svg";
import nikonLogo from "../../assets/brands/nikon-svg.svg";
import runLogo from "../../assets/brands/run-logo.webp";
import samsungLogo from "../../assets/brands/samsung-logo-svg.svg";
import sgkLogo from "../../assets/brands/sgk-logo-3.webp";
import shokzLogo from "../../assets/brands/Shokz-logo.webp";
import takaraLogo from "../../assets/brands/takara-sake-logo.webp";
import unratedLogo from "../../assets/brands/Unrated-logo.webp";
import vanillaLogo from "../../assets/brands/VanillaGiftCards-logo.webp";

import "./TrustedBrands.css";

const brands = [
  {
    name: "Brand 1",
    logo: brand1,
  },
  {
    name: "Brand 2",
    logo: brand2,
  },
  {
    name: "Brand 3",
    logo: brand3,
  },
  {
    name: "Firstrade",
    logo: firstradeLogo,
  },
  {
    name: "Hitachi",
    logo: hitachiLogo,
  },
  {
    name: "Nikon",
    logo: nikonLogo,
  },
  {
    name: "Runway Rogue",
    logo: runLogo,
  },
  {
    name: "Samsung",
    logo: samsungLogo,
  },
  {
    name: "SGK Landscapes",
    logo: sgkLogo,
  },
  {
    name: "Shokz",
    logo: shokzLogo,
  },
  {
    name: "Takara Sake",
    logo: takaraLogo,
  },
  {
    name: "Unrated",
    logo: unratedLogo,
  },
  {
    name: "Vanilla Gift",
    logo: vanillaLogo,
  },
];

function TrustedBrands() {
  const [active, setActive] = useState(9);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % brands.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prevBrand = () => {
    setActive(
      (prev) => (prev - 1 + brands.length) % brands.length
    );
  };

  const nextBrand = () => {
    setActive(
      (prev) => (prev + 1) % brands.length
    );
  };

  const getVisibleBrands = () => {
    const left =
      (active - 1 + brands.length) %
      brands.length;

    const right =
      (active + 1) %
      brands.length;

    return [
      {
        ...brands[left],
        position: "side",
      },
      {
        ...brands[active],
        position: "active",
      },
      {
        ...brands[right],
        position: "side",
      },
    ];
  };

  return (
    <section className="trusted-brands-section">
      <h2>
        Trusted By <span>Leading Brands</span>
      </h2>

      <div className="trusted-slider">
        <button
          onClick={prevBrand}
          className="trusted-arrow left"
          aria-label="Previous Brand"
        >
          <FaArrowLeft />
        </button>

        <div className="trusted-cards">
          {getVisibleBrands().map((brand) => (
            <div
              className={`trusted-card ${brand.position}`}
              key={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="trusted-logo"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextBrand}
          className="trusted-arrow right"
          aria-label="Next Brand"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default TrustedBrands;