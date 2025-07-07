import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerLoginPage.css';

const SellerLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Just go to the dashboard without any validation
    navigate('/seller-dashboard');
  };

  return (
    <div className="seller-login-page">
      <h2>Seller Login</h2>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <button onClick={handleLogin} className="login-btn">Login</button>
    </div>
  );
};

export default SellerLoginPage;
