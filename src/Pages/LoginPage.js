import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // <- Comes from AuthContext
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user);        // ✅ Save buyer in context
        navigate('/explore');    // ✅ Redirect to explore
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Try again.');
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">LOG IN INTO YOUR ACCOUNT</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className="login-btn" onClick={handleLogin}>Log in</button>

        <div className="bottom-links">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          <p>Are you a Seller? <Link to="/seller-login">Log in as a Seller</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

