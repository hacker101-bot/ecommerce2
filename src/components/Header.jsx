import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import searchIcon from "../assets/images/icons/search-icon.png";
// OPTIONAL: replace with your own logo file
// import logo from "../assets/images/logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      {/* LEFT SECTION */}
      <div className="left-section">
        {/* Hamburger (mobile) */}
        <div className="hamburger" onClick={toggleMenu} role="button" tabIndex={0}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {/* Brand */}
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          {/* <img src={logo} alt="Company Logo" className="brand-logo" /> */}
          <div className="brand-text">
            <div className="brand-name">NKT Energy</div>
            <div className="brand-tagline">Oil & Gas Services</div>
          </div>
        </NavLink>

        {/* Links */}
        <nav className={`left-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/services" className="header-link" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/projects" className="header-link" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>

          <NavLink to="/hse" className="header-link" onClick={() => setMenuOpen(false)}>
            HSE
          </NavLink>

          <NavLink to="/aboutus" className="header-link" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" className="header-link" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* MIDDLE SECTION */}
      <div className="middle-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search services, projects..."
        />
        <button className="search-button" aria-label="Search">
          <img src={searchIcon} alt="Search" width="18" />
        </button>
      </div>

      {/* RIGHT SECTION (Call-to-action) */}
      <div className="right-section">
        <NavLink to="/contact" className="cta-button">
          Request Quote
        </NavLink>
      </div>
    </header>
  );
}
