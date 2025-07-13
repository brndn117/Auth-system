import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPage.css';

const EditBuyer = () => {
  const { id } = useParams();

  return (
    <div className="edit-page-container">
      <h1>Edit Buyer (ID: {id})</h1>

      <form className="edit-form">
        <label>Name</label>
        <input type="text" placeholder="Enter buyer name" />

        <label>Email</label>
        <input type="email" placeholder="Enter buyer email" />

        <label>Phone Number</label>
        <input type="text" placeholder="Enter phone number" />

        <button type="submit">Update Buyer</button>
        <button type="button" className="cancel-btn">Cancel</button>
      </form>
    </div>
  );
};

export default EditBuyer;
