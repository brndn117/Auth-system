import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const questions = [
  {
    q: 'How does the Truesite service work?',
    a: 'Truesite verifies used vehicles by analyzing the VIN and fetching details such as ownership, inspection, and damage history.'
  },
  {
    q: 'What is a VIN?',
    a: 'A VIN (Vehicle Identification Number) is a unique 17-character code that identifies a specific vehicle and provides access to its history.'
  },
  {
    q: 'How long does it take to receive my Truesite report?',
    a: 'You can access your Truesite report instantly after submitting a valid VIN.'
  },
  {
    q: 'What information may appear in the Truesite report?',
    a: 'The report includes manufacturer details, mileage records, inspection history, theft status, damage reports, and ownership info.'
  },
  {
    q: 'What makes Truesite different from similar services?',
    a: 'We offer real-time verified reports with local vehicle data integration, fraud detection, and escrow-secured transactions.'
  },
  {
    q: 'How do I verify a car?',
    a: 'Enter the VIN on the authenticate page and view the full report.'
  },
  {
    q: 'Is payment safe on your platform?',
    a: 'Yes, we offer escrow services and bank-level encryption for secure transactions.'
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" style={styles.section}>
      <h2 style={styles.heading}>Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} style={styles.qaItem}>
          <div style={styles.questionRow} onClick={() => toggle(index)}>
            <span style={styles.number}>{index + 1}.</span>
            <p style={styles.question}>{item.q}</p>
            <span style={styles.icon}>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {openIndex === index && (
            <p style={styles.answer}>{item.a}</p>
          )}
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(4px)',
    borderRadius: '20px',
    margin: '40px auto',
    maxWidth: '900px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '30px',
    color: 'cyan',
  },
  qaItem: {
    marginBottom: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '10px',
  },
  questionRow: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'space-between',
    gap: '10px',
  },
  number: {
    color: '#00ecff',
    fontWeight: 'bold',
    marginRight: '10px',
    fontSize: '1.1rem',
  },
  question: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#00ecff',
    margin: 0,
  },
  icon: {
    color: '#00ecff',
    fontSize: '1rem',
    marginLeft: '10px',
  },
  answer: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#ccc',
    lineHeight: '1.6',
    paddingLeft: '30px',
  }
};

export default FAQSection;
