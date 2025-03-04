import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import elo from "../assets/symposium/eloquence1.jpg";
import viz from "../assets/symposium/vizyour.jpeg";
import wiz from "../assets/symposium/Wizzup_Debug.jpeg";
import ghost from "../assets/symposium/Ghost.png";
import matter from "../assets/symposium/MatterMindNew.jpg";
import codesprint from "../assets/symposium/CodeSprint.jpeg";

import RandomEvents from "./RandomEvents";

import { Link } from "react-router-dom";

const NonCircuitTec = () => {
  const color = randomColor();
  const noncircuittec = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: elo, // Replace with actual image path
      altText: "Eloquence",
      label: "Eloquence",
      path: "/eloquence",
    },
    {
      id: 2,
      imageSrc: wiz,
      altText: "Wizzup",
      label: "Wizzup",
      path: "/wizzup",
    },

  ];

  return (
    <div className="max-w-7xl pt-10 mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
        DAY I
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
              <Card imageSrc={card.imageSrc} altText={card.altText} />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitTec;
