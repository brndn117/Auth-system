import React from 'react';
import './BuyingSection.css';

 

const BuyingSection = () => {
  return (
    <div className="buying-section">
      <div className="buying-left">
        <h1 className="buying-title">
          Find your <br /> next <span className="highlight">new car</span>
        </h1>

        <div className="dropdowns">
          <select className="dropdown">
            <option>Hyundai</option>
            <option>Toyota</option>
            <option>BMW</option>
          </select>
          <select className="dropdown">
            <option>TUCSON</option>
            <option>Corolla</option>
            <option>X5</option>
          </select>
        </div>

        <button className="search-button">
          🔍 Search
        </button>
      </div>

      <div className="buying-right">
        <img src= "/bmw-3-series-saloon.png" alt="Car" className="car-image" />
      </div>
    </div>
  );
};

export default BuyingSection;
