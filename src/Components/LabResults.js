import React from 'react'
import { FiDownload } from "react-icons/fi";
// import { Scrollbar } from 'react-scrollbars-custom';

const LabResults = () => {
  return (
    < div className='sub-container' id='lab-result'>
        <h2>Lab Results</h2>
        <div className='lab-results'>
            <p>Blood Tests </p>
            <FiDownload/>
        </div>
    </div>
  )
}

export default LabResults