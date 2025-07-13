import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPage.css';

const EditBuyer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  // Fetch current buyer data on mount
  useEffect(() => {
    fetch(`http://localhost:5001/api/buyer/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch buyer data');
        return res.json();
      })
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  // Handle form submission to update buyer
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5001/api/admin/buyer/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phoneNumber }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Failed to update buyer');
      }

      alert('Buyer updated successfully!');
      navigate('/admin-dashboard'); // Go back to dashboard (which will fetch fresh data)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="edit-page-container">
      <h1>Edit Buyer (ID: {id})</h1>

      {error && <p className="error">{error}</p>}

      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter buyer name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter buyer email"
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

        <button type="submit">Update Buyer</button>
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

export default EditBuyer;
