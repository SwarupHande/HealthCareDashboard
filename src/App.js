import React, { useEffect, useRef, useState } from "react";
import NavBar from "./Components/NavBar";
import PatentList from "./Components/PatentList";
import DiagnosisHistory from "./Components/DiagnosisHistory";
import PatientProfile from "./Components/PatientProfile";
import DiagnosticList from "./Components/DiagnosticList";
import LabResults from "./Components/LabResults";

const App = () => {
  let userName = "coalition";
  let password = "skills-test";
  let auth = btoa(`${userName}:${password}`);
  const fetchData = async () => {
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev/",
      { headers: { Authorization: `Basic ${auth}` } }
    );
    const data = await response.json();
    console.log(data);
    setPatients(data);
    console.log(patients);
  };
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <div className="container">
        <div className="patient-list">
          <PatentList patients={patients} />
        </div>
        <div className="patient-data">
          <div className="diagnosis-list-history">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="profile-lab-result">
            <PatientProfile />
            <LabResults />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
