"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-[#121212] relative mt-0 sm:mt 0">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start mt-[-10px] sm:mt-0"
        >
          <h1 className="text-white mb-3 text-5xl sm:text-6xl lg:text-6xl font-extrabold mt-[-40px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B59B6] to-[#6A1B9A] shadow-lg mt-0 ml-[-5px]">
              Hello, I&apos;m&nbsp;{" "}
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
              className="text-white text-3xl sm:text-5xl lg:text-6xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-lg mb-3 sm:mb-6 lg:text-xl max-w-[550px] mx-auto ">
            Experienced in creating dynamic, user-friendly applications. Passionate about crafting impactful digital experiences
            with modern tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <Link
              href="/#contact"
              className="px-5 sm:px-3 lg:px-5 inline-block py-3 sm:py-3 lg:py-3 w-[150px] sm:w-auto rounded-full mr-3 bg-purple-600 hover:bg-purple-700 text-white mb-4 sm:mb-0 transition-all duration-300 shadow-md shadow-purple-500 text-2xl sm:text-lg lg:text-"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-2 inline-block py-3 w-150px sm:w-auto rounded-full border-2 border-purple-600 text-white bg-transparent hover:bg-slate-800 transition-all duration-300 shadow-md shadow-purple-500 text-2xl sm:text-lg lg:text-2x1"
            >
              <span className="w-[-20px] h-[20px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3">Download CV</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-6 sm:mt-8 lg:mt-0 relative"
        >
          <div className="rounded-full bg-[#181818] w-[230px] h-[300px] sm:w-[300px] sm:h-[250px] lg:w-[350px] lg:h-[350px] relative shadow-lg shadow-purple-500 mt-[-50] mb-20">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-[-10px]"
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
