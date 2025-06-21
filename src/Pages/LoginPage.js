import React from 'react';
import Navbar from '../components/Navbar';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">LOG IN INTO YOUR ACCOUNT</h2>

        <button className="google-btn">
          <img src="/google-logo.png" alt="Google" className="google-icon" />
          Continue with Google
        </button>

        <div className="divider"><span>or</span></div>

        <label>Email</label>
        <input type="email" placeholder="Enter email" className="login-input" />

        <label>Password</label>
        <div className="password-wrapper">
          <input type="password" className="login-input" />
          <span className="eye-icon">👁️</span>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>

        <button className="login-btn">Log in</button>

        <div className="bottom-links">
          <p>Don't have an account? <a href="#">Sign up</a></p>
          <p>Are you a Seller? <a href="#">Log in as a Seller</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

