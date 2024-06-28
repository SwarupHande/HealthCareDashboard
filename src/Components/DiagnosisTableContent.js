import React from 'react'

const DiagnosisTableContent = ({data}) => {
  return (
    <tr>
        <td>{data.name}</td>
        <td>{data.description}</td>
        <td>{data.status}</td>
    </tr>
  )
}

export default DiagnosisTableContent