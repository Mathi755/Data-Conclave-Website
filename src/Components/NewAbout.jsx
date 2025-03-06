import React, { useEffect, useRef } from "react";
import "./animation.css"; // Import the CSS for the cubes animation
import VanillaTilt from "vanilla-tilt";
import Image from "../assets/symposium/SymLogo.png";

const NewAbout = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt for the image container
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Maximum tilt
        speed: 400, // Animation speed
        glare: false, // Add a glare effect
      });
    }
  }, []);

  return (
    <div className="bg-dark-grey text-white-grey flex flex-col items-center py-10">
      {/* Glassmorphic Container */}
      <div className="glassmorphic-container p-6 md:p-10 w-full max-w-5xl">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-5xl text-lg mb-5 leading-relaxed text-left">
          About
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-aboutfont tracking-widest text-left">
          DATA CONCLAVE 2024-'25
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Text Section */}
          <div className="md:w-[60%] w-full text-lg leading-relaxed text-justify px-4">
          <p><br />
      🚀 <strong>Welcome to Data Conclave 2025 - The Future of Data & AI!</strong> Join us for an exclusive event dedicated to cutting-edge innovations, trends, and advancements in Data Science, AI, and emerging technologies. This is your chance to learn, collaborate, and network with fellow students, professionals, and industry leaders shaping the future of tech!
      <br />
      <br />
      📅 <strong>Event Dates:</strong> 10th & 11th March <br />
      📍 <strong>Venue:</strong> TP2-702
      <br />
      <br />
      🔹 <strong>What to Expect?</strong>
      <ul>
        <li>Insightful talks by industry experts</li>
        <li>Hands-on workshops & interactive sessions</li>
        <li>Networking opportunities with professionals</li>
        <li>Explore the latest AI & Data Science trends</li>
      </ul>
      <br />
      <strong>Day 1 – March 10</strong>
      <ul>
        <li>✅ Expert Talks – Gain insights from industry leaders on the latest advancements in AI & Data Science</li>
        <li>✅ Hands-on Workshops – Engage in practical learning and interactive sessions with professionals</li>
        <li>✅ Project Expo – Explore innovative AI & Data Science projects</li>
      </ul>
      <br />
      <strong>Day 2 – March 11</strong>
      <ul>
        <li>✅ Project Expo – Witness groundbreaking projects in AI & Data Science</li>
        <li>✅ Expert Talks – Learn from experienced professionals about the future of AI</li>
        <li>✅ Panel Discussion – Participate in thought-provoking discussions with industry experts</li>
      </ul>
      <br />
      🎯 <strong>Who Can Attend?</strong> Students, tech enthusiasts, researchers, and professionals eager to dive into the world of AI & Data Science.
      <br />
      <br />
      💡 <strong>Ready to be part of the revolution?</strong> Fill in the form below and secure your spot!
      <br />
      <br />
      👉 <strong>Register now and take a step towards the future! 🚀</strong>
    </p>
            <p className="mt-4">
              Join us in this journey where vision meets reality, and together,
              we shape the technology of tomorrow. Data Conclave is not just an
              event; it's an experience that leaves a lasting impression.
            </p>
          </div>

          {/* Image Section */}
          <div
            // ref={tiltRef}
            className="md:w-[40%] w-full mt-6 md:mt-0 flex justify-center"
          >
            <img
              src={Image}
              alt="Data Conclave Logo"
              className="max-w-full md:max-w-[80%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;
