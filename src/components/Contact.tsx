"use client";

import React, { useState } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields before submitting.");
    } else {
      setErrorMessage("");
      alert("Message sent!");
    }
  };

  return (
    <>
      <nav className="bg-[#1c1c1c] p-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#contact" className="text-white text-lg font-semibold hover:text-[#9b59b6] transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="contact" className="py-16 px-4 text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center font-bold mb-8" style={{ marginTop: '-50px' }}>Contact Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 sm:p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <FaEnvelope className="text-7xl text-gray-400 hover:text-[#9b59b6] transition-colors duration-300" />
                </div>
                <h4 className="text-2xl font-semibold text-center">Email</h4>
                <p className="mt-4 text-center text-lg">shumaila@example.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 sm:p-6 bg-[#1c1c1c] rounded-lg shadow-xl shadow-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] transition-all ease-in-out relative flex flex-col items-center cursor-pointer active:shadow-2xl hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <FaGithub className="text-7xl text-gray-400 hover:text-[#9b59b6] transition-colors duration-300" />
                </div>
                <h4 className="text-2xl font-semibold text-center">GitHub</h4>
                <p className="mt-4 text-center text-lg">
                  <a
                    href="https://github.com/ShumailaWaheed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9b59b6] transition-colors duration-300"
                  >
                    github.com/ShumailaWaheed
                  </a>
                </p>
              </motion.div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 mt-2 bg-[#1c1c1c] border border-[#9b59b6] text-white text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)]"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 mt-2 bg-[#1c1c1c] border border-[#9b59b6] text-white text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 bg-[#1c1c1c] border border-[#9b59b6] text-white text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)]"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 mt-2 bg-[#1c1c1c] border border-[#9b59b6] text-white text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#9b59b6] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)]"
                  />
                </div>

                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1c1c1c] text-white text-lg font-semibold rounded-lg shadow-md border-2 border-transparent bg-gradient-to-r from-purple-500 to-purple-700 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-500 transition-all duration-300 shadow-[0_4px_15px_rgba(100,200,250,0.5)] hover:shadow-[0_5px_20px_rgba(128,0,128,0.6)] hover:border-2 hover:border-purple-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
