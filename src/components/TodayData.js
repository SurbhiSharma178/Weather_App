import React from 'react'
import './weather.css';

const TodayData = ({setQuery}) => {

  const cities =[
    {
      id:1,
      name:'Ajmer',
    },
    {
      id:2,
      name:'Jaipur',
    },
    {
      id:3,
      name:'Udaipur',
    },
    {
      id:2,
      name:'Jodhpur',
    },
    {
      id:2,
      name:'Bikanar',
    }
  ]
    
  
  return (
    <>
    <div className="upper-box">
      <div className="nav">
      {
        cities.map((city)=>{
            return <button onClick={()=>setQuery({q:city.name})}>{city.name}</button>
        })
      }
      </div>
      
      </div>

    </>
  )
}

export default TodayData
