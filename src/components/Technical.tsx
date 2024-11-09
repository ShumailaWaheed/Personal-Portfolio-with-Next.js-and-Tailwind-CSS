"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaServer, FaUserFriends } from 'react-icons/fa'; // Import icons

const ProgressBar: React.FC<{ progress: number; label: string }> = ({ progress, label }) => {
  return (
    <div className="w-full mb-4">
      <p className="text-white text-lg">{label}</p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            {progress}%
          </div>
        </div>
        <div className="flex mb-4 h-2 bg-gray-700 rounded-full">
          <motion.div
            className="h-2 rounded-full bg-purple-500 shadow-[0_5px_20px_rgba(128,0,128,0.6)]"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

const TechnicalProficiency: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Frontend"); 

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="mb-10 sm:py-16 bg-[#121212]"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-white font-extrabold text-center mb-12 ">Technical Proficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-6">
            <div
              onClick={() => handleCategoryClick("Frontend")}
              className="p-4 sm:p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105"
            >
              <FaLaptopCode className="text-white text-3xl mb-2" /> 
              <h3 className="text-white text-base sm:text-lg font-semibold text-center">Frontend</h3>
            </div>
            <div
              onClick={() => handleCategoryClick("Backend")}
              className="p-4 sm:p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105"
            >
              <FaServer className="text-white text-3xl mb-2" /> 
              <h3 className="text-white text-base sm:text-lg font-semibold text-center">Backend</h3>
            </div>
            <div
              onClick={() => handleCategoryClick("Tools")}
              className="p-4 sm:p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105"
            >
              <FaTools className="text-white text-3xl mb-2" />
              <h3 className="text-white text-base sm:text-lg font-semibold text-center">Tools</h3>
            </div>

            <div
              onClick={() => handleCategoryClick("SoftSkills")}
              className="p-4 sm:p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105"
            >
              <FaUserFriends className="text-white text-3xl mb-2" /> 
              <h3 className="text-white text-base sm:text-lg font-semibold text-center">Soft Skills</h3>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-[#181818] p-4 sm:p-8 rounded-lg shadow-xl shadow-[#9b59b6] transition-all duration-300">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 text-center">
                {selectedCategory} Proficiency
              </h3>
              {selectedCategory === "Backend" && (
                <>
                  <ProgressBar progress={75} label="Next.js" />
                  <ProgressBar progress={60} label="Express.js" />
                </>
              )}
              {selectedCategory === "Tools" && (
                <>
                  <ProgressBar progress={85} label="Docker" />
                  <ProgressBar progress={70} label="Git" />
                </>
              )}
              {selectedCategory === "Frontend" && (
                <>
                  <ProgressBar progress={90} label="React.js" />
                  <ProgressBar progress={80} label="CSS" />
                </>
              )}
              {selectedCategory === "SoftSkills" && (
                <>
                  <ProgressBar progress={80} label="Communication" />
                  <ProgressBar progress={70} label="Teamwork" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
