import React from 'react';
import Navbar from '../components/Navbar';
import carData from '../TestData/carData'; // Make sure path is correct
import './BuyingPage.css';

const BuyingPage = () => {
  return (
    <>
      <Navbar />
      <div className="buying-page">
        <aside className="filters">
          <h3 className="clear-filters">Clear filters</h3>

          <div className="filter-group">
            <label>Price</label>
            <input type="range" min="1000" max="100000" />
          </div>

          <div className="filter-group">
            <label>Make</label>
            <select>
              <option>Audi</option>
              <option>BMW</option>
              <option>Toyota</option>
              <option>Hyundai</option>
              <option>Kia</option>
              <option>Volvo</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Body Style</label>
            <select>
              <option>SUV</option>
              <option>Saloon</option>
              <option>Hatchback</option>
              <option>Convertible</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Gearbox</label>
            <select>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Fuel Type</label>
            <select>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Engine</label>
            <select>
              <option>1.0L</option>
              <option>1.5L</option>
              <option>2.0L</option>
              <option>Electric</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Colour</label>
            <select>
              <option>Black</option>
              <option>White</option>
              <option>Grey</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Doors</label>
            <select>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Seats</label>
            <select>
              <option>2</option>
              <option>4</option>
              <option>5</option>
              <option>7</option>
            </select>
          </div>
        </aside>

        <main className="car-grid">
          {carData.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
              <div className="badge">{car.badge}</div>
              <h4>{car.make} {car.model}</h4>
              <p>{car.gearbox} • {car.fuelType} • {car.engine}</p>
              <p className="price">Ksh{car.price.toLocaleString()}</p>
              <p className="discount">Saving £{car.discount.toLocaleString()} off RRP</p>
              <p className="year-mileage">{car.year} • {car.mileage}</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default BuyingPage;

// This code defines a BuyingPage component that renders a sidebar with various filters for buying cars and a grid of car listings.