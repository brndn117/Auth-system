import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './NPsell.css';

const NPsell = () => {
  const [numberPlate, setNumberPlate] = useState('');

  const handleSearch = () => {
    console.log('Searching for car with plate:', numberPlate);
    // TODO: Connect to backend here
  };

  const handleInputChange = (e) => {
    setNumberPlate(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="npSell-container">
        <h1 className="npSell-heading">
          <span className="highlight">Enter</span> your car's number plate
        </h1>

        <div className="npSell-search-row">
          <input 
            type="text" 
            className="npSell-input" 
            placeholder="Enter Number-Plate"
            value={numberPlate}
            onChange={handleInputChange}
          />
          <button className="npSell-B" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default NPsell;

