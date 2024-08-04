import React from 'react'
import './weather.css'
import {BiSearch, BiCurrentLocation} from "react-icons/bi"

const Inputs = () => {
  return (
    <>
    <div className="secondNavbar">
    <div className="searchBar">
      <input type="text" placeholder='Search by city..'/>
      <BiSearch size={30} style={{cursor:'pointer',transition:'ease-out' ,}}/>
      <BiCurrentLocation size={30} style={{cursor:'pointer',transition:'ease-out' ,}}/>
    </div>
    <div className="degreeChanger">
      <button>°C </button> <p>|</p>
      <button>°F</button>
    </div>
    </div>
    
    </>
    
  )
}

export default Inputs
