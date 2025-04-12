import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';

const Footer3 = () => {
  return (
    <footer className=" text-white px-6 py-10 md:px-12 lg:px-20  max-w-[1440px] mx-auto">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6 space-y-6 md:space-y-0">
        {/* Powered by */}
        <div className="text-xs text-gray-400">
          <p>Powered by</p>
          <p className="font-semibold">DevAffairs</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition">ABOUT</a>
          <a href="#" className="hover:text-white transition">CLASSES</a>
          <a href="#" className="hover:text-white transition">MEMBERSHIPS</a>
          <a href="#" className="hover:text-white transition">CONTACT</a>
          <a href="#" className="hover:text-white transition">BLOG</a>
          <a href="#" className="hover:text-white transition">LICENSE</a>
        </nav>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        {/* Brand name */}
        <h2 className="text-6xl sm:text-7xl font-normal text-white">FUSIONFITNESS</h2>

        {/* Contact info */}
        <div className="space-y-2 text-sm text-right md:text-right ">
          <p className="text-white font-medium">CONTACT@ZENFIT.COM</p>
          <p className="text-gray-400">(555) 123-4567</p>
          <p className="text-gray-400">
            123 FITNESS STREET, GYMTOWN, FITLAND
          </p>

          {/* Social icons */}
          <div className="flex justify-end md:justify-end gap-4 pt-2 text-white text-lg">
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
