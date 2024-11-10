"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import Image from 'next/image'; 

const AboutMeSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-[#1e1e1e] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:w-1/3"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-md shadow-[#9b59b6] transform transition-all duration-500 hover:scale-105 mt-[-10px] ml-10">
              <Image
                src="/images/about-image.png"
                alt="Profile"
                layout="fill" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-2/3 space-y-6"
          >
           <h2 className="text-4xl md:text-4xl font-extrabold ml-[50px]">About Me</h2>
<p className="text-lg md:text-xl text-[#ADB7BE] max-w-lg mx-auto ml-[50px]">
  Hi! I&apos;m Shumaila, a passionate web developer and a lifelong learner. I specialize in creating
  interactive web applications with a focus on clean code, modern design, and optimal user experience.
</p>
<p className="text-lg md:text-xl text-[#ADB7BE] max-w-md mx-auto ml-[50px]">
  With a strong foundation in JavaScript, TypeScript, and modern web frameworks like React, I aim to build
  scalable and efficient solutions that solve real-world problems.
</p>

            
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-6 mb-[-30px] ml-[50px]">
              {[ 
                { icon: FaGithub, link: "https://github.com/ShumailaWaheed" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/shumailawaheed" },
                { icon: FaFacebook, link: "https://www.facebook.com/ShumailaWaheed" },
                { icon: FaTwitter, link: "https://twitter.com/ShumailaWaheed" },
                { icon: FaGoogle, link: "https://www.google.com" }
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-all duration-300"
                >
                  <div className="p-2 sm:p-3 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105">
                    <Icon
                      size={16} 
                      className="text-white sm:text-lg md:text-2xl" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="border-b-2 border-[#9b59b6] w-full"></div>
        <div className="border-r-2 border-[#9b59b6] h-full absolute right-0 top-0"></div>
      </div>
    </section>
  );
};

export default AboutMeSection;
