"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaNodeJs, FaBrain, FaHtml5, FaCss3Alt } from "react-icons/fa";

const services = [
  {
    icon: <FaReact className="text-5xl text-blue-500" />,
    title: "React Development",
    description: "We specialize in creating scalable and dynamic web applications using React. Whether you're building a single-page app or a large-scale platform",
  },
  {
    icon: <FaJsSquare className="text-5xl text-yellow-500" />,
    title: "JavaScript Development",
    description: "We build dynamic, interactive websites using JavaScript. From simple animations to complex web apps, we ensure an intuitive and efficient",
  },
  {
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    title: "Node.js Backend",
    description: "We build scalable and secure backend services using Node.js, ensuring fast data processing and real-time capabilities for modern web applications.",
  },
  {
    icon: <FaBrain className="text-5xl text-purple-500" />,
    title: "Artificial Intelligence",
    description: "We use the latest AI techniques and tools to develop smart applications, automate tasks, and create predictive models that enhance user experiences",
  },
  {
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    title: "HTML/CSS Web Design",
    description: "We design and develop responsive, user-friendly, and modern websites using HTML5 and CSS3. From layouts to animations, we ensure every detail",
  },
  {
    icon: <FaCss3Alt className="text-5xl text-blue-400" />,
    title: "CSS Web Styling",
    description: "We provide stunning visual design using CSS, creating modern layouts, animations, and ensuring your website looks beautiful and is responsive across",
  }
];

const ServiceSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - (isMobile ? 1 : 2) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= services.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1
    );
  };

  const handleServiceClick = () => {
    const element = document.getElementById("our-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="our-services" className="service w-full h-auto relative bg-[#121212] py-16">
      <h1 className="text-white text-4xl font-extrabold lg:text-5xl text-center mt-[-30] mb-[-30px]">
        Our Services
      </h1>

      <div className="flex justify-center items-center mt-8 w-full max-w-[1800px] mx-auto relative">
        {/* Left button with shadow */}
        <button
          onClick={handlePrev}
          className={`text-white text-2xl p-2 bg-[#333333] rounded-full absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 shadow-xl hover:scale-110 hover:bg-[#9b59b6] transition-all`}
          style={{ zIndex: 10 }}
        >
          ◀
        </button>

        <div className="relative flex gap-8 mt-6 w-full mx-auto justify-center">
          {services.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)).map((service, index) => (
            <motion.div
              key={index}
              onClick={handleServiceClick}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className={`p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105 ${isMobile ? 'w-[90%] h-[500px]' : 'w-[600px] h-[450px]'} m-4`}
            >
              <div className="flex justify-center items-center mt-10">
                {service.icon}
              </div>
              <h2 className="text-white mt-6 text-2xl md:text-3xl font-semibold text-center">{service.title}</h2>
              <p className="text-gray-400 text-base font-semibold mt-4 max-w-[380px] mx-auto text-center">
                {service.description}
              </p>

              <div className="flex justify-center mt-8">
                <button className="w-[140px] py-3 border-2 border-white rounded-lg text-white text-sm font-bold hover:scale-110 hover:bg-[#9b59b6] transition-all duration-300">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right button with shadow */}
        <button
          onClick={handleNext}
          className="text-white text-2xl p-2 bg-[#333333] rounded-full absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 shadow-xl hover:scale-110 hover:bg-[#9b59b6] transition-all"
          style={{ zIndex: 10 }}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;
