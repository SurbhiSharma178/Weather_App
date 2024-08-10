import React from 'react'

const Forecast = ({title,data}) => {

  return (
    <>
      <div className="Forecast">
        <p style={{fontSize:"medium",textTransform:'uppercase' }}>{title}</p>
      </div>
      <hr style={{marginTop:"1rem",marginRight:"1rem"}}/>
      <div className="timeForecast">
      {
        data.map((d,index)=>{
          return <div key={index} className='weatherDetailInTime'>
            <p style={{fontWeight:300,fontSize: "1.250rem"}}>{d.title}</p>
            <img  style={{marginTop: "0.25rem",marginBottom: "0.25rem",width: "3rem" }} src={d.icon} alt="weather icon" />
            <p style={{fontWeight:500}}>{d.temp}°</p>
          </div>
        })
      }
      </div>
    </>
  )
}

export default Forecast
