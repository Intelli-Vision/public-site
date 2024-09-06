import React from "react";

import "../styles/Hero.css";

const Hero = () => {
  const imgUrl =
    "https://i.pcmag.com/imagery/roundups/06JbOb5326HQb5bU3nxwcvF-5..v1702481835.jpg";

  return (
    <div className="hero">
      <div className="hero-section hero-section-1">
        <div className="hero-image img-1">
          <img src={imgUrl} alt="Intellivision glasses" />
        </div>
        <div className="hero-content">
          <h1>Revolutionize Your Vision</h1>
          <p>Experience the future of eyewear with Intellivision.</p>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero-section hero-section-2">
        <div className="hero-content">
          <h1>See The Future</h1>
          <p>
            See the future with our revolutionary smart glasses. Engineered to
            blend cutting-edge technology with sleek design, these glasses offer
            an immersive experience like never before. Visualize information,
            interact with your environment, and access a world of
            possibilities—all from a device that's as intuitive as it is
            innovative. Embrace the future today with smart glasses that bring
            advanced technology right to your eyes, making tomorrow’s vision a
            reality now.
          </p>
        </div>
        <div className="hero-image">
          <img src={imgUrl} alt="Intellivision glasses" />
        </div>
      </div>
      <div className="hero-section hero-section-3">
        <div className="hero-image">
          <img src={imgUrl} alt="Intellivision glasses" />
        </div>
        <div className="hero-content">
          <h1>Experience tomorrow, today.</h1>
          <p>
            Dive into a new era of technology with our groundbreaking
            innovations. Our cutting-edge products bring the future into your
            hands right now, delivering unparalleled performance and vision.
            Don’t wait for tomorrow—experience the future today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
