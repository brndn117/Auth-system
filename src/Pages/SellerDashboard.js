import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust path if needed
import './SellerDashboard.css';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const seller = JSON.parse(localStorage.getItem('seller'));
  const sellerName = seller?.name || 'Seller';

  return (
    <div>
      <Navbar userType="seller" />
      <div className="dashboard-container">
        <h2>Welcome, {sellerName}!</h2>

        <div className="dashboard-actions">
          <div className="card" onClick={() => navigate('/add-vehicle')}>
            <h3>Add New Vehicle</h3>
            <p>List a vehicle for sale, upload images, and provide inspection reports.</p>
          </div>

          <div className="card" onClick={() => navigate('/my-vehicles')}>
            <h3>My Listings</h3>
            <p>View, edit, or delete your vehicle listings.</p>
          </div>

          <div className="card" onClick={() => navigate('/verification-status')}>
            <h3>Verification Status</h3>
            <p>Track the verified status of your listed vehicles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
