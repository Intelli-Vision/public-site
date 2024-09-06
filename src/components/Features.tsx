import React from 'react';

import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: 'https://images.unsplash.com/photo-1618123664298-f3a0281e7e44?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Advanced Augmented Reality',
      description: 'Immerse yourself in cutting-edge AR technology wherever you go.',
    },
    {
      icon: 'https://plus.unsplash.com/premium_photo-1690297732590-b9875f77471d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJhaW58ZW58MHx8MHx8fDA%3D',
      title: 'Smart Notifications',
      description: 'Stay effortlessly connected with notifications directly in your line of sight.',
    },
    {
      icon: 'https://plus.unsplash.com/premium_photo-1670424200500-b8977f9e30be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Superior Optics',
      description: 'Experience unparalleled visual clarity and lasting comfort.',
    },
    {
      icon: 'https://plus.unsplash.com/premium_photo-1663045802820-d81fae9b1898?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D',
      title: 'Performance Tracking',
      description: 'Stay informed with interactive metrics and data visualization while engaging in your favorite sports activities.',
    },
  ];
  
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

export default Features;