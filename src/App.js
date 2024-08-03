import React from 'react'
import TodayData from './components/TodayData'
import OtherDays from './components/OtherDays'
import './App.css';

const App = () => {
  return (
    <>
    <div className="outer-box">
    <TodayData/>
    <OtherDays/>
    </div>
    </>
  )
}

export default App
