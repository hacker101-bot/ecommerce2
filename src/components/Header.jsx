import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import cartIcon from "../assets/images/icons/cart-icon.png";
import searchIcon from "../assets/images/icons/search-icon.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      {/* LEFT SECTION */}
      <div className="left-section">
        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {/* Links */}
        <nav className={`left-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/aboutus" className="header-link" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/terms-condition" className="header-link" onClick={() => setMenuOpen(false)}>
            Terms & Conditions
          </NavLink>
          <NavLink to="/refund-policy" className="header-link" onClick={() => setMenuOpen(false)}>
            Refund Policy
          </NavLink>
          <NavLink to="/checkout" className="cart-link header-link">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          <div className="cart-text">Cart</div>
        </NavLink>
        </nav>
      </div>

      {/* MIDDLE SECTION */}
      <div className="middle-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
        />
        <button className="search-button">
          <img src={searchIcon} alt="Search" width={"18px"}/>
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        
      </div>
    </header>
  );
}
