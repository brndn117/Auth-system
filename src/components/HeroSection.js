import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to TrueSite</h1>
        <p style={styles.subtitle}>Verify and buy second-hand vehicles with confidence and security.</p>
        <button style={styles.cta} onClick={() => navigate('/explore')}>Start Exploring</button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    padding: '100px 20px',
    textAlign: 'center',
    background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(6px)',
    borderRadius: '20px',
    margin: '40px auto',
    maxWidth: '900px',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    color: 'white',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#ccc',
  },
  cta: {
    padding: '14px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#00ecff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(0,236,255,0.3)',
    transition: 'transform 0.3s ease',
  },
};

export default HeroSection;

