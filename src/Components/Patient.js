import React from 'react'
import { SlOptions } from "react-icons/sl";

const Patient = ({patient, handleOnClick}) => {
  
  if(patient){
  return (
    <div className='patientCard' onClick={()=>handleOnClick(patient.phone_number)}>
        <div className="left">
            <img src={patient.profile_picture} alt="PatientImage" />
            <div className="information">
                <h3 className='patientName'>{patient.name}</h3>
                <p>{patient.gender}, {patient.age}</p>
            </div>
        </div>
        <div className="right">
            <SlOptions/>
        </div>
    </div>
  )}
  return null
}

export default Patient