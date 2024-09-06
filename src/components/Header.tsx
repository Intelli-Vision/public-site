import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import styles

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img 
            src="https://ik.imagekit.io/scdn/Intellivision%20(2).png?updatedAt=1725144885701" 
            alt="Intellivision Logo" 
          />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/open-source">Open Source</Link></li>
          {/* <li><Link to="/investors">Investors</Link></li> */}
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

