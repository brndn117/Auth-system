import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './SellerLoginPage.css';

const SellerLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      return setError('Please enter both email and password.');
    }

    try {
      const res = await fetch('http://localhost:5001/api/seller-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.message || 'Login failed');
      }

      localStorage.setItem('seller', JSON.stringify(data.user));
      navigate('/seller-dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="seller-login-page">
        <div className="seller-login-container">
          <h2 className="seller-login-title">Seller Login</h2>

          <input
            type="email"
            className="seller-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            type="password"
            className="seller-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />

          {error && <p className="seller-error">{error}</p>}

          <button onClick={handleLogin} className="seller-login-btn">
            Login
          </button>

          <div className="seller-bottom-links">
            <p>
              Don’t have an account?{' '}
              <span onClick={() => navigate('/seller-signup')}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerLoginPage;




