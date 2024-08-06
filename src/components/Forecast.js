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
            <p style={{fontSize:30}}>wed</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
          </div>
        })
      }
      </div>
    </>
  )
}

export default Forecast
