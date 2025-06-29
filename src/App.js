import React from 'react';
<<<<<<< HEAD
// Path expects App.css to be directly in the 'src/' folder, alongside App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';

// These paths expect the 'Pages' folder to be directly in the 'src/' folder, alongside App.js
// And the page files within that 'Pages' folder to be named exactly as shown (e.g., HomePage.js)
import HomePage from './Pages/HomePage';
import ExplorePage from './Pages/ExplorePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
=======
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';       
import ExplorePage from '../../src/Pages/ExplorePage';
import LoginPage from './Pages/LoginPage'; 
import SignUpPage from './Pages/SignUpPage'; 
>>>>>>> ac1ae72943b836921c773cf729d691549acc54ca
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
<<<<<<< HEAD
=======
     
>>>>>>> ac1ae72943b836921c773cf729d691549acc54ca
    </Routes>
  );
}

export default App;


<<<<<<< HEAD
=======
// This code defines the main App component for a React application. It imports and uses Navbar, HeroSection, AboutSection, and Footer components to create a complete layout. The App component serves as the entry point for the application, rendering the navigation bar, hero section, about section, and footer in a structured manner. This modular approach enhances maintainability and readability of the code.
>>>>>>> ac1ae72943b836921c773cf729d691549acc54ca
