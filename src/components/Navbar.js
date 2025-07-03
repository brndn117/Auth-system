import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo} onClick={() => navigate('/')}>TrueSite</h2>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate('/login')}>Login</button>
        <button style={styles.button} onClick={() => navigate('/signUp')}>Sign-Up</button>
        <button style={styles.button} onClick={() => navigate('/buying')}>Buying</button>
        <button style={styles.button} onClick={() => navigate('/NPsell')}>Selling</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },

  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '700',
    cursor: 'pointer',
  },

  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },

  button: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Navbar;

