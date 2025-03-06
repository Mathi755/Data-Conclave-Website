import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import eventPoster from "../utils/Img/banner/overall.jpg";
import EventButton from "./EventButton";

const EventContainer = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 3, // Maximum tilt rotation (degrees)
        speed: 10, // Speed of the enter/exit transition
        glare: false, // Disable glare effect
      });
    }
  }, []);

  return (
    <div className="px-5 min-h-screen flex flex-col justify-start items-center"> {/* Added padding on both sides */}
      <div className="flex justify-center mt-11 mb-10">
        <div
          // ref={tiltRef}
          className="tilt-container overflow-hidden shadow-md"
        >
          <img
            src={eventPoster}
            className="w-full h-auto sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]" // Reduced size
            alt="Event Poster"
          />
        </div>
      </div>
      <div className="lg:gap-10 gap-5 flex flex-col lg:pb-20 sm:flex-row justify-center items-center animate__animated animate__fadeInUp">
        <Link to="/track1">
          <EventButton label="Day I" />
        </Link>
        <Link to="/track2">
          <EventButton label="Day II" />
        </Link>
      </div>
    </div>
  );
};

export default EventContainer;