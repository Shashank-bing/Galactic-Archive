import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6 relative z-50">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-sky-400 transition">About</a></li>
            <li><a href="#timeline" className="hover:text-sky-400 transition">Timeline</a></li>
            <li><a href="#login" className="hover:text-sky-400 transition">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MdEmail className="text-sky-400 text-xl" /> shashanksingh31804@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-sky-400 text-xl" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-sky-400 text-xl" /> India, Earth
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-sky-500 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700 max-w-[1200px] mx-auto" />

      <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <span>&copy; 2025 Galactic Archive. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
