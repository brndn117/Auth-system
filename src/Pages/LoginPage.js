import React from 'react';
import Navbar from '../components/Navbar';
import './LoginPage.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoginPage = () => {
  // Example handler if "Forgot password?" triggers a local action (e.g., opens a modal)
  const handleForgotPassword = () => {
    alert("Password reset functionality would go here!");
    // In a real app, you'd open a modal, navigate to /forgot-password, etc.
  };

  // Example handler for "Log in as a Seller" if it's an action
  const handleSellerLoginAction = () => {
    alert("Seller login action/modal would go here!");
    // Or it could navigate to a specific seller login page
  };

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
          {/* FIX for Line 30:11 */}
          {/* If it's an action like opening a modal, use a button: */}
          <button type="button" className="forgot-link" onClick={handleForgotPassword} style={{ background: 'none', border: 'none', color: 'var(--primary-color, blue)', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
            Forgot password?
          </button>
          {/* OR, if it navigates to a /forgot-password route: */}
          {/* <Link to="/forgot-password" className="forgot-link">Forgot password?</Link> */}
        </div>

        <button className="login-btn">Log in</button>

        <div className="bottom-links">
          {/* FIX for Line 37:32 */}
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          {/* FIX for Line 38:32 (the "Log in as a Seller" link) */}
          <p>Are you a Seller?
            {/* Assuming it leads to a seller login page, use Link */}
            <Link to="/seller-login">Log in as a Seller</Link>
            {/* OR, if it's an action like opening a specific modal: */}
            {/* <button type="button" onClick={handleSellerLoginAction} style={{ background: 'none', border: 'none', color: 'var(--primary-color, blue)', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
              Log in as a Seller
            </button> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;