import React from 'react'
import InfoBox from './InfoBox'
import { GrSchedule } from "react-icons/gr";
import { BsGenderFemale } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
const PatientProfile = ({patientData}) => {
  if(patientData)
  return (
    <div className='patientProfile sub-container'>
      <div className='patientCenterElem'>
        <img src={patientData.profile_picture} alt="ProfileImage" />
        <h2>{patientData.name}</h2>
      </div>
        <div className="profileSub">
          <div className="icon">
          <GrSchedule/>
          </div>
          <InfoBox title={"Date Of Birth"} subInfo={patientData.date_of_birth} />
        </div>
        <div className="subProfile">
        <div className="profileSub">
          <div className="icon">
          <BsGenderFemale/>
          </div>
          <InfoBox title={"Gender"} subInfo={patientData.gender} />
        </div>
        <div className="profileSub">
          <div className="icon">
          <FaPhoneAlt/>
          </div>
          <InfoBox title={"Contact Info"} subInfo={patientData.phone_number} />
        </div>
        <div className="profileSub">
          <div className="icon">
          <FaPhoneAlt/>
          </div>
          <InfoBox title={"Emergency Contacts"} subInfo={patientData.emergency_contact} />
        </div>
        <div className="profileSub">
          <div className="icon">
          <MdOutlineVerifiedUser/>
          </div>
          <InfoBox title={"Insurance Provider"} subInfo={patientData.insurance_type} />
        </div>
        </div>
        
        <div className='patientCenterElem'>
        <button className='btn'>
          Show All Information
        </button>
        </div>
    </div>
  )
  return null
}

export default PatientProfile