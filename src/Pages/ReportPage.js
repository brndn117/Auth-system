import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ReportPage.css';
import carReportData from '../TestData/carReportData';

import {
  FaCar, FaGasPump, FaCogs, FaPalette, FaRoad,
  FaTools, FaShieldAlt, FaIndustry, FaGlobe, FaCalendarAlt, FaTachometerAlt
} from 'react-icons/fa';

const ReportPage = () => {
  const { vin } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const foundCar = carReportData.find(car => car.vin === vin);
    setSelectedCar(foundCar);
  }, [vin]);

  if (!selectedCar) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', color: 'white' }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="report-page">

        {/* Top Banner */}
        <div className="top-banner">
          <img src={selectedCar.logo} alt={`${selectedCar.make} logo`} className="car-logo" />
          <div className="car-header-info">
            <h1>{selectedCar.make} {selectedCar.model}</h1>
            <p className="vin-number">VIN: {selectedCar.vin}</p>
          </div>
        </div>

        {/* Section 1: Basic Info Grid */}
        <section className="report-section glassy-box">
          <div className="details-grid-3x3">
            <div><FaIndustry /> Manufacturer: {selectedCar.manufacturer}</div>
            <div><FaCalendarAlt /> Manufactured Year: {selectedCar.manufacturedYear}</div>
            <div><FaCar /> Model: {selectedCar.model}</div>
            <div><FaCogs /> Gearbox: {selectedCar.gearbox}</div>
            <div><FaGasPump /> Fuel Type: {selectedCar.fuelType}</div>
            <div><FaPalette /> Body Type: {selectedCar.bodyType}</div>
            <div><FaTachometerAlt /> Engine: {selectedCar.engineSize}</div>
            <div><FaTachometerAlt /> Power: {selectedCar.enginePower}</div>
            <div><FaGlobe /> Country: {selectedCar.country}</div>
          </div>
        </section>

        {/* Section 2: Mileage & Inspection */}
        <section className="report-section glassy-box">
          <h2>Mileage & Inspection</h2>
          <p><FaRoad /> Mileage: {selectedCar.mileage}</p>
          <p>{selectedCar.tampering ? "⚠️ Possible tampering detected" : "✅ No signs of tampering"}</p>
          <p>🗓️ Last Inspection: {selectedCar.lastInspectionDate}</p>
          <p>🔍 Inspector: {selectedCar.inspectorName}</p>
        </section>

       {/* Section 3: Damage History & Remarks */}
       <section className="report-section glassy-box">
         <h2>Damage Report</h2>
          <p><FaTools /> {selectedCar.accidentHistory || "No accident history reported"}</p>
          <p>📝 Remarks: {selectedCar.remarks || "Vehicle in good condition"}</p>
        </section>


        {/* Section 4: Theft Check */}
        <section className="report-section glassy-box">
          <h2>Theft Check</h2>
          <p><FaShieldAlt /> {selectedCar.stolen ? "⚠️ Vehicle appears in theft databases" : "✅ No theft records found"}</p>
        </section>

        {/* Section 5: Vehicle Images */}
        <section className="report-section glassy-box">
          <h2>Vehicle Images</h2>
          <div className="images-grid">
            {selectedCar.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Car View ${idx + 1}`} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportPage;

