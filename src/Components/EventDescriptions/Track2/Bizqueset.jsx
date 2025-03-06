import React, { useEffect, useRef } from "react"; 
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../utils/Img/banner/panel.jpg"; // Replace with your actual image
import "./EnergiaNova.css";

const Bizqueset = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-10 gap-10 text-justify">
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
          alt="Panel Discussion"
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
          ✨<span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">Panel Discussion</span>
        </h1>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">The Future of Data Science – Trends, Challenges, and Opportunities</h2>
          <p className="text-body lg:text-2xl">
            <strong>🕑 Session Timing:</strong> Afternoon, 2:00 PM
          </p>
          <p className="text-body lg:text-2xl mt-4">
            We are excited to host an insightful panel discussion featuring distinguished experts from various industries, coming together to explore the evolving landscape of Data Science. This discussion will provide a holistic perspective on the latest trends, challenges, and opportunities in the world of big data, artificial intelligence, and analytics.
          </p>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text mt-4">Esteemed Panelists:</h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li><strong>Mr. Santosh Satish</strong> – Manager of Teams, DHL Technologies</li>
            <p>Bringing expertise in AI-driven logistics and supply chain optimization, Mr. Satish will discuss how data science is reshaping the logistics industry through predictive analytics, automation, and real-time decision-making.</p>
            <li><strong>Ms. Rajalakshmi Srinivasan</strong> – Director, Product Management, ZOHO</li>
            <p>An expert in product strategy and data-driven decision-making, Ms. Srinivasan will share insights on how businesses leverage data science to enhance customer experience, drive product innovation, and maintain a competitive edge.</p>
            <li><strong>Ms. Poornashri Anandakrishnan</strong> – Human Resources, HCL Tech</li>
            <p>With deep expertise in people analytics, Ms. Anandakrishnan will explore how data science is transforming human resource management through talent prediction models, AI-driven recruitment, and workforce analytics.</p>
            <li><strong>Mr. Rajesh Kanna</strong> – Senior Technical Lead, EPAM Systems Ltd</li>
            <p>A leader in AI and machine learning implementation, Mr. Kanna will discuss emerging trends in data engineering, the role of cloud computing in data science, and the future of AI-driven automation.</p>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text mt-4">Key Discussion Points:</h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>How AI and Data Science are revolutionizing industries like logistics, HR, and product management</li>
            <li>The impact of big data and machine learning on business decision-making</li>
            <li>Challenges in data privacy, ethics, and security</li>
            <li>Future job opportunities and skills required for aspiring data scientists</li>
          </ul>

          <p className="text-body lg:text-2xl mt-4">
            This power-packed discussion will offer valuable insights for professionals, students, and tech enthusiasts looking to understand how data science is shaping the future across different sectors.
          </p>
          <p className="text-body lg:text-2xl mt-4">
            Don’t miss this opportunity to hear from industry experts and engage in a thought-provoking dialogue!
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Bizqueset;