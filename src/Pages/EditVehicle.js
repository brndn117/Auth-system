import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPage.css';

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [sellerID, setSellerID] = useState('');
  const [error, setError] = useState(null);

  // Fetch current vehicle data on mount
  useEffect(() => {
    fetch(`http://localhost:5001/api/vehicle/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch vehicle data');
        return res.json();
      })
      .then((data) => {
        setMake(data.make);
        setModel(data.model);
        setYear(data.year);
        setPrice(data.price);
        setSellerID(data.sellerID);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  // Handle form submission to update vehicle
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5001/api/admin/vehicle/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ make, model, year, price, sellerID }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Failed to update vehicle');
      }

      alert('Vehicle updated successfully!');
      navigate('/admin-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="edit-page-container">
      <h1>Edit Vehicle (ID: {id})</h1>

      {error && <p className="error">{error}</p>}

      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Make</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Enter vehicle make"
          required
        />

        <label>Model</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter vehicle model"
          required
        />

        <label>Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Enter vehicle year"
          required
        />

        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price (KES)"
          required
        />

        <label>Seller ID</label>
        <input
          type="text"
          value={sellerID}
          onChange={(e) => setSellerID(e.target.value)}
          placeholder="Enter seller ID"
          required
        />

        <button type="submit">Update Vehicle</button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => navigate('/admin-dashboard')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditVehicle;
