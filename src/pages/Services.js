import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your plumbing needs, from repairs to installations and maintenance. Below are the services we provide:</p>

      <div className="services-list">
        <div className="service-item">
          <h2>Pipe Repair & Replacement</h2>
          <p>Our pipe repair and replacement service is designed to fix any leaks, cracks, or damage to your plumbing system. We use high-quality materials to ensure the longevity of your pipes and prevent future issues.</p>
          <Link to="/gallery/service1">
            <button className="view-photos-button">View Photos</button>
          </Link>
        </div>

        <div className="service-item">
          <h2>Drain Cleaning</h2>
          <p>We offer professional drain cleaning services to remove blockages and keep your drains flowing smoothly. Whether it's a clogged sink, shower, or sewer line, we can clear it up quickly and efficiently.</p>
          <Link to="/gallery/service2">
            <button className="view-photos-button">View Photos</button>
          </Link>
        </div>

        <div className="service-item">
          <h2>Water Heater Installation & Repair</h2>
          <p>Our team can install or repair water heaters to ensure you always have hot water when you need it. We specialize in tankless, electric, and gas water heaters for both residential and commercial properties.</p>
          <Link to="/gallery/service3">
            <button className="view-photos-button">View Photos</button>
          </Link>
        </div>

        <div className="service-item">
          <h2>Leak Detection & Repair</h2>
          <p>If you suspect a leak in your home or business, our experts can quickly detect and repair any hidden leaks in your plumbing system. Early detection prevents water damage and high utility bills.</p>
          <Link to="/gallery/service4">
            <button className="view-photos-button">View Photos</button>
          </Link>
        </div>

        <div className="service-item">
          <h2>Bathroom & Kitchen Remodeling</h2>
          <p>We offer complete remodeling services for your bathroom and kitchen. From installing new fixtures to re-piping and upgrading your plumbing system, we can transform your space to meet your needs and style.</p>
          <Link to="/gallery/service5">
            <button className="view-photos-button">View Photos</button>
          </Link>
        </div>

        <div className="service-item">
          <h2>Emergency Plumbing Services</h2>
          <p>We understand that plumbing emergencies can happen at any time. That's why we offer 24/7 emergency plumbing services to handle burst pipes, severe leaks, and other urgent plumbing issues.</p>
          <Link to="/gallery/service6">
            <button className="view-photos-button">View Photos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
