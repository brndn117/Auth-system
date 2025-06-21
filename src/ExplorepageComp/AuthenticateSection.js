import React from 'react';
import './AuthenticateSection.css';

const AuthenticationSection = () => {
  return (
    <div className="auth-section">
      <h1 className="auth-heading">
        <span className="highlight">Find out</span> whether your car is really legit
      </h1>

      <div className="auth-search-row">
        <input type="text" className="auth-input" placeholder="Enter VIN" />
        <button className="auth-button">Search</button>
      </div>

      <div className="auth-image-container">
        <img src="/" alt="Car" className="auth-car-image" />
      </div>
    </div>
  );
};

export default AuthenticationSection;
