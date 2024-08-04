import React from 'react'
import './weather.css'

const TimeAndLocation = () => {
  return (
    <>
      <div className="timeAndLocation">
      <p style={{fontSize: "1.25rem",lineHeight: "1.75rem",fontWeight: 200 }}>Tuesday,14 May 2024 | Local time : 09:36PM</p>
    </div>
    <div className="address">
      <p style={{fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:500}}>Bhilwara,In</p>
    </div>
    </>
  )
}

export default TimeAndLocation
