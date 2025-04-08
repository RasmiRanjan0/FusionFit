import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Goals', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Class Schedules', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      {/* Outer dark background with fixed nav */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white text-black rounded-full px-6 py-4 flex items-center justify-between shadow-md">
            {/* Logo */}
            <h1 className="text-xl font-black tracking-wide">Fusion Fitness</h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-10 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-xl mt-2 mx-6 py-4 px-6 shadow-md">
            <ul className="space-y-4 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content being hidden behind fixed navbar */}
      <div className="h-[100px]" />
    </>
  );
};

export default Navbar;
