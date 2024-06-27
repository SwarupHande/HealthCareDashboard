import React from 'react'
import InfoBox from './InfoBox'
import { GrSchedule } from "react-icons/gr";
import { BsGenderFemale } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
const PatientProfile = () => {
  return (
    <div className='patientProfile sub-container'>
      <div className='patientCenterElem'>
        <img src="https://fedskillstest.ct.digital/4.png" alt="ProfileImage" />
        <h2>Jessica Taylor</h2>
      </div>
        <div className="profileSub">
          <div className="icon">
          <GrSchedule/>
          </div>
          <InfoBox title={"Date Of Birth"} subInfo={"August 23, 1996"} />
        </div>
        <div className="subProfile">
        <div className="profileSub">
          <div className="icon">
          <BsGenderFemale/>
          </div>
          <InfoBox title={"Gender"} subInfo={"Female"} />
        </div>
        <div className="profileSub">
          <div className="icon">
          <FaPhoneAlt/>
          </div>
          <InfoBox title={"Contact Info"} subInfo={"(415) 555-4564"} />
        </div>
        <div className="profileSub">
          <div className="icon">
          <FaPhoneAlt/>
          </div>
          <InfoBox title={"Emergency Contacts"} subInfo={"(415) 555-5676"} />
        </div>
        <div className="profileSub">
          <div className="icon">
          <MdOutlineVerifiedUser/>
          </div>
          <InfoBox title={"Insurance Provider"} subInfo={"Sunrise Health Assurance"} />
        </div>
        </div>
        
        <div className='patientCenterElem'>
        <button className='btn'>
          Show All Information
        </button>
        </div>
    </div>
  )
}

export default PatientProfile