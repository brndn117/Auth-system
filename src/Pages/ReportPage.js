import React from 'react';
import './ReportPage.css';
import Navbar from '../components/Navbar';
import { FaCar, FaGasPump, FaCogs, FaPalette, FaKey, FaRoad, FaTools, FaShieldAlt, FaCamera } from 'react-icons/fa';

const ReportPage = () => {
  return (
    <>
      <Navbar /> 
      <div className="report-page">
        
        {/* Section 1: Vehicle Details */}
        <section className="report-section">
          <h2>Vehicle Details</h2>
          <div className="details-grid">
            <div><FaCar /> Make: Toyota</div>
            <div><FaGasPump /> Fuel Type: Petrol</div>
            <div><FaCogs /> Gearbox: Automatic</div>
            <div><FaPalette /> Color: Black</div>
            <div><FaKey /> VIN: X1234567890</div>
          </div>
        </section>

        {/* Section 2: Mileage Check */}
        <section className="report-section">
          <h2>Mileage & Tampering</h2>
          <p><FaRoad /> Mileage appears consistent: 45,000 km</p>
          <p>No signs of tampering</p>
        </section>

        {/* Section 3: Damage History */}
        <section className="report-section">
          <h2>Damage Report</h2>
          <p><FaTools /> Accident history found in 2022 (left front panel)</p>
          <p>No other damages reported</p>
        </section>

        {/* Section 4: Theft Check */}
        <section className="report-section">
          <h2>Theft Check</h2>
          <p><FaShieldAlt /> No records found in stolen vehicle databases</p>
        </section>

        {/* Section 5: Car Images */}
        <section className="report-section">
          <h2>Vehicle Images</h2>
          <div className="images-grid">
            <img src="/car1.jpg" alt="Front" />
            <img src="/car2.jpg" alt="Back" />
            <img src="/car3.jpg" alt="Interior" />
            <img src="/car4.jpg" alt="Engine" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportPage;

