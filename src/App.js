import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';       
import ExplorePage from '../../src/Pages/ExplorePage';
import LoginPage from './Pages/LoginPage'; 
import SignUpPage from './Pages/SignUpPage'; 
import SellingPage from './Pages/SellingPage';
import BuyingPage from './Pages/BuyingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/selling" element={<SellingPage />} />
      <Route path="/buying" element={<BuyingPage />} />
     
    </Routes>
  );
}

export default App;


// This code defines the main App component for a React application. It imports and uses Navbar, HeroSection, AboutSection, and Footer components to create a complete layout. The App component serves as the entry point for the application, rendering the navigation bar, hero section, about section, and footer in a structured manner. This modular approach enhances maintainability and readability of the code.