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
    setPatients(data);
  };
  const [patients, setPatients] = useState([]);
  const [period, setPeriod] = useState(6);
  const handleSelect = (period) => {
    setPeriod(period);
    console.log(period);
  }
  const [id,setId] = useState()
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if(!id&&patients.length>0){
      setId(patients[0].phone_number);
    }
  }, [patients])
  const currPatient = (patients.length>0)&&(!!id)&&patients.find(({phone_number})=>phone_number===id); 
  const handleOnClick = (phone) =>{
    setId(phone);
    console.log(phone);
  }

  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <div className="container">
        <div className="patient-list">
          <PatentList patients={patients} handleOnClick={handleOnClick}/>
        </div>
        <div className="patient-data">
          <div className="diagnosis-list-history">
          {currPatient && <DiagnosisHistory patientData = {currPatient} handleSelect={handleSelect}/>} 
          {currPatient && <DiagnosticList patientData={currPatient}/>}
          </div>
          <div className="profile-lab-result">
          {currPatient && <PatientProfile patientData={currPatient}/>}
          {currPatient && <LabResults patientData={currPatient}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
