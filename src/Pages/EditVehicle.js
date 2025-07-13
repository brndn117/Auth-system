import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPage.css';

const EditVehicle = () => {
  const { id } = useParams();

  return (
    <div className="edit-page-container">
      <h1>Edit Vehicle (ID: {id})</h1>

      <form className="edit-form">
        <label>Make</label>
        <input type="text" placeholder="Enter vehicle make" />

        <label>Model</label>
        <input type="text" placeholder="Enter vehicle model" />

        <label>Year</label>
        <input type="text" placeholder="Enter vehicle year" />

        <label>Price</label>
        <input type="text" placeholder="Enter price (KES)" />

        <label>Seller ID</label>
        <input type="text" placeholder="Enter seller ID" />

        <button type="submit">Update Vehicle</button>
        <button type="button" className="cancel-btn">Cancel</button>
      </form>
    </div>
  );
};

export default EditVehicle;
