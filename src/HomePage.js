
import React from 'react';
import './HomePage.css';  
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

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
