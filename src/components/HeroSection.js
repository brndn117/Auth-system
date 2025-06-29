import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <h1>Welcome to TrueSite</h1>
      <p>Verify and buy second-hand vehicles with confidence and security.</p>
      <button style={styles.cta} onClick={() => navigate('/explore')}>Start Exploring</button>
    </section>
  );
};

const styles = {
  hero: {
    padding: '80px 20px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },

  h1: {
    fontSize: '100px', 
    margin: '0 0 20px',
  },

cta: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default HeroSection;
