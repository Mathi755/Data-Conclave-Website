import React from "react";
import { motion } from "framer-motion";
import "./EnergiaNova.css";
import tescaflow from "../../../utils/Img/banner/Expert Talk/5.jpg";
import { useRef, useEffect } from "react";

const Tescaflow = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={tescaflow}
          alt="Tescaflow Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 bg-transparent overflow-auto custom-scrollbar p-4 rounded-lg shadow-lg"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          🧠
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Expert Talk 6
          </span>
        </h1>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <h2 className="text-xl md:text-2xl font-bold gradient-text">
            Chief Guest
          </h2>
          <p>
            <strong>Mr. Santosh Satish</strong><br />
            <strong>Designation:</strong> Manager of Teams, DHL Technologies<br />
            <strong>Expert Talk Topic:</strong> AI in Logistics<br />
            <strong>Session Timing:</strong> Afternoon, 1:00 PM
          </p>
          <p className="mt-4">
            We are thrilled to welcome Mr. Santosh Satish, a visionary leader and Manager of Teams at DHL Technologies, to deliver an inspiring Expert Talk on the transformative role of Artificial Intelligence in Logistics. With deep Expertise in supply chain optimization, AI-driven automation, and smart logistics solutions, Mr. Satish has been instrumental in integrating cutting-edge technologies to enhance efficiency in global logistics operations.
          </p>
          <p className="mt-4">
            In his Expert Talk, "AI in Logistics," he will explore how artificial intelligence is revolutionizing supply chains, optimizing routes, improving warehouse automation, and enhancing demand forecasting. Attendees will gain insights into real-world applications of AI in predictive analytics, autonomous delivery systems, and AI-powered decision-making, reshaping the future of the logistics industry.
          </p>
          <p className="mt-4">
            Through engaging storytelling and impactful examples, Mr. Santosh Satish will highlight how businesses can leverage AI-driven solutions to reduce costs, improve speed, and enhance customer satisfaction in a rapidly evolving digital world.
          </p>
          <p className="mt-4">
            Join us for this thought-provoking session, where innovation meets logistics, and AI paves the way for a smarter, more efficient supply chain ecosystem.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Tescaflow;