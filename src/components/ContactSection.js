import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Us</h2>
      <p>
        Have questions? Reach out to us at <a href="mailto:support@truesite.com" style={styles.link}>support@truesite.com</a>
        or call +254 712 345678.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(4px)',
    borderRadius: '20px',
    margin: '40px auto',
    maxWidth: '900px',
  },
  link: {
    color: '#00ecff',
    textDecoration: 'underline',
  },
};

export default ContactSection;
