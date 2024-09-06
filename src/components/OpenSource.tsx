import React from "react";
import { Link } from "react-router-dom";

import "../styles/OpenSource.css";

const OpenSource = () => {
  const projects = [
    {
      icon: "https://i.pcmag.com/imagery/roundups/06JbOb5326HQb5bU3nxwcvF-5..v1702481835.jpg",
      title: "Free Hardware Development Instructions",
      description: "Learn how to build an Intellvision handset yourself.",
      url: "https://github.com/TeamOpenSmartGlasses/OpenSourceSmartGlasses/wiki/How-to-build-the-Open-Source-Smart-Glasses",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "IntellivisionOS",
      description: "Experience immersive AR experiences on the go.",
      url: "https://github.com/TeamOpenSmartGlasses/OpenSourceSmartGlasses/wiki/How-to-build-the-Open-Source-Smart-Glasses",
    },
    // {
    //   icon: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "CogniVision App",
    //   description: "Stay connected without checking your phone.",
    //   url: "",
    // },
    // {
    //   icon: "https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Live Translation",
    //   description: "Enjoy crystal-clear vision and comfort.",
    //   url: "",
    // },
    // {
    //   icon: "https://static-00.iconduck.com/assets.00/strava-icon-2048x2048-4fppqh38.png",
    //   title: "Strava Integration",
    //   description: "Enjoy sports metrics projected to your lense while performing.",
    //   url: "",
    // },
    // {
    //   icon: "https://plus.unsplash.com/premium_photo-1661311950994-d263ea9681a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R1BTfGVufDB8fDB8fHww",
    //   title: "GPS Integration",
    //   description: "Enjoy directions delivered right to your lenses, showing you where to turn.",
    //   url: "",
    // },
  ];

  return (
    <section className="projects">
      <h2>Key Projects</h2>
      <div className="project-list">
        {projects.map((feature, index) => (
          <div className="project-card" key={index}>
            <Link to={feature.url}>
              <div>
                <img src={feature.icon} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
