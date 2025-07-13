import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    if (!adminData) {
      navigate('/admin-login');
    } else {
      setAdmin(adminData);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const buyerRes = await fetch('http://localhost:5001/api/buyers');
      const sellerRes = await fetch('http://localhost:5001/api/sellers');
      const vehicleRes = await fetch('http://localhost:5001/api/vehicles');

      const buyersData = await buyerRes.json();
      const sellersData = await sellerRes.json();
      const vehiclesData = await vehicleRes.json();

      setBuyers(buyersData);
      setSellers(sellersData);
      setVehicles(vehiclesData);
    } catch (error) {
      console.error('Admin fetch error:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <h1>Welcome, {admin?.name}</h1>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      <section>
        <h2>Registered Buyers</h2>
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th></tr>
          </thead>
          <tbody>
            {buyers.map((b) => (
              <tr key={b.buyer_id}>
                <td>{b.buyer_id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Registered Sellers</h2>
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th></tr>
          </thead>
          <tbody>
            {sellers.map((s) => (
              <tr key={s.sellerID}>
                <td>{s.sellerID}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Uploaded Vehicles</h2>
        <table>
          <thead>
            <tr><th>ID</th><th>Make</th><th>Model</th><th>Year</th><th>Price</th></tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.make}</td>
                <td>{v.model}</td>
                <td>{v.year}</td>
                <td>Ksh {parseInt(v.price).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
