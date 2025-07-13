import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
    localStorage.removeItem('seller');
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo} onClick={() => navigate('/')}>TrueSite</h2>

      <div style={styles.buttonGroup}>
        {user && (
          <div style={styles.welcomeContainer}>
            <span style={styles.welcomeText}>Hi,</span>
            <span style={styles.userName}>{user.name}</span>
          </div>
        )}

        <button style={styles.button} onClick={() => navigate('/buying')}>Buying</button>

        {!user && (
          <button
            style={styles.button}
            onClick={() => {
              const seller = localStorage.getItem('seller');
              if (seller) {
                navigate('/seller-dashboard');
              } else {
                navigate('/seller-login');
              }
            }}
          >
            Selling
          </button>
        )}

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

        {user ? (
          <button style={styles.button} onClick={handleLogout}>Logout</button>
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={styles.button} onClick={() => navigate('/login')}>Login</button>
            <button style={styles.button} onClick={() => navigate('/signUp')}>Sign-Up</button>
          </div>
        )}
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
    boxShadow: '0 2px 8px rgba(255, 255, 255, 0.05)',
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '700',
    cursor: 'pointer',
    color: '#00e5ff',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    letterSpacing: '0.5px',
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
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
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
  welcomeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#111',
    padding: '6px 16px',
    borderRadius: '999px',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#00e5ff',
  },
  welcomeText: {
    color: '#aaa',
  },
  userName: {
    color: '#00e5ff',
  },
};

// Global hover styling workaround for inline styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  button:hover {
    background-color: white !important;
    color: black !important;
    transform: scale(1.03);
  }
`, styleSheet.cssRules.length);

export default Navbar;





