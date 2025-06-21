import React from 'react';
import Navbar from './components/Navbar';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-container">
        <h2 className="signup-title">CREATE A NEW ACCOUNT</h2>

        <button className="google-btn">
          <img src="/google-logo.png" alt="Google" className="google-icon" />
          Continue with Google
        </button>

        <div className="divider"><span>or</span></div>

        <label>Full Name</label>
        <input type="text" placeholder="Enter full name" className="signup-input" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" className="signup-input" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" className="signup-input" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" className="signup-input" />

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

