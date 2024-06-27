import React from 'react'
import { SlOptions } from "react-icons/sl";

const Patient = ({patient}) => {
  return (
    
    <div className='patientCard'>
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
  )
}

export default Patient