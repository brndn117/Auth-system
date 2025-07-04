import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './BuyingSection.css';

const BuyingSection = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleSearch = () => {
    navigate('/buying'); // ✅ Route to the Buying Page
  };

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
            <option>Tucson</option>
            <option>Corolla</option>
            <option>M5</option>
          </select>
        </div>

        <button className="search-button" onClick={handleSearch}>
          🔍 Search
        </button>
      </div>

      <div className="buying-right">
        <img src="/bmw-3-series-saloon.png" alt="Car" className="car-image" />
      </div>
    </div>
  );
};

export default BuyingSection;

