import React, { useRef } from "react";
import { heroText } from '../text';
import "../styles/Hero.css";

const Hero: React.FC = () => {
  // Create a ref to scroll to the target section
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  // Function to scroll to the specific section
  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const imgUrl =
    "https://i.pcmag.com/imagery/roundups/06JbOb5326HQb5bU3nxwcvF-5..v1702481835.jpg";


  return (
    <div className="hero">
      <div className="hero-section hero-section-1">
        <div className="hero-image img-1">
          <img src={imgUrl} alt="Intellivision glasses" />
        </div>
        <div className="hero-content">
          <h1>{heroText.landing.title}</h1>
          <p>{heroText.landing.tagline}</p>
          <button className="btn" onClick={() => scrollToSection(0)}>Learn More</button>
        </div>
      </div>
      {heroText.pages.map((item, index) => (
        <div
          className="hero-section"
          key={index}
          ref={(el) => (sectionRefs.current[index] = el as HTMLDivElement)}
        >
          <div className="hero-image">
            <img src={item.image} alt="Intellivision glasses" />
          </div>
          <div className="hero-content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
