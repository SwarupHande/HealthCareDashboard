import React from 'react'
import { FiDownload } from "react-icons/fi";


const LabResultCard = ({results}) => {
  return (
    <div className='resultCard'>
        <div className='lab-results'>
            <p>{results}</p>
            <FiDownload/>
        </div>
    </div>
  )
}

export default LabResultCard