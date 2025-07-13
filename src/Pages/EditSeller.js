import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPage.css';

const EditSeller = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  // Fetch current seller data on mount
  useEffect(() => {
    fetch(`http://localhost:5001/api/seller/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch seller data');
        return res.json();
      })
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  // Handle form submission to update seller
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5001/api/admin/seller/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phoneNumber }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Failed to update seller');
      }

      alert('Seller updated successfully!');
      navigate('/admin-dashboard'); // Return to dashboard (will fetch fresh data)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="edit-page-container">
      <h1>Edit Seller (ID: {id})</h1>

      {error && <p className="error">{error}</p>}

      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter seller name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter seller email"
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          required
        />

        <button type="submit">Update Seller</button>
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

export default EditSeller;
