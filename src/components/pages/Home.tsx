"use client"

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16 py-24 bg-[#121212] relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start  (mt-[-50px]) " >

          <h1 className="text-white mb-4 text-6xl sm:text-7xl lg:text-8xl font-extrabold  (mt-[-50px]) ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B59B6] to-[#6A1B9A] shadow-lg " >
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Shumaila Waheed",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white text-5xl sm:text-6xl lg:text-7xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-xl mb-6 lg:text-1xl">
            Experienced in creating dynamic, user-friendly applications. Passionate about crafting impactful digital experiences with modern tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <Link
              href="/#contact"
              className="px-8 lg:px-10 inline-block py-4 lg:py-5 w-full sm:w-fit rounded-full mr-4 bg-purple-600 hover:bg-purple-700 text-white mb-4 sm:mb-0 transition-all duration-300 shadow-md shadow-purple-500 text-lg lg:text-xl"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-2 inline-block py-2 w-full sm:w-fit rounded-full border-2 border-purple-600 text-white bg-transparent hover:bg-slate-800 transition-all duration-300 shadow-md shadow-purple-500 text-lg lg:text-xl"
            >
              <span className="block rounded-full px-6 lg:px-8 py-3">Download CV</span>
            </Link>
          </div>
        </motion.div>
      
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0 relative " >
          <div className="rounded-full bg-[#181818] w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] relative shadow-lg shadow-purple-500  (mt-[-50px]) ">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}  
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;