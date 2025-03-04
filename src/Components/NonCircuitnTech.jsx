import React from "react";
import "../text.css"; // Ensure this file contains any other necessary styling
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import bgmi from "../assets/symposium/BGMI_FINAL.jpg";
import ff from "../assets/symposium/NewFreeFire.jpg";
import cini from "../assets/symposium/Cinephilia.jpg";
import vault from "../assets/symposium/MysteryVault.jpeg";
import deadly from "../assets/symposium/deadly.png";
import randomColor from "randomcolor";
import iplauction from "../assets/symposium/iplauction.jpg"

import { Link } from "react-router-dom";
// import "./NonCircuitnTech.css";

const NonCircuitnTech = () => {
  const color = randomColor();
  const circuittechnicalEvents = [
    
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
      </h3>

      <div>
        <main className="card-container gap-10 flex flex-wrap justify-center w-full">
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

export default NonCircuitnTech;
