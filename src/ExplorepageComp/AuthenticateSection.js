import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthenticateSection.css';

const AuthenticationSection = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    //  attach VIN search logic here to link with backend 
    navigate('/report'); // Navigate to the report page
  };

  return (
    <div className="auth-section">
      <h1 className="auth-heading">
        <span className="highlight">Find out</span> whether your car is really legit
      </h1>

      <div className="auth-search-row">
        <input type="text" className="auth-input" placeholder="Enter VIN" />
        <button className="auth-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="auth-image-container">
        <img src="/" alt="Car" className="auth-car-image" />
      </div>
    </div>
  );
};

export default AuthenticationSection;

// WBAAA1305H8251545