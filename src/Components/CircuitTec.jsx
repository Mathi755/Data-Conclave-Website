import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from '../utils/Img/TechLogo.jpg';
import energia from "../utils/Img/banner/Expert Talk/6.jpg";
import batallia from "../utils/Img/banner/Expert Talk/4.jpg";
import bizqueset from "../utils/Img/banner/panel.jpg";
import tescaflow from "../utils/Img/banner/Expert Talk/5.jpg";
import cassedete from "../utils/Img/banner/Expert Talk/3.jpg";

import RandomEvents from "./RandomEvents";
import { Link } from "react-router-dom";

const CircuitTec = () => {
  const color = randomColor();
  const CirTech = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: energia, 
      altText: "Energia Nova",
      label: "Energia Nova",
      path: "/energianova",
    },
    {
      id: 2,
      imageSrc: cassedete, 
      altText: "Casse-dete",
      label: "Casse-dete",
      path: "/cassedete",
    },
    {
      id: 3,
      imageSrc: batallia, 
      altText: "Batallia",
      label: "Batallia",
      path: "/batallia",
    },
    {
      id: 4,
      imageSrc: tescaflow, 
      altText: "Tescaflow",
      label: "Tescaflow",
      path: "/tescaflow",
    },
    {
      id: 5,
      imageSrc: bizqueset, 
      altText: "Bizqueset",
      label: "Bizqueset",
      path: "/bizqueset",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
        <br />
       Day II
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
              <Card
                imageSrc={card.imageSrc}
                altText={card.altText}
                // label={card.label}
                // onClick={card.onClick}
              />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CircuitTec;