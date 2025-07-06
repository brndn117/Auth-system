import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BuyingSection from '../ExplorepageComp/BuyingSection';
import SellingSection from '../ExplorepageComp/SellingSection';
import AuthenticateSection from '../ExplorepageComp/AuthenticateSection';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

      {/* Small Cyan Highlighted Sub Navbar */}
      <div className="explore-subnav">
        <button
          className={currentIndex === 0 ? 'active' : ''}
          onClick={() => setCurrentIndex(0)}
        >
          Buy
        </button>
        <button
          className={currentIndex === 1 ? 'active' : ''}
          onClick={() => setCurrentIndex(1)}
        >
          Sell
        </button>
        <button
          className={currentIndex === 2 ? 'active' : ''}
          onClick={() => setCurrentIndex(2)}
        >
          Authenticate
        </button>
      </div>

      <h1 className="explore-title">Explore TrueSite Features</h1>

      <div className="explore-card-container">
        <button className="arrow-button left" onClick={() => handleNavigation('left')}>
          <FaChevronLeft />
        </button>

        <div className="glass-card">
          {cards[currentIndex]}
        </div>

        <button className="arrow-button right" onClick={() => handleNavigation('right')}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ExplorePage;




