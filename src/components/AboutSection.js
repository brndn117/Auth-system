import React from 'react';

const AboutSection = () => {
  return (
    <section style={styles.about}>
      <h2>About TrueSite</h2>
      <p>
        TrueSite provides a platform for secure and authenticated vehicle purchases. We ensure transparency by verifying vehicle ownership, maintenance, and inspection history.
      </p>
    </section>
  );
};

const styles = {
  about: {
    padding: '60px 40px',
    textAlign: 'center',
    backgroundColor: 'transparent',
  }
};

export default AboutSection;
// This code defines an AboutSection component for a React application. It provides information about the TrueSite platform, emphasizing its focus on secure and authenticated vehicle purchases. The styles are defined inline for simplicity, ensuring the section is visually appealing and easy to read.