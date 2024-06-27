import React from "react"
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GrSchedule } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import logo from "./Assets/TestLogo.png"
const NavBar = () => {
  return (
    <div>
        <nav className="navBar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="menu">
              <ul>
                <li><IoHomeOutline/> Overview</li>
                <li><CiUser/> Patients</li>
                <li><GrSchedule/> Schedule</li>
                <li><FiMessageSquare/> Message</li>
                <li><FaRegCreditCard/> Transactions</li>
              </ul>
            </div>
            <div className="DrProfile">
              <div className="DrImage">
                <img src="https://fedskillstest.ct.digital/2.png" alt="ImageDr" />
              </div>
              <div className="DrInfo">
                <h5>Dr. Jose Simmons</h5>
                <p className="drTitle">General Practitioner</p>
              </div>
              <div className="setting">
                <MdOutlineSettings/>
                <SlOptionsVertical/>
              </div>
            </div>
            
        </nav>
    </div>
  )
}

export default NavBar 