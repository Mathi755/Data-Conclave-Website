import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import JigsawImage from "../../../utils/Img/banner/Expert Talk/3.jpg";

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
              Chief Guest
            </h2>
            <p className="text-body lg:text-2xl">
              <strong>Sowmiyalakshmi</strong><br />
              <strong>Designation:</strong> Data Engineer, Infosys<br />
              <strong>Expert Talk Topic:</strong> Data Analytics, Generative AI, and Prompt Engineering<br />
              <strong>Session Timing:</strong> Morning, 10:00 AM
            </p>
            <p className="text-body lg:text-2xl mt-4">
              We are delighted to welcome Sowmiyalakshmi, an accomplished Data Engineer at Infosys, as a distinguished guest speaker for our workshop. With a strong background in data analytics, artificial intelligence, and cutting-edge AI applications, she has played a pivotal role in leveraging data-driven insights to drive business growth and innovation.
            </p>
            <p className="text-body lg:text-2xl mt-4">
              Her session will delve into the dynamic world of Data Analytics, its role in decision-making, and the impact of Generative AI in revolutionizing industries. Additionally, she will shed light on Prompt Engineering, a crucial skill for optimizing interactions with AI models like ChatGPT. Attendees will gain practical knowledge on how to refine AI prompts for maximum efficiency and accuracy, making this session particularly valuable for those interested in AI-driven solutions.
            </p>
            <p className="text-body lg:text-2xl mt-4">
              Join us for an engaging and insightful talk as Sowmiyalakshmi shares her expertise, real-world case studies, and future trends in Data Analytics and AI, helping participants stay ahead in the ever-evolving tech landscape.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cassedete;