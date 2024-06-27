import React from 'react'


const InfoBox = ({title,subInfo}) => {
  return (
        <div className='info'>
            <p>{title}</p>
            <h5>{subInfo}</h5>
        </div>
  )
}

export default InfoBox