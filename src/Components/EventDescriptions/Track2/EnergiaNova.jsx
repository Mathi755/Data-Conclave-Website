import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../utils/Img/banner/Expert Talk/6.jpg";


const MatterMind = () => {
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
          alt="MatterMind Event"
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
            <strong>Eswara Narayanan</strong><br />
            <strong>Designation:</strong> Technical Architect, Capgemini<br />
            <strong>Expert Talk Topic:</strong> DevOps<br />
            <strong>Session Timing:</strong> Morning, 09:00 AM
          </p>
          <p className="text-body lg:text-2xl mt-4">
            We are honored to have Eswara Narayanan, a seasoned Technical Architect at Capgemini, as our esteemed guest speaker for the workshop. With extensive experience in software development, cloud computing, and DevOps transformation, Mr. Narayanan has been instrumental in driving seamless automation and efficient software delivery pipelines in enterprise environments.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            In his expert talk on DevOps, he will provide valuable insights into modern software development practices, CI/CD pipelines, automation tools, and best practices to bridge the gap between development and operations teams. His session will focus on streamlining workflows, enhancing collaboration, and accelerating deployment cycles, helping organizations achieve agility and innovation.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            Join us for this enriching session as Mr. Narayanan shares his industry expertise and practical strategies to implement DevOps effectively in real-world scenarios.
          </p>
        </section>

        
        <footer className="text-gray-300 mt-4">
          <p className="text-left">Let the challenge begin!</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default MatterMind;