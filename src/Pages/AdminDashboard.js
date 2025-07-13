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
    const fetchData = async () => {
      try {
        const [buyersRes, sellersRes, vehiclesRes] = await Promise.all([
          fetch('http://localhost:5001/api/buyer'),
          fetch('http://localhost:5001/api/sellers'),
          fetch('http://localhost:5001/api/vehicles'),
        ]);

        const buyersData = await buyersRes.json();
        const sellersData = await sellersRes.json();
        const vehiclesData = await vehiclesRes.json();

        setBuyers(Array.isArray(buyersData) ? buyersData : []);
        setSellers(Array.isArray(sellersData) ? sellersData : []);
        setVehicles(Array.isArray(vehiclesData) ? vehiclesData : []);

      } catch (err) {
        console.error('Error fetching data:', err);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  // Delete handlers
  const deleteBuyer = async (id) => {
    if (window.confirm('Are you sure you want to delete this buyer?')) {
      await fetch(`http://localhost:5001/api/buyer/${id}`, { method: 'DELETE' });
      setBuyers(prev => prev.filter(b => b.buyerID !== id));
    }
  };

  const deleteSeller = async (id) => {
    if (window.confirm('Are you sure you want to delete this seller?')) {
      await fetch(`http://localhost:5001/api/seller/${id}`, { method: 'DELETE' });
      setSellers(prev => prev.filter(s => s.sellerID !== id));
    }
  };

  const deleteVehicle = async (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      await fetch(`http://localhost:5001/api/vehicles/${id}`, { method: 'DELETE' });
      setVehicles(prev => prev.filter(v => v.vehicleID !== id));
    }
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

          {/* Buyers */}
          <div className="user-table">
            <h2>Buyers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {buyers.map(b => (
                  <tr key={b.buyerID}>
                    <td>{b.buyerID}</td><td>{b.name}</td><td>{b.email}</td><td>{b.phoneNumber}</td>
                    <td>
                      <button onClick={() => navigate(`/edit-buyer/${b.buyerID}`)}>Edit</button>{' '}
                      <button onClick={() => deleteBuyer(b.buyerID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sellers */}
          <div className="user-table">
            <h2>Sellers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map(s => (
                  <tr key={s.sellerID}>
                    <td>{s.sellerID}</td><td>{s.name}</td><td>{s.email}</td><td>{s.phoneNumber}</td>
                    <td>
                      <button onClick={() => navigate(`/edit-seller/${s.sellerID}`)}>Edit</button>{' '}
                      <button onClick={() => deleteSeller(s.sellerID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Vehicles */}
          <div className="user-table">
            <h2>Vehicle Listings</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Make</th><th>Model</th><th>Year</th><th>Price</th><th>Seller ID</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map(v => (
                  <tr key={v.vehicleID}>
                    <td>{v.vehicleID}</td><td>{v.make}</td><td>{v.model}</td><td>{v.year}</td>
                    <td>{v.price}</td><td>{v.sellerID}</td>
                    <td>
                      <button onClick={() => navigate(`/edit-vehicle/${v.vehicleID}`)}>Edit</button>{' '}
                      <button onClick={() => deleteVehicle(v.vehicleID)}>Delete</button>
                    </td>
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
