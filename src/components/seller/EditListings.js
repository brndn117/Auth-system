import React, { useEffect, useState } from 'react';
import './EditListings.css';
const API_BASE = 'http://localhost:5002';

const EditListings = () => {
  const [vehicles, setVehicles] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sellerId = 1; // 🔥 Force fetch for sellerId 1

    fetch(`${API_BASE}/api/seller-unposted-vehicles/${sellerId}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setVehicles(data.vehicles);
        } else {
          setMessage('❌ Failed to fetch listings.');
        }
      })
      .catch(err => {
        console.error('Failed to fetch vehicles:', err);
        setMessage('❌ Error fetching listings.');
      });
  }, []);

  const handlePost = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/post-vehicle/${id}`, {
        method: 'PUT',
      });

      const result = await res.json();

      if (res.ok) {
        setVehicles(prev => prev.filter(vehicle => vehicle.id !== id));
        setMessage('✅ Listing posted successfully!');
      } else {
        setMessage('❌ ' + result.message);
      }
    } catch (err) {
      console.error('Failed to post listing:', err);
      setMessage('❌ Error posting listing.');
    }
  };

  return (
    <div className="edit-listings-container">
      <h2>Edit Vehicle Listings</h2>
      {message && <div className="message">{message}</div>}

      {vehicles.length === 0 ? (
        <p>No unposted listings found.</p>
      ) : (
        <div className="card-grid">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <h3>{vehicle.make} {vehicle.model}</h3>
              <p><strong>Year:</strong> {vehicle.year}</p>
              <p><strong>Price:</strong> KES {vehicle.price}</p>
              <p><strong>Registration:</strong> {vehicle.registration}</p>
              <p><strong>Mileage:</strong> {vehicle.mileage}</p>
              <button onClick={() => handlePost(vehicle.id)}>
                Post Listing
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditListings;
