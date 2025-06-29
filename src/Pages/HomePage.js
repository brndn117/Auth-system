import React from 'react';
import './HomePage.css';  
import Navbar from '../../src/components/Navbar';
import HeroSection from '../../src/components/HeroSection';
import AboutSection from '../../src/components/AboutSection';
import Footer from '../../src/components/Footer';

const HomePage = () => {
  return (
    <div className="app-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;



