import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPage.css';

const EditBuyer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch buyer data on mount
  useEffect(() => {
    const fetchBuyer = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/admin/buyer/${id}`);

        console.log('Fetching:', res.status, res.statusText); // Log status code

        if (!res.ok) {
          throw new Error(`Buyer not found (Status ${res.status})`);
        }

        const data = await res.json();

        setName(data.name);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching buyer:', err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBuyer();
  }, [id]);

  // ✅ Submit updated buyer info
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5001/api/admin/buyer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Update failed');
      }

      alert('Buyer updated successfully!');
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Update error:', err.message);
      setError(err.message);
    }
  };

  // ✅ UI
  if (loading) return <div className="edit-page-container"><p>Loading buyer info...</p></div>;

  return (
    <div className="edit-page-container">
      <h1>Edit Buyer (ID: {id})</h1>

      {error && <p className="error">Error: {error}</p>}

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
