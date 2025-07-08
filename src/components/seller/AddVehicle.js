import React, { useState } from 'react';
import './AddVehicle.css';

const AddVehicle = () => {
  const [carData, setCarData] = useState({
    sellerId: '', // ✅ Required for backend
    make: '',
    model: '',
    year: '',
    price: '',
    fuelType: '',
    engine: '',
    gearbox: '',
    mileage: '',
    discount: '',
    doors: '',
    seats: '',
    color: '',
    registration: '',
    previousOwners: '',
    badge: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5002/api/add-vehicle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carData),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage('✅ Vehicle added!');
      setCarData({
        sellerId: '', make: '', model: '', year: '', price: '', fuelType: '',
        engine: '', gearbox: '', mileage: '', discount: '',
        doors: '', seats: '', color: '', registration: '',
        previousOwners: '', badge: ''
      });
    } else {
      setMessage('❌ Failed to add vehicle: ' + result.message);
    }
  };

  return (
    <div className="add-vehicle-form">
      <h2>Add Vehicle Listing</h2>

      <div className="form-grid">
        <input name="sellerId" placeholder="Seller ID" value={carData.sellerId} onChange={handleChange} />
        <input name="make" placeholder="Make" value={carData.make} onChange={handleChange} />
        <input name="model" placeholder="Model" value={carData.model} onChange={handleChange} />
        <input name="year" placeholder="Year" value={carData.year} onChange={handleChange} />
        <input name="price" placeholder="Price" value={carData.price} onChange={handleChange} />
        <input name="fuelType" placeholder="Fuel Type" value={carData.fuelType} onChange={handleChange} />
        <input name="engine" placeholder="Engine" value={carData.engine} onChange={handleChange} />
        <input name="gearbox" placeholder="Gearbox" value={carData.gearbox} onChange={handleChange} />
        <input name="mileage" placeholder="Mileage" value={carData.mileage} onChange={handleChange} />
        <input name="discount" placeholder="Discount" value={carData.discount} onChange={handleChange} />
        <input name="doors" placeholder="Doors" value={carData.doors} onChange={handleChange} />
        <input name="seats" placeholder="Seats" value={carData.seats} onChange={handleChange} />
        <input name="color" placeholder="Color" value={carData.color} onChange={handleChange} />
        <input name="registration" placeholder="Registration" value={carData.registration} onChange={handleChange} />
        <input name="previousOwners" placeholder="Previous Owners" value={carData.previousOwners} onChange={handleChange} />
        <input name="badge" placeholder="Badge (e.g., New in stock)" value={carData.badge} onChange={handleChange} />
      </div>

      <button onClick={handleSubmit}>Add Vehicle</button>
      {message && <p className="message-text">{message}</p>}
    </div>
  );
};

export default AddVehicle;

