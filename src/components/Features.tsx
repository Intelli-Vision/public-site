import React from 'react';
import '../styles/Features.css';
import { features } from '../text';

export default function Features(){
  
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
