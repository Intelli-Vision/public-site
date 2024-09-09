import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoURL } from "../data"; // Path to your logo image
import "../styles/Header.css"; // Import styles

const Header: React.FC = () => {
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
      <div className="logo" onClick={isMobile ? toggleMenu : undefined}>
        {isMobile ? (
          <img src={logoURL} alt="Intellivision Logo" />
        ) : (
          <Link to="/" className={isMobile ? "mobile-logo" : ""}>
            <img src={logoURL} alt="Intellivision Logo" />
          </Link>
        )}
      </div>
      {/* Regular Navbar (Hidden on mobile) */}
      <nav className={`navbar ${isMobile ? "hidden" : ""}`}>
        <ul>
          {pages.map((page, index) => (
            <li>
              <Link to={page.url}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu (Opened by clicking the logo) */}
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
      <ul>
          {pages.map((page, index) => (
            <li>
              <Link to={page.url}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
