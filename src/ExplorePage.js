import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BuyingSection from './ExplorepageComp/BuyingSection';
import SellingSection from './ExplorepageComp/SellingSection';
import AuthenticateSection from './ExplorepageComp/AuthenticateSection';
import './ExplorePage.css';

const ExplorePage = () => {
  const cards = [<BuyingSection />, <SellingSection />, <AuthenticateSection />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="explore-page">
      <Navbar />
      <h1 className="explore-title">Explore TrueSite Features</h1>

      <div className="explore-card-container">
        <button className="arrow-button left" onClick={() => handleNavigation('left')}>&larr;</button>
        <div className="glass-card">
          {cards[currentIndex]}
        </div>
        <button className="arrow-button right" onClick={() => handleNavigation('right')}>&rarr;</button>
      </div>
    </div>
  );
};

export default ExplorePage;


