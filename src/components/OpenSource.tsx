import React from "react";
import { Link } from "react-router-dom";

import "../styles/OpenSource.css";
import { projects } from "../text";

const OpenSource = () => {

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
