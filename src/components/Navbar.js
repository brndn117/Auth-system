import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => navigate('/')}>TrueSite</h2>
      {/* This div contains all your buttons */}
      <div style={styles.buttonGroup}> {/* Added a style for this div */}
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
    // --- KEY CHANGE: Align all content to the start (left) ---
    justifyContent: 'flex-start',
    // --- Add a gap between the TrueSite logo and the button group ---
    gap: '30px', // Adjust this value as needed for spacing between logo and buttons
    
    padding: '20px 40px',
    backgroundColor: 'transparent',
    color: 'White',
    alignItems: 'center',

    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  },

  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '700',
  },
  
  // --- NEW STYLE FOR THE DIV CONTAINING BUTTONS ---
  buttonGroup: {
    display: 'flex', // Make this a flex container too, to manage internal button spacing
    alignItems: 'center',
    // gap: '10px', // If you want gap between buttons instead of marginLeft
  },

  button: {
    marginLeft: '10px', // Keep this for spacing *between* buttons, or use gap on buttonGroup
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  // As discussed, inline styles don't easily support pseudo-classes like :hover.
  // For hover effects, consider moving styles to a separate CSS file.
};

export default Navbar;