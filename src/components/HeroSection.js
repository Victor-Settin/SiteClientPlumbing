import React from 'react';
import '../styles/HeroSection.css';

function HeroSection({ title, subtitle, description, buttonText, imageUrl, reverse }) {
  return (
    <div className={`hero-section ${reverse ? 'reverse' : ''}`}>
      <div className="content">
        <div className="text-content">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          <p className="description">{description}</p>
          <button className="button">{buttonText}</button>
        </div>
        <div className="image-content">
          <img src={imageUrl} alt="Plumbing Service" className="image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
