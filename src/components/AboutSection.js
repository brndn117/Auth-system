import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.glassCard}>
        <h2 style={styles.heading}>About TrueSite</h2>
        <p style={styles.text}>
          TrueSite provides a platform for secure and authenticated vehicle purchases. 
          We ensure transparency by verifying vehicle ownership, maintenance, and inspection history.
        </p>
      </div>
    </section>
  );
};

const styles = {
  about: {
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '800px',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 4px 30px rgba(0, 255, 255, 0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: 'cyan',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#ccc',
    lineHeight: '1.6',
  }
};

export default AboutSection;



// This code defines an AboutSection component for a React application. It provides information about the TrueSite platform, emphasizing its focus on secure and authenticated vehicle purchases. The styles are defined inline for simplicity, ensuring the section is visually appealing and easy to read.