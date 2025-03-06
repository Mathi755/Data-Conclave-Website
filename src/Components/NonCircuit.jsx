import React from 'react'
import NonCircuitnTech from './NonCircuitnTech'
import NonCircuitTec from "./NonCircuitTec"
import EventButton from "./EventButton"
import { Link } from 'react-router-dom'
import TrackInfo from './TrackInfo'
import img from "../assets/symposium/track1.jpg"
const NonCircuit = () => {
  return (
    <div>
      
      <NonCircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
      <a
        href="https://forms.gle/hv1uM6TzbpaK35Xh6" // Replace with your actual Google Form URL
        target="_blank"
        rel="noopener noreferrer"
      >
      <EventButton label="Register" />
      </a>
      </div>
      <br />
    </div>
  )
}

export default NonCircuit