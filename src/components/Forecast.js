import React from 'react'

const Forecast = () => {
  const data=[1,2,3,4,5];
  return (
    <>
      <div className="Forecast">
        <p style={{fontSize:"medium",textTransform:'uppercase' }}> 3 hour step forecast</p>
      </div>
      <hr style={{marginTop:"1rem",marginRight:"1rem"}}/>
      <div className="timeForecast">
      {
        data.map((data,index)=>{
          return <div key={index} className='weatherDetailInTime'>
            <p style={{fontWeight:300,fontSize: "1.250rem"}}>wed</p>
            <img  style={{marginTop: "0.25rem",marginBottom: "0.25rem",width: "3rem" }} src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
            <p style={{fontWeight:500}}>12°</p>
          </div>
        })
      }
      </div>
    </>
  )
}

export default Forecast
