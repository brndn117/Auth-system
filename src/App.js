import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ExplorePage from './Pages/ExplorePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import SellingPage from './Pages/SellingPage';
import BuyingPage from './Pages/BuyingPage';
import NPsell from './Pages/NPsell';
import ReportPage from './Pages/ReportPage';
import VehicleDetailPage from './Pages/VehicleDetailPage';
import SellerLoginPage from './Pages/SellerLoginPage';
import SellerSignupPage from './Pages/SellerSignUpPage';
import SellerDashboard from './Pages/SellerDashboard';
import AuthenticationSection from './ExplorepageComp/AuthenticateSection';
import PrivateRoute from './components/PrivateRoute';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';


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
      <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
      <Route path="/seller-login" element={<SellerLoginPage />} />
      <Route path="/seller-signup" element={<SellerSignupPage />} />
      <Route path="/authenticate" element={<AuthenticationSection />} />
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />

      {/* ✅ Protect the dashboard route */}
      <Route
        path="/seller-dashboard"
        element={
          <PrivateRoute>
            <SellerDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
