import React from 'react'
import DiagnosisTableContent from './DiagnosisTableContent'

const DiagnosticList = ({patientData}) => {
  return (
    <div className="diagnosticList sub-container">
      <h3>Diagnostic List</h3>
      <div className="table-list">

        <table className='list'>
          <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            {patientData.diagnostic_list.map((elem)=><DiagnosisTableContent data={elem}/>)}
          </tbody>
          

        </table>
      </div>
    </div>
  )
}

export default DiagnosticList