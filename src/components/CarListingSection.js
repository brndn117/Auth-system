import React from 'react';

const sampleCars = [
  { title: 'Mercedes-Benz C200', image: '/images/C200/C200.jpg', price: 'Ksh 2,500,000' },
  { title: 'BMW M3 2019', image: '/images/m5/M5.avif', price: 'Ksh 10,000,000' },
  { title: 'Volkswagen Passat', image: '/images/ReportPageIm/Passat1.avif', price: 'Ksh 3,000,000' },
];

const CarListingSection = () => {
  return (
    <section id="listings" style={styles.section}>
      <h2 style={styles.heading}>Featured Listings</h2>
      <p style={styles.description}>Here are some top-rated vehicles from our inventory</p>
      <div style={styles.scrollContainer}>
        {sampleCars.map((car, index) => (
          <div key={index} style={styles.cardGlass}>
            <img src={car.image} alt={car.title} style={styles.image} />
            <h3 style={styles.title}>{car.title}</h3>
            <p style={styles.price}>{car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    color: 'white',
  },
  heading: {
    fontSize: '2rem',
    color: 'cyan',
    marginBottom: '10px',
  },
  description: {
    color: '#ccc',
    marginBottom: '30px',
  },
  scrollContainer: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '10px',
  },
  cardGlass: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '20px',
    color: 'white',
    minWidth: '250px',
    boxShadow: '0 4px 20px rgba(0, 255, 255, 0.15)',
    flex: '0 0 auto',
  },
  image: {
    width: '100%',
    height: '180px',
    borderRadius: '10px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '5px',
    color: 'cyan',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'white',
  },
};

export default CarListingSection;


