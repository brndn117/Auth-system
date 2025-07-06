import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import carData from '../TestData/carData';
import './VehicleDetailPage.css';

const VehicleDetailPage = () => {
  const { id } = useParams();
  const car = carData.find(car => car.id === parseInt(id));
  const [mainImage, setMainImage] = useState(car?.images?.[0] || car?.image);

  if (!car) {
    return <div style={{ padding: 40 }}>Car not found.</div>;
  }

  const carImages = car.images || [car.image];

  return (
    <>
      <Navbar />
      <div className="vehicle-page">
        <div className="vehicle-images">
          <div className="thumbnail-column">
            {carImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`car-${idx}`}
                onClick={() => setMainImage(img)}
                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="main-image-container">
            <img src={mainImage} alt="Main Car" className="main-image" />
          </div>
        </div>

        <div className="vehicle-info">
          <h1>{car.make} {car.model} ({car.year})</h1>
          <h2>{car.subtitle || `${car.engine} ${car.fuelType} ${car.gearbox}`}</h2>
          <p className="vehicle-price">Ksh {car.price.toLocaleString()}</p>

          <div className="info-table">
            <div><strong>Year:</strong> {car.year}</div>
            <div><strong>Doors:</strong> {car.doors || 'N/A'}</div>
            <div><strong>Mileage:</strong> {car.mileage}</div>
            <div><strong>Seats:</strong> {car.seats || 'N/A'}</div>
            <div><strong>Engine:</strong> {car.engine}</div>
            <div><strong>Color:</strong> {car.color || 'N/A'}</div>
            <div><strong>Transmission:</strong> {car.gearbox}</div>
            <div><strong>Reg Number:</strong> {car.registration || 'N/A'}</div>
            <div><strong>Fuel:</strong> {car.fuelType}</div>
            <div><strong>Previous Owners:</strong> {car.previousOwners || 'N/A'}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetailPage;

