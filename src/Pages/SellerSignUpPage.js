import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerSignupPage.css';

const SellerSignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !email || !phoneNumber || !password) {
      return setError('All fields are required.');
    }

    try {
      const res = await fetch('http://localhost:5000/api/seller-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phoneNumber, password })
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.message || 'Signup failed');
      }

      alert('Seller registered successfully!');
      navigate('/seller-login');
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="seller-signup-page">
      <h2 className="title">Seller Sign-Up</h2>

      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button onClick={handleSignup} className="signup-btn">Register</button>

      <p className="redirect-login">
        Already have an account?{' '}
        <span onClick={() => navigate('/seller-login')} className="link">Log in</span>
      </p>
    </div>
  );
};

export default SellerSignupPage;


