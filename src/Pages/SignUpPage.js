import React from 'react';
import Navbar from '../components/Navbar';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      {/* Navbar component */}
      <Navbar />

      <div className="signup-container">
        {/* Removed the h2 title as per the image, replaced by "Full Name" etc. labels */}

        {/* Google Button - Keep this if you want it, but the image doesn't show it explicitly */}
        {/* <button className="google-btn">
          <img src="/google-logo.png" alt="Google" className="google-icon" />
          Continue with Google
        </button> */}

        {/* Divider - Keep this if you want it, but the image doesn't show it explicitly */}
        {/* <div className="divider"><span>or</span></div> */}

        <label htmlFor="fullName" className="signup-label">Full Name</label>
        <input type="text" id="fullName" placeholder="Enter full name" className="signup-input" />

        <label htmlFor="email" className="signup-label">Email</label>
        <input type="email" id="email" placeholder="Enter email" className="signup-input" />

        <label htmlFor="password" className="signup-label">Password</label>
        <input type="password" id="password" placeholder="Enter password" className="signup-input" />

        <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
        <input type="password" id="confirmPassword" placeholder="Confirm password" className="signup-input" />

        <div className="terms-checkbox">
          <label>
            <input type="checkbox" /> I agree to the Terms and Conditions
          </label>
        </div>

        <button className="signup-btn">Sign up</button>

        <div className="bottom-links">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;