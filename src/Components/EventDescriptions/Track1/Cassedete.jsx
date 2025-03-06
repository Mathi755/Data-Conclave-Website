import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import JigsawImage from "../../../utils/Img/banner/thamarai.jpg";

const Cassedete = () => {
  const tiltRefJigsaw = useRef(null);

  useEffect(() => {
    if (tiltRefJigsaw.current) {
      VanillaTilt.init(tiltRefJigsaw.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto p-6">
      {/* Jigsaw */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          ref={tiltRefJigsaw}
          className="lg:w-1/2 w-full flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={JigsawImage}
            alt="Jigsaw"
            className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
          style={{ maxHeight: "calc(100vh - 100px)" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Expert Talk 4
          </h1>

          <section className="text-gray-300 text-justify">
            <h2 className="text-xl md:text-2xl font-bold gradient-text">
              Guest Speaker
            </h2>
            <p className="text-body lg:text-2xl">
              <strong>Ms. Thamaraiselvi Dhivakar</strong><br />
              <strong>Designation:</strong> Data Scientist, Accenture<br />
              <strong>Workshop Topic:</strong> End-to-End Data Analytics<br />
              <strong>Session Timing:</strong> Afternoon, 1:00 PM
            </p>
            <p className="text-body lg:text-2xl mt-4">
              We are privileged to host Ms. Thamaraiselvi Dhivakar, an esteemed Data Scientist at Accenture, as a guest speaker for our workshop. With extensive expertise in data analytics, machine learning, and business intelligence, she has been instrumental in leveraging data-driven insights to optimize decision-making across industries.
            </p>
            <p className="text-body lg:text-2xl mt-4">
              Her session on "End-to-End Data Analytics" will provide participants with a comprehensive understanding of the entire data analytics lifecycle—from data collection and preprocessing to analysis, visualization, and deriving actionable insights. She will delve into modern tools, frameworks, and best practices used in the industry, empowering attendees with real-world applications of data analytics.
            </p>
            <p className="text-body lg:text-2xl mt-4">
              This expert talk is a great opportunity for students, aspiring data professionals, and tech enthusiasts to gain valuable insights into how data analytics shapes businesses and fuels innovation.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cassedete;