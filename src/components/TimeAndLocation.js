import React from 'react'
import './weather.css'

const TimeAndLocation = ({weather:{formattedLocalTime,name,country},}) => {
  return (
    <>
      <div className="timeAndLocation">
      <p style={{fontSize: "1.25rem",lineHeight: "1.75rem",fontWeight: 200 }}>
        {formattedLocalTime}
      </p>
    </div>
    <div className="address">
      <p style={{fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:500}}>{`${name},${country}`}</p>
    </div>
    </>
  )
}

export default TimeAndLocation
