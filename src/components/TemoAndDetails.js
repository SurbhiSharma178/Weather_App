import React from 'react'
import "./weather.css"
import {FiThermometer} from "react-icons/fi";
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import {GiSunrise , GiSunset} from "react-icons/gi"
import {MdKeyboardArrowUp , MdKeyboardArrowDown} from "react-icons/md"

const TemoAndDetails = () => {

  const verticalDetail=[
    {
      id:1,
      Icon:FiThermometer,
      title:"Real Feel",
      value:"22°"
    },
    {
      id:2,
      Icon: BiSolidDropletHalf,
      title:"Humidity",
      value:"346%"
    },
    {
      id:3,
      Icon:FiWind,
      title:"Wind",
      value:"11km/h"
    },
  ];

  const horizontalDetails=[
    {
      id:1,
      Icon:GiSunrise,
      title:"Sunrise",
      value:"04.32AM"
    },
    {
      id:2,
      Icon: GiSunset,
      title:"Sunset",
      value:"07:45PM"
    },
    {
      id:3,
      Icon:MdKeyboardArrowUp,
      title:"High",
      value:"37°"
    },
    {
      id:4,
      Icon:MdKeyboardArrowDown,
      title:"Low",
      value:"15°"
    },
  ];

  return (
    <>
      <div className="currentWeather">
        <p>Rain</p>
      </div>
      <div className='weatherdetail'>
        <img  style={{width:40}}src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"  />
        <p style={{fontWeight:500, fontSize:"2.75rem"}}>34°</p>

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
