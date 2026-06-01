import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../../assets/logo/socialboost.png";
import "./Navbar.css";

function Navbar({ scrollToForm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleProposalClick = () => {
    setMenuOpen(false);
    scrollToForm();
  };

  return (
    <>
      <header className="navbar">
        <a href="#" className="nav-logo" aria-label="Social Boost Home">
          <img src={logo} alt="Social Boost" />
        </a>

        <nav className="desktop-nav">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#proposal-form">Contact</a>
        </nav>

        <button onClick={handleProposalClick} className="nav-proposal-btn">
          Free Proposal
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top">
              <a href="#" className="nav-logo" aria-label="Social Boost Home">
                <img src={logo} alt="Social Boost" />
              </a>

              <button onClick={closeMenu} aria-label="Close menu">
                <FaXmark />
              </button>
            </div>

            <a onClick={closeMenu} href="#">
              Home
            </a>

            <a onClick={closeMenu} href="#services">
              Services
            </a>

            <a onClick={closeMenu} href="#work">
              Work
            </a>

            <a onClick={closeMenu} href="#process">
              Process
            </a>

            <a onClick={closeMenu} href="#proposal-form">
              Contact
            </a>

            <button onClick={handleProposalClick}>Get Free Proposal</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;