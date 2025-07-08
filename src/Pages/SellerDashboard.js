import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerDashboard.css';
import EditListings from '../components/seller/EditListings';
import AddVehicle from '../components/seller/AddVehicle';
import { FaCar, FaEdit, FaCheckCircle, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('add');
  const [sellerName, setSellerName] = useState('');

  useEffect(() => {
    const storedSeller = localStorage.getItem('seller');
    if (storedSeller) {
      try {
        const parsed = JSON.parse(storedSeller);
        setSellerName(parsed.name || 'Seller');
      } catch (err) {
        console.error('Failed to parse seller:', err);
        setSellerName('Seller');
      }
    } else {
      // Redirect to login if no seller
      navigate('/seller-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('seller');
    navigate('/'); // ✅ Redirect to homepage after logout
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'add':
        return <AddVehicle />;
      case 'edit':
        return <EditListings />;
      case 'verify':
        return (
          <div>
            <h3>Verification Status</h3>
            <p>View the current status of vehicle verifications.</p>
          </div>
        );
      case 'reports':
        return (
          <div>
            <h3>Uploaded Reports</h3>
            <p>All vehicle inspection reports or documents.</p>
          </div>
        );
      default:
        return (
          <div>
            <h3>Welcome to Your Seller Dashboard</h3>
            <p>Choose an option on the left.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile">
          <div className="logo">TrueSite</div>
          <h3>{sellerName}</h3>
          <p>Seller</p>
        </div>
        <nav className="nav-links">
          <button onClick={() => setActiveTab('add')}><FaCar /> Add Vehicle</button>
          <button onClick={() => setActiveTab('edit')}><FaEdit /> Edit Listings</button>
          <button onClick={() => setActiveTab('verify')}><FaCheckCircle /> Verification Status</button>
          <button onClick={() => setActiveTab('reports')}><FaFileAlt /> Reports</button>
          <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
        </nav>
      </aside>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default SellerDashboard;





