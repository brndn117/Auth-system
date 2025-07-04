import React from 'react';
// Path expects App.css to be directly in the 'src/' folder, alongside App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';

// These paths expect the 'Pages' folder to be directly in the 'src/' folder, alongside App.js
// And the page files within that 'Pages' folder to be named exactly as shown (e.g., HomePage.js)
import HomePage from './Pages/HomePage';
import ExplorePage from './Pages/ExplorePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import SellingPage from './Pages/SellingPage';
import BuyingPage from './Pages/BuyingPage';
import NPsell from './Pages/NPsell';
import ReportPage from './Pages/ReportPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/selling" element={<SellingPage />} />
      <Route path="/buying" element={<BuyingPage />} />
      <Route path="/NPsell" element={<NPsell />} />
      <Route path="/report/:vin" element={<ReportPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;