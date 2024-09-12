import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/svgs/hamburgerMenu.svg?react";
import { logoURL } from "../data"; // Path to your logo image
import "../styles/Header.css"; // Import styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect if screen width is mobile size
  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile view
  };

  useEffect(() => {
    checkMobileScreen(); // Check on component mount
    window.addEventListener("resize", checkMobileScreen); // Listen to screen resize

    return () => {
      window.removeEventListener("resize", checkMobileScreen); // Clean up on unmount
    };
  }, []);

  const pages = [
    { url: "/", label: "Home" },
    { url: "/features", label: "Features" },
    { url: "/open-source", label: "Open Source" },
    { url: "/contact-us", label: "Contact Us" },
  ];
  return (
    <header className="header">
      {/* On mobile, clicking the logo toggles the menu */}
      {isMobile ? (
        <div className="header mobile">
          <img
            className="logo mobile-logo"
            src={logoURL}
            alt="Intellivision Logo"
          />
          <Link to="/" onClick={isMobile ? toggleMenu : undefined}>
            <MenuIcon />
          </Link>
        </div>
      ) : (
        <div className="logo">
          <Link to="/" className="">
            <img src={logoURL} alt="Intellivision Logo" />
          </Link>
        </div>
      )}
      {/* Regular Navbar (Hidden on mobile) */}
      <nav className={`navbar ${isMobile ? "hidden" : ""}`}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.url}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu (Opened by clicking the logo) */}
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.url} onClick={toggleMenu}>
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
