import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./VizYourWay.css";
import EventImage from "../../../utils/Img/banner/Expert Talk/2.jpg";

const Wizzup = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10 text-justify">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={EventImage}
          alt="Wizzup Debugging Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-[80%] w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Expert Talk 2
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <h2 className="text-head lg:text-4xl font-bold mb-2 gradient-text">
            Chief Guest
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Dr. K. Sujatha</strong><br />
            <strong>Designation:</strong> Professor EEE, Department at Dr. M.G.R Educational and Research Institute<br />
            <strong>Expert Talk Topic:</strong> Big Data and IoT in Medical Applications<br />
            <strong>Session Timing:</strong> Morning, 11:30 AM
          </p>
          <p className="text-body lg:text-2xl mt-4">
            We are honored to welcome Dr. K. Sujatha, Professor in the Department of EEE at Dr. M.G.R Educational and Research Institute, as the Chief Guest for an insightful expert talk on "Big Data and IoT in Medical Applications."
          </p>
          <p className="text-body lg:text-2xl mt-4">
            This session, scheduled for 11:30 AM in the morning, will explore the integration of Big Data and IoT in the healthcare sector, emphasizing their transformative impact on medical diagnostics, patient monitoring, and healthcare management. Dr. K. Sujatha will provide valuable insights into how these technologies enhance real-time data collection, predictive analytics, and automation in medical systems, ultimately leading to improved patient care and operational efficiency.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            Attendees will gain a deeper understanding of the role of IoT-enabled devices, data security challenges, and future trends in healthcare innovation. This session is a must-attend for students, researchers, and professionals looking to expand their knowledge in emerging medical technologies.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Wizzup;