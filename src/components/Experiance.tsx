"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";

const WorkExperienceSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-white">
        <h2 className="text-5xl font-extrabold text-center mb-12">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500"
            >
              <h3 className="text-3xl font-semibold">Software Developer</h3>
              <p className="text-lg text-gray-500">XYZ Corp. | 2022 - Present</p>
              <p className="mt-4 text-gray-700">
                Contributed to multiple projects using React, Node.js, and Express. Focused on building scalable web applications with an emphasis on performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500"
            >
              <h3 className="text-3xl font-semibold">Front-end Developer</h3>
              <p className="text-lg text-gray-500">ABC Ltd. | 2022 - 2024</p>
              <p className="mt-4 text-gray-700">
                Developed responsive user interfaces and integrated third-party APIs with React. Ensured the seamless user experience on mobile and desktop devices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500"
            >
              <h3 className="text-3xl font-semibold">Junior Developer</h3>
              <p className="text-lg text-gray-500">DEF Inc. | 2019 - 2022</p>
              <p className="mt-4 text-gray-700">
                Focused on front-end web development using HTML, CSS, and JavaScript. Contributed to optimizing performance and loading times for web applications.
              </p>
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <FaReact className="text-6xl text-blue-500" />
              </div>
              <h4 className="text-2xl font-semibold text-center">React</h4>
              <p className="mt-4 text-center">
                Skilled in developing interactive and high-performance user interfaces with React, utilizing hooks and state management for scalable applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <FaNodeJs className="text-6xl text-green-500" />
              </div>
              <h4 className="text-2xl font-semibold text-center">Node.js</h4>
              <p className="mt-4 text-center">
                Proficient in creating back-end services using Node.js, building RESTful APIs, and handling real-time data with WebSockets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <FaHtml5 className="text-6xl text-orange-500" />
              </div>
              <h4 className="text-2xl font-semibold text-center">HTML5</h4>
              <p className="mt-4 text-center">
                Strong knowledge of semantic HTML5 for creating accessible and SEO-friendly web pages, ensuring compliance with modern web standards.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
