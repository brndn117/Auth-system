import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo} onClick={() => navigate('/')}>TrueSite</h2>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate('/login')}>Login</button>
        <button style={styles.button} onClick={() => navigate('/signUp')}>Sign-Up</button>
        <button style={styles.button} onClick={() => navigate('/buying')}>Buying</button>
        <button style={styles.button} onClick={() => navigate('/NPsell')}>Selling</button>

        {/* Dropdown */}
        <div
          style={styles.dropdownContainer}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button style={styles.button}>Company ▾</button>
          {dropdownOpen && (
            <div style={styles.dropdownMenu}>
              <button style={styles.dropdownItem} onClick={() => handleSectionNavigation('about')}>About</button>
              <button style={styles.dropdownItem} onClick={() => handleSectionNavigation('contact')}>Contact</button>
              <button style={styles.dropdownItem} onClick={() => handleSectionNavigation('faq')}>FAQ</button>
            </div>
          )}
        </div>
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
    padding: '20px 20px',
    zIndex: 9999,
    boxShadow: '0 2px 8px rgba(225, 215, 215, 0.1)',
    flexWrap: 'wrap',
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
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    position: 'relative',
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

  dropdownContainer: {
    position: 'relative',
  },

  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#222',
    borderRadius: '10px',
    overflow: 'hidden',
    zIndex: 9999,
    minWidth: '150px',
  },

  dropdownItem: {
    padding: '10px 20px',
    background: 'transparent',
    color: 'white',
    border: 'none',
    textAlign: 'left',
    width: '100%',
    cursor: 'pointer',
    fontSize: '14px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
};

export default Navbar;



