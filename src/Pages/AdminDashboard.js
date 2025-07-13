import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem('admin'));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch buyers
        const buyersRes = await fetch('http://localhost:5001/api/buyer');
        const buyersData = await buyersRes.json();
        setBuyers(buyersData);
      } catch (err) {
        console.error('Error fetching buyers:', err);
      }

      try {
        // Fetch sellers
        const sellersRes = await fetch('http://localhost:5001/api/sellers');
        const sellersData = await sellersRes.json();
        setSellers(sellersData);
      } catch (err) {
        console.error('Error fetching sellers:', err);
      }

      try {
        // Fetch vehicles
        const vehiclesRes = await fetch('http://localhost:5001/api/vehicles');
        const vehiclesData = await vehiclesRes.json();
        setVehicles(vehiclesData);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
      }

      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-info">
          {admin && <p>Welcome, {admin.name}</p>}
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="tables-container">
          <div className="user-table">
            <h2>Buyers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {buyers.map(b => (
                  <tr key={b.buyerID}>
                    <td>{b.buyerID}</td><td>{b.name}</td><td>{b.email}</td><td>{b.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="user-table">
            <h2>Sellers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map(s => (
                  <tr key={s.sellerID}>
                    <td>{s.sellerID}</td><td>{s.name}</td><td>{s.email}</td><td>{s.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="user-table">
            <h2>Vehicle Listings</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Make</th><th>Model</th><th>Year</th><th>Price</th><th>Seller ID</th><th>Posted</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map(v => (
                  <tr key={v.id}>
                    <td>{v.id}</td><td>{v.make}</td><td>{v.model}</td><td>{v.year}</td>
                    <td>{v.price}</td><td>{v.sellerID}</td><td>{v.posted ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
