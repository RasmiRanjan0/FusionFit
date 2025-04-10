// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'Goals', href: '#' },
//     { name: 'Services', href: '#' },
//     { name: 'Class Schedules', href: '#' },
//     { name: 'Contact', href: '#' },
//   ];

//   return (
//     <>
//       {/* Outer dark background with fixed nav */}
//       <nav className="fixed top-0 left-0 w-full z-50 py-4 mt-3">
//         <div className="max-w-[1440px] mx-auto px-6">
//           <div className="bg-white text-black rounded-full px-6 py-4 flex items-center justify-between shadow-md">
//             {/* Logo */}
//             <h1 className="text-xl font-black tracking-wide">Fusion Fitness</h1>

//             {/* Desktop Nav */}
//             <ul className="hidden md:flex space-x-10 font-medium">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a href={link.href} className="hover:underline transition-all">
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Mobile Menu Icon */}
//             <button
//               className="md:hidden focus:outline-none"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-white rounded-xl mt-2 mx-6 py-4 px-6 shadow-md">
//             <ul className="space-y-4 font-medium">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a href={link.href} onClick={() => setIsOpen(false)}>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Spacer to prevent content being hidden behind fixed navbar */}
//       <div className="h-[100px]" />
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'App', href: '#' },
    { name: 'Admission', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-white backdrop-blur-md bg-black/30 rounded-full px-6 py-4 flex items-center justify-between shadow-md border border-white/10">
            {/* Logo */}
            <h1 className="text-xl font-black tracking-wide">FUSION FITNESS</h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-10 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative inline-block group text-white"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          } bg-black/70 text-white rounded-4xl mx-6 mt-2 px-6 py-4 shadow-md backdrop-blur-md border border-white/10`}
        >
          <ul className="space-y-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative inline-block group w-full text-white"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
