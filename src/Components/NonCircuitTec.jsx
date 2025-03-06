import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import a1 from "../utils/Img/banner/Expert Talk/1.jpg";
import a2 from "../utils/Img/banner/Expert Talk/2.jpg";
import a3 from "../utils/Img/banner/thamarai.jpg";
import RandomEvents from "./RandomEvents";

import { Link } from "react-router-dom";

const NonCircuitTec = () => {
  const color = randomColor();
  const noncircuittec = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: a1, // Replace with actual image path
      altText: "Eloquence",
      label: "Eloquence",
      path: "/eloquence",
    },
    {
      id: 2,
      imageSrc: a2,
      altText: "Wizzup",
      label: "Wizzup",
      path: "/wizzup",
    },{
      id: 3,
      imageSrc: a3,
      altText: "Cassedete",
      label: "Wizzup",
      path: "/Cassedete",
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
