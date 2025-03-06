import React from "react";
import NonCircuitnTech from "./NonCircuitnTech";
import CircuitTec from "./CircuitTec";
import EventButton from "./EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";
import img from "../assets/symposium/OverallPoster.jpeg";
import "animate.css";
const Circuit = () => {
  return (
    <div>
      

      <CircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <a
          href="https://forms.gle/hv1uM6TzbpaK35Xh6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EventButton label="Register" />
        </a>
      </div>
      <br />
    </div>
  );
};

export default Circuit;
