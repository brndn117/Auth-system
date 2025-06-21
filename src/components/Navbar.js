import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => navigate('/')}>TrueSite</h2>
      <div>
        <button style={styles.button} onClick={() => navigate('/login')}>Login</button>
        <button style={styles.button} onClick={() => navigate('/signUp')}>Sign-Up</button>
        <button style={styles.button} onClick={() => navigate('/buying')}>Buying</button>
        <button style={styles.button} onClick={() => navigate('/selling')}>Selling</button>
      </div>
    </nav>
  );
};



const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    backgroundColor: 'rgba(75, 74, 74, 0.16)',
    color: 'White',
    alignItems: 'center',
    
   
  },

  logo: {
    margin: 0,
  },
  button: {
    marginLeft: '10px',
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: 'white',
    color: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Navbar;
// This code defines a simple Navbar component for a React application. It includes a logo and buttons for user actions like Login, Register, Buying, and Selling. The styles are defined inline for simplicity. The Navbar is designed to be responsive and visually appealing with a blue background and white text.