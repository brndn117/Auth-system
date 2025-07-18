import React from 'react';
import './HomePage.css';  
import Navbar from '../../src/components/Navbar';
import HeroSection from '../../src/components/HeroSection';
import AboutSection from '../../src/components/AboutSection';
import CarListingSection from '../../src/components/CarListingSection';
import ContactSection from '../../src/components/ContactSection';
import FAQSection from '../../src/components/FAQSection';
import Footer from '../../src/components/Footer';
import { useNavigate } from 'react-router-dom';

const sampleReviews = [
  { name: 'Jane W.', review: 'Absolutely trustworthy service. Car arrived in great condition!' },
  { name: 'Kevin O.', review: 'Smooth process from start to finish. Highly recommended.' },
  { name: 'Aisha M.', review: 'Felt safe making a purchase online for the first time. Great team!' },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="app-background">
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* Featured Listings Section */}
      <CarListingSection />

      {/* TrustPilot Reviews Section */}
      <section className="home-section">
        <h2>What Our Customers Say</h2>
        <p>Trusted by hundreds of verified buyers via Trustpilot</p>
        <div className="horizontal-scroll">
          {sampleReviews.map((review, index) => (
            <div key={index} className="card-glass">
              <h4>{review.name}</h4>
              <p>"{review.review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Admin Dashboard Link */}
      <div style={{ textAlign: 'center', padding: '30px 0' }}>
        <p style={{ fontSize: '1rem', color: 'white' }}>
          System Administrator?{' '}
          <span
            style={{ color: '#00cfff', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
            onClick={() => navigate('/admin-login')}
          >
            Go to Admin Dashboard
          </span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;







