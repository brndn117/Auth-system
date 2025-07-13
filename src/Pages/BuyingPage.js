import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import carData from '../TestData/carData'; // Make sure path is correct
import './BuyingPage.css';

const carsPerPage = 6;

const BuyingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(carData.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carData.slice(indexOfFirstCar, indexOfLastCar);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
          {currentCars.map(car => (
            <div
              key={car.id}
              className="car-card"
              onClick={() => navigate(`/vehicle/${car.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
              <div className="badge">{car.badge}</div>
              <h4>{car.make} {car.model}</h4>
              <p>{car.gearbox} • {car.fuelType} • {car.engine}</p>
              <p className="price">Ksh{car.price.toLocaleString()}</p>
              <p className="discount">Saving ksh{car.discount.toLocaleString()} off SaveCar</p>
              <p className="year-mileage">{car.year} • {car.mileage}</p>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="pagination">
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              ◀
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? 'active-page' : ''}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              ▶
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default BuyingPage;




// This code defines a BuyingPage component that renders a sidebar with various filters for buying cars and a grid of car listings.