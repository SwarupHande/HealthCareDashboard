import React from "react";
import heartImage from "./Assets/HeartBPM.jpg";
import temperatureImage from "./Assets/temperature.jpg";
import respiratoryImage from "./Assets/respiratory rate.jpg";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { patientData as chartData } from "./Assets/PatientData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const DiagnosisHistory = ({ patientData,handleSelect }) => {
  // console.log(patientData);
  const options = {
    tension: 0.4,
    responsive: true,
    borderWidth: 2,
    pointBorderWidth: 7,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const systolic_bp =
    patientData.diagnosis_history[0].blood_pressure.systolic.value;
  const diastolic_bp =
    patientData.diagnosis_history[0].blood_pressure.diastolic.value;
  const bpm = patientData.diagnosis_history[0].heart_rate;
  const temp = patientData.diagnosis_history[0].temperature;
  const respiratory = patientData.diagnosis_history[0].respiratory_rate;
  return (
    <div className="diagnosisHistory sub-container">
      <h2>Diagnosis History</h2>
      <div className="chart-container">
        <div className="chart">
          <div className="header">
            <h3>Blood Pressure</h3>
            <select name="Last 6 Months" id="selector" onChange = {(e)=> handleSelect(Number(e.target.value))}>
              <option value="3">Last 3 Months</option>
              <option value="6">Last 6 Months</option>
              <option value="9">Last 9 Month</option>
            </select>
          </div>
          <div className="chart-box">
            <Line
              options={options}
              data={{
                labels: patientData.diagnosis_history.map(
                  (data) => data.month + " " + data.year
                ),
                datasets: [
                  {
                    label: "Blood Pressure",
                    data: patientData.diagnosis_history.map(
                      (data) => data.blood_pressure.systolic.value
                    ),
                    borderColor: "#C26EB4",
                  },
                  {
                    label: "Blood Pressure",
                    data: patientData.diagnosis_history.map(
                      (data) => data.blood_pressure.diastolic.value
                    ),
                    borderColor: "#7E6CAB",
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="chart-result">
          <h4><div className="sys avgbox"></div> Systolic</h4>
          <h2>{systolic_bp}</h2>
          <div className="bpm-result">
            <span className="arrow">
              {systolic_bp > 120 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
            <p>
              {systolic_bp > 120 ? "Higher than Average" : "Lower than Average"}
            </p>
          </div>
          <hr />
          <h4><div className="dia avgbox"></div> Diastolic</h4>
          <h2>{diastolic_bp}</h2>
          <div className="bpm-result">
            <span className="arrow">
              {diastolic_bp > 80 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
            <p>
              {diastolic_bp > 80 ? "Higher than Average" : "Lower than Average"}
            </p>
          </div>
        </div>
      </div>
      <div className="status">
        <div className="respiratoryRate status-box">
          <img src={respiratoryImage} alt="respiratory Image" />
          <p>Respiratory Rate</p>
          <h3>{respiratory.value} bpm</h3>
          <p className="result">{respiratory.levels}</p>
        </div>
        <div className="temperature status-box">
          <img src={temperatureImage} alt="temperature" />
          <p>Temperature</p>
          <h3>{temp.value}°F</h3>
          <p className="result">{temp.levels}</p>
        </div>
        <div className="heartRate status-box">
          <img src={heartImage} alt="Heart Image" />
          <p>Heart Rate</p>
          <h3>{bpm.value} bpm</h3>
          <p className="result">{bpm.levels}</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
