import React from "react";
import heartImage from "./Assets/HeartBPM.jpg";
import temperatureImage from "./Assets/temperature.jpg";
import respiratoryImage from "./Assets/respiratory rate.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale
} from "chart.js";
import { Line } from "react-chartjs-2";
import { patientData as chartData } from "./Assets/PatientData";
ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)
const DiagnosisHistory = () => {
  
    
    
  return (
    <div className="diagnosisHistory sub-container">
      <h2>Diagnosis History</h2>
      <div className="chart-container">
        <div className="chart">
        <div className="header">
          <h3>Blood Pressure</h3>
          <select name="Last 6 Months" id="selector">
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last 3 Months">Last 3 Months</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>
          <div className="chart-box">
            <Line options={chartData.options} data={chartData} />
          </div>
          
        </div>
        <div className="chart-result">
            <h4>Systolic</h4>
            <h2>160</h2>
            <p>Higher than Average</p>
            <hr />
            <h4>Diastolic</h4>
            <h2>78</h2>
            <p>Lower than Average</p>
          </div>
      </div>
      <div className="status">
        <div className="respiratoryRate status-box">
          <img src={respiratoryImage} alt="respiratory Image" />
          <p>Respiratory Rate</p>
          <h3>20 bpm</h3>
          <p className="result">Normal</p>
        </div>
        <div className="temperature status-box">
          <img src={temperatureImage} alt="temperature" />
          <p>Temperature</p>
          <h3>98.6°F</h3>
          <p className="result">Normal</p>
        </div>
        <div className="heartRate status-box">
          <img src={heartImage} alt="Heart Image" />
          <p>Heart Rate</p>
          <h3>70 bpm</h3>
          <p className="result">Lower Than Average</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
