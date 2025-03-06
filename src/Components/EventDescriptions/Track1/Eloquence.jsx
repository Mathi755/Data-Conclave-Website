import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../utils/Img/banner/Expert Talk/1.jpg";

const Eloquence = () => {
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
          src={EventImage}
          alt="Eloquence Event"
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
        <h1>
          ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Expert Talk 1
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <h2 className="text-head lg:text-4xl font-bold mb-2 gradient-text">
            Chief Guest
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Mr. Harun Raseed Basheer</strong><br />
            <strong>Designation:</strong> Microsoft MVP, Data Engineer at Hitachi Solutions India Pvt Ltd<br />
            <strong>Expert Talk Topic:</strong> From Data to Intelligence – Fundamentals of Data and AI<br />
            <strong>Session Timing:</strong> Morning, 10:00 AM
          </p>
          <p className="text-body lg:text-2xl mt-4">
            We are privileged to have Mr. Harun Raseed Basheer, a distinguished Microsoft MVP and Data Engineer at Hitachi Solutions India Pvt Ltd, as one of our esteemed speakers at the workshop. With extensive expertise in data engineering, artificial intelligence, and cloud solutions, Mr. Harun has made significant contributions to the field of data-driven decision-making and AI-powered solutions. His work revolves around designing, optimizing, and implementing large-scale data pipelines and analytics platforms to help organizations unlock the full potential of their data.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            In his expert talk on “From Data to Intelligence – Fundamentals of Data and AI,” Mr. Harun will provide valuable insights into the core principles of data processing, AI integration, and how businesses can leverage data for intelligent decision-making. He will delve into the evolution of data analytics, the role of machine learning, and best practices in handling structured and unstructured data.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            This session is an excellent opportunity for students, researchers, and professionals to gain foundational knowledge in AI and data intelligence while understanding real-world applications and industry trends. Attendees will leave with a better grasp of how AI and data engineering are transforming industries and shaping the future of technology.
          </p>
        </section>

        
      </motion.div>
    </div>
  );
};

export default Eloquence;