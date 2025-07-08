import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './ReportPage.css';

import {
  FaCar, FaGasPump, FaCogs, FaPalette, FaRoad,
  FaTools, FaShieldAlt, FaIndustry, FaGlobe, FaCalendarAlt, FaTachometerAlt
} from 'react-icons/fa';

const ReportPage = () => {
  const { vin } = useParams();
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/verify_vehicle/${vin}`)
      .then(response => {
        if (response.data.status === 'found') {
          setCarData(response.data.data);
        } else {
          setCarData(null);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
        setCarData(null);
      });
  }, [vin]);

  if (!carData) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', color: 'black' }}>
        Loading or No Data Found for VIN: {vin}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="report-page">

        {/* Top Banner */}
        <div className="top-banner">
          <div className="car-header-info">
            <h1>{carData.make} {carData.model}</h1>
            <p className="vin-number">VIN: {carData.VIN}</p>
          </div>
        </div>

        {/* Section 1: Basic Info */}
        <section className="report-section glassy-box">
          <div className="details-grid-3x3">
            <div><FaIndustry /> Manufacturer: {carData.manufacturer}</div>
            <div><FaCalendarAlt /> Manufactured Year: {carData.manufacturedYear}</div>
            <div><FaCar /> Model: {carData.model}</div>
            <div><FaCogs /> Gearbox: {carData.gearbox}</div>
            <div><FaGasPump /> Fuel Type: {carData.fuelType}</div>
            <div><FaPalette /> Body Type: {carData.bodyType}</div>
            <div><FaTachometerAlt /> Engine: {carData.engineSize}</div>
            <div><FaTachometerAlt /> Power: {carData.enginePower}</div>
            <div><FaGlobe /> Country: {carData.country}</div>
          </div>
        </section>

        {/* Section 2: Mileage & Inspection */}
        <section className="report-section glassy-box">
          <h2>Mileage & Inspection</h2>
          <p><FaRoad /> Mileage: {carData.mileage} km</p>
          <p>{carData.tampering ? "⚠️ Possible tampering detected" : "✅ No signs of tampering"}</p>
          <p>🗓️ Last Inspection: {new Date(carData.inspectionDate).toLocaleDateString()}</p>
          <p>🔍 Inspector: {carData.inspectorName}</p>
        </section>

        {/* Section 3: Damage History & Remarks */}
        <section className="report-section glassy-box">
          <h2>Damage Report</h2>
          <p><FaTools /> {carData.accidentHistory || "No accident history reported"}</p>
          <p>📝 Remarks: {carData.remarks}</p>
        </section>

        {/* Section 4: Theft Check */}
        <section className="report-section glassy-box">
          <h2>Theft Check</h2>
          <p><FaShieldAlt /> {carData.stolen ? "⚠️ Vehicle appears in theft databases" : "✅ No theft records found"}</p>
        </section>

      </div>
    </>
  );
};

export default ReportPage;
