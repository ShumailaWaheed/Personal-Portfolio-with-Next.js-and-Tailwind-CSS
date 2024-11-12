
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold ml-[-10px]">YourBrand</h2>
          <p className="mt-2 text-lg text-gray-400 ml-[-10px]">
            Owned and operated by Shumaila Waheed
          </p>
        </div>
        <div className="space-x-6 text-lg m7-[50px]">
          <a
            href="#home"
            className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500 transition "
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500 transition"
          >
            About
          </a>
          <a
            href="#our-services"
            className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500 transition"
          >
            Contact
          </a>
        </div>

      </div>
      <div className="mt-8 border-t-2 border-gray-700 pt-6 text-center text-lg text-gray-500">
        <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
