import React from 'react';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer2 = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 text-center flex flex-col items-center space-y-6">
      {/* Top Label */}
      <p className="text-xs tracking-widest font-medium uppercase text-gray-400">
        ( Find us online )
      </p>

      {/* Username */}
      <h2 className="text-4xl sm:text-7xl font-extrabold">@FUSIONFITNESS</h2>

      {/* Social Icons */}
      <div className="flex items-center justify-center space-x-4 text-xl">
        <a href="#" className="hover:text-gray-300 transition">
          <FaLinkedin />
        </a>
        <span className="text-gray-600">|</span>
        <a href="#" className="hover:text-gray-300 transition">
          <FaInstagram />
        </a>
        <span className="text-gray-600">|</span>
        <a href="#" className="hover:text-gray-300 transition">
          <FaXTwitter />
        </a>
      </div>

      {/* Bottom links */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold mt-4 text-gray-400">
        <a href="#" className="hover:text-white hover:underline">Terms</a>
        <span className="text-gray-600">|</span>
        <a href="#" className="hover:text-white hover:underline">Policy</a>
        <span className="text-gray-600">|</span>
        <span className="text-white">2025</span>
      </div>
    </footer>
  );
};

export default Footer2;
