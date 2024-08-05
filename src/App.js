import React from 'react'
import TodayData from './components/TodayData'
import Inputs from './components/Inputs';
import './App.css';
import TimeAndLocation from './components/TimeAndLocation';
import TemoAndDetails from './components/TemoAndDetails';
import Forecast from './components/Forecast';

const App = () => {
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
