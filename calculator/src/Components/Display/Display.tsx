import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import './display.css'
const Display = () => {

const display=useSelector((state: RootStateOrAny)=>state.displayText)

  return (
    <div className="display">{display}</div>
  )
}

export default Display