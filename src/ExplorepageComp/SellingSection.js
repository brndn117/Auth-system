import React from 'react';
import './SellingSection.css';

const SellingSection = () => {
  return (
    <div className="selling-card">
      <div className="selling-text">
        <h1 className="selling-title">
          Turn your car into <span className="highlight">cash</span>
        </h1>
        <p className="selling-desc">
          Remove any uncertainty and effortlessly sell your car through us.
          We assure security, convenience, and promptness throughout the entire experience.
        </p>
        <button className="sell-button">Sell my car now</button>
      </div>

      <div className="selling-image">
        <img src="/bmw-3-series-saloon.png" alt="Sell Your Car" />
      </div>
    </div>
  );
};

export default SellingSection;
