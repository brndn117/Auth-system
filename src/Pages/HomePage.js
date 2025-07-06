import React from 'react';
import './HomePage.css';  
import Navbar from '../../src/components/Navbar';
import HeroSection from '../../src/components/HeroSection';
import AboutSection from '../../src/components/AboutSection';
import CarListingSection from '../../src/components/CarListingSection';
import ContactSection from '../../src/components/ContactSection';
import FAQSection from '../../src/components/FAQSection';
import Footer from '../../src/components/Footer';

const sampleReviews = [
  { name: 'Jane W.', review: 'Absolutely trustworthy service. Car arrived in great condition!' },
  { name: 'Kevin O.', review: 'Smooth process from start to finish. Highly recommended.' },
  { name: 'Aisha M.', review: 'Felt safe making a purchase online for the first time. Great team!' },
];

const HomePage = () => {
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

      <Footer />
    </div>
  );
};

export default HomePage;






