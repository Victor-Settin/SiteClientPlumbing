import React from 'react';
import '../styles/Location.css';

function Location() {
  return (
    <section className="location-section">
      <div className="location-info">
        <h2>Service Areas</h2>
        <h4>Covering 20+ Mile Radius Around San Pablo</h4>
        <ul>
          <li>San Pablo</li>
          <li>Richmond</li>
          <li>El Cerrito</li>
          <li>Albany</li>
          <li>Martinez</li>
          <li>And More...</li>
        </ul>
      </div>

      <div className="location-map">
        <iframe
          title="service-area-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7804242919367!2d-122.34689418469412!3d37.961323279724446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d1a91ea9adf%3A0xa1b80bf98de6d9d5!2sSan%20Pablo%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbr!4v1697735102342!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
