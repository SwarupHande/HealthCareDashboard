import React from 'react'
import LabResultCard from './LabResultCard';
const LabResults = ({patientData}) => {
  return (
    <div className='sub-container' id='lab-result'>
        <h2>Lab Results</h2>
        <div className="results">
        {patientData.lab_results.map((results)=><LabResultCard results={results}/>)}
        </div>
    </div>
  )
}

export default LabResults