import React, { useEffect, useState } from 'react'
import TodayData from './components/TodayData'
import Inputs from './components/Inputs';
import './App.css';
import TimeAndLocation from './components/TimeAndLocation';
import TemoAndDetails from './components/TemoAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './server/weatherServices';



const App = () => {

  const [query,setQuery]=useState({q:'bhilwara'})
  const [units,setUnits]=useState('metric');
  const [weather,setWeather]=useState(null);

  const getWeather=async ()=>{ await getFormattedWeatherData({ ...query,units}).then(data=>{
      setWeather(data);
    })

    
  }

  useEffect(()=>{
    getWeather()
  },[query,units])

  
  return (
    <>
    <div className="outer-box">
    <TodayData setQuery={setQuery}/>
    <Inputs/>
    {weather && (
      <>
    <TimeAndLocation weather={weather}/>
    <TemoAndDetails weather={weather}/>
    <Forecast title="hourly forcast" data={weather.hourly}/>
    <Forecast title="Daily Forecast" data={weather.daily}/>
    </>
  )}
    </div>
    </>
  )
}

export default App