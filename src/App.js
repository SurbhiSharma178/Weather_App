import React from 'react'
import TodayData from './components/TodayData'
import Inputs from './components/Inputs';
import './App.css';
import TimeAndLocation from './components/TimeAndLocation';
import TemoAndDetails from './components/TemoAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './server/weatherServices';



const App = () => {
  const getWeather=async ()=>{
    const data = await getFormattedWeatherData({ q:'bhilwara'})
    console.log(data);
    
  }

  getWeather();
  
  return (
    <>
    <div className="outer-box">
    <TodayData/>
    <Inputs/>
    <TimeAndLocation/>
    <TemoAndDetails/>
    <Forecast/>
    <Forecast/>
    </div>
    </>
  )
}

export default App
