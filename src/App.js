import React from 'react'
import TodayData from './components/TodayData'
import Inputs from './components/Inputs';
import './App.css';
import TimeAndLocation from './components/TimeAndLocation';
import TemoAndDetails from './components/TemoAndDetails';

const App = () => {
  return (
    <>
    <div className="outer-box">
    <TodayData/>
    <Inputs/>
    <TimeAndLocation/>
    <TemoAndDetails/>
    </div>
    </>
  )
}

export default App
