import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Added Link import here
import Navbar from '../components/Navbar';
import './SignUpPage.css';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phoneNumber, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Signup successful!');
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMessage(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Network error during signup:', error);
      setMessage('Could not connect to the server. Please try again later.');
    }
  };

  return (
    <div className="signup-page">
      <Navbar />

      <div className="signup-container">
        <h2 className="signup-title">SIGN UP TO AN ACCOUNT</h2>
        <form onSubmit={handleSignUp}>
          {message && (
            <p
              className={`message ${
                message.includes('successful') ? 'success' : 'error'
              }`}
            >
              {message}
            </p>
          )}

          <label htmlFor="fullName" className="signup-label">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            className="signup-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email" className="signup-label">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber" className="signup-label">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter phone number"
            className="signup-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="password" className="signup-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            className="signup-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="terms-checkbox">
            <label>
              <input type="checkbox" required />
              I agree to the Terms and Conditions
            </label>
          </div>

          <button type="submit" className="signup-btn">Sign up</button>
        </form>

        <div className="bottom-links">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
          <p>Want to sell your car? <Link to="/seller-signup">Register as a Seller</Link></p> {/* ✅ Added seller signup link */}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
