import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import RobotImage from "../../../utils/Img/banner/Expert Talk/4.jpg";
import "./EnergiaNova.css";

const Batallia = () => {
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
          src={RobotImage}
          alt="Batallia de Robots"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          Expert Talk 5
        </h1>

        <section className="text-gray-300 text-justify">
          <h2 className="text-xl md:text-2xl font-bold gradient-text">
            Chief Guest
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Chandru Rajendran</strong><br />
            <strong>Designation:</strong> Chief of Staff at Become, CEO & Founder<br />
            <strong>Expert Talk Topic:</strong> From Data to Intelligence – Fundamentals of Data and AI<br />
            <strong>Session Timing:</strong> Morning, 11:00 AM
          </p>
          <p className="text-body lg:text-2xl mt-4">
            We are honored to have Chandru Rajendran, Chief of Staff at Become and CEO & Founder, as one of our distinguished guest speakers for the workshop. With vast experience in data-driven decision-making, artificial intelligence, and business intelligence solutions, Mr. Rajendran has been at the forefront of leveraging data to create impactful, intelligent solutions.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            In his session, "From Data to Intelligence – Fundamentals of Data and AI," he will take participants on a journey through the core principles of data science, AI technologies, and their real-world applications. He will highlight how businesses can harness the power of structured and unstructured data to gain actionable insights, improve efficiency, and drive innovation.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            Through real-world examples and industry insights, this session will provide a comprehensive understanding of data processing, AI algorithms, and their transformative impact on various sectors. Whether you are a beginner or an industry professional, this talk will help you bridge the gap between raw data and meaningful intelligence.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            Don't miss this opportunity to gain valuable insights from Chandru Rajendran, a visionary leader in the field of data and AI.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Batallia;