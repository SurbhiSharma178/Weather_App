import React from 'react'
import "./weather.css"
import {FiThermometer} from "react-icons/fi";
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import {GiSunrise , GiSunset} from "react-icons/gi"
import {MdKeyboardArrowUp , MdKeyboardArrowDown} from "react-icons/md"

const TemoAndDetails = ({weather:{
  details,
  icon,
  temp,
  temp_min,
  temp_max,
  sunrise,
  sunset,speed,
  humidity,
  feels_like,
}}) => {

  const verticalDetail=[
    {
      id:1,
      Icon:FiThermometer,
      title:"Real Feel",
      value:`${feels_like.toFixed()}°`
    },
    {
      id:2,
      Icon: BiSolidDropletHalf,
      title:"Humidity",
      value:`${humidity.toFixed()}°`
    },
    {
      id:3,
      Icon:FiWind,
      title:"Wind",
      value:`${speed.toFixed()}km/h`
    },
  ];

  const horizontalDetails=[
    {
      id:1,
      Icon:GiSunrise,
      title:"Sunrise",
      value:sunrise,
    },
    {
      id:2,
      Icon: GiSunset,
      title:"Sunset",
      value:sunset
    },
    {
      id:3,
      Icon:MdKeyboardArrowUp,
      title:"High",
      value:`${temp_max.toFixed()}°` 
    },
    {
      id:4,
      Icon:MdKeyboardArrowDown,
      title:"Low",
      value:`${temp_min.toFixed()}°` 
    },
  ];

  return (
    <>
      <div className="currentWeather">
        <p>{details}</p>
      </div>
      <div className='weatherdetail'>
        <img  style={{width:40}}src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"  />
        <p style={{fontWeight:500, fontSize:"2.75rem"}}>{`${temp.toFixed()}°`}</p>

        <div className="verticalDetails">
          {
            verticalDetail.map(({id,Icon,title ,value})=>{
              return <div key={id} className='detail'><Icon style={{size:18,marginRght:"0.25rem" }}/>{`${title} :`} <span>{value}</span></div>
              
            })
          }
        </div>
      </div>
      
      <div className="horizonatalDetail">
          {
            horizontalDetails.map(({id,Icon,title,value})=>{
              return <div key={id} className='horizontalIcon'> 
              <Icon size={30}/>
              <p style={{marginLeft:"0.25rem",fontWeight:300}}> {`${title} :`}
                <span>{value}</span>
                </p>
              </div>
            })
          }
        </div>
    </>
  )
}

export default TemoAndDetails
