import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPage.css';

const EditSeller = () => {
  const { id } = useParams();

  return (
    <div className="edit-page-container">
      <h1>Edit Seller (ID: {id})</h1>

      <form className="edit-form">
        <label>Name</label>
        <input type="text" placeholder="Enter seller name" />

        <label>Email</label>
        <input type="email" placeholder="Enter seller email" />

        <label>Phone Number</label>
        <input type="text" placeholder="Enter phone number" />

        <button type="submit">Update Seller</button>
        <button type="button" className="cancel-btn">Cancel</button>
      </form>
    </div>
  );
};

export default EditSeller;
