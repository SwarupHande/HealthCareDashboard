import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Patient from './Patient';

const PatentList = ({patients,handleOnClick}) => {
  return (
    <div className='patientList sub-container'>
        <div className="heading">
            <h2>Patients</h2>
            <IoSearchOutline/>
        </div>
        <div className="patients">
            {patients && patients.map((patient,i)=><Patient key={i} handleOnClick={handleOnClick} patient={patient}/>) }
        </div>
    </div>
  )
}

export default PatentList