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



// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'Gallery', href: '#' },
//     { name: 'App', href: '#' },
//     { name: 'Admission', href: '#' },
//     { name: 'Contact', href: '#' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;

//       if (currentY > lastScrollY && currentY > 80) {
//         setShowNavbar(false); // hide on scroll down
//       } else {
//         setShowNavbar(true); // show on scroll up
//       }

//       setLastScrollY(currentY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-300 ${
//           showNavbar ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-6">
//           <div className="text-white backdrop-blur-md bg-black/30 rounded-full px-6 py-4 flex items-center justify-between shadow-md border border-white/10">
//             {/* Logo */}
//             <h1 className="text-xl font-black tracking-wide">FUSION FITNESS</h1>

//             {/* Desktop Nav */}
//             <ul className="hidden md:flex space-x-10 font-medium">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="relative inline-block group text-white"
//                   >
//                     {link.name}
//                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Hamburger */}
//             <button
//               className="md:hidden focus:outline-none"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Animated Mobile Menu */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
//             isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
//           } bg-black/70 text-white rounded-4xl mx-6 mt-2 px-6 py-4 shadow-md backdrop-blur-md border border-white/10`}
//         >
//           <ul className="space-y-4 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="relative inline-block group w-full text-white"
//                 >
//                   {link.name}
//                   <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', to: '/' },
//     { name: 'Gallery', to: '/gallery' },
//     { name: 'App', to: '/app' },
//     { name: 'Admission', to: '/admission' },
//     { name: 'Contact', to: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;

//       if (currentY > lastScrollY && currentY > 80) {
//         setShowNavbar(false); // hide on scroll down
//       } else {
//         setShowNavbar(true); // show on scroll up
//       }

//       setLastScrollY(currentY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Auto close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-300 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         <div className="text-white backdrop-blur-md bg-black/30 rounded-full px-6 py-4 flex items-center justify-between shadow-md border border-white/10">
//           {/* Logo */}
//           <h1 className="text-xl font-black tracking-wide">FUSION FITNESS</h1>

//           {/* Desktop Nav */}
//           <ul className="hidden md:flex space-x-10 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.to}
//                   className={`relative inline-block group text-white ${
//                     location.pathname === link.to ? 'font-bold' : ''
//                   }`}
//                 >
//                   {link.name}
//                   <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Hamburger */}
//           <button
//             className="md:hidden focus:outline-none text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
//           isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
//         } bg-black/70 text-white rounded-4xl mx-6 mt-2 px-6 py-4 shadow-md backdrop-blur-md border border-white/10`}
//       >
//         <ul className="space-y-4 font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link
//                 to={link.to}
//                 className={`relative inline-block group w-full text-white ${
//                   location.pathname === link.to ? 'font-bold' : ''
//                 }`}
//               >
//                 {link.name}
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'HOME', to: '/' },
//     { name: 'GALLERY', to: '/gallery' },
//     { name: 'APP', to: '/app' },
//     { name: 'ADMISSION', to: '/admission' },
//     { name: 'CONTACT', to: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY > lastScrollY && currentY > 80) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(currentY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-300 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         <div className="text-white backdrop-blur-md bg-black/30 rounded-full px-6 py-4 flex items-center justify-between shadow-md border border-white/10">
//           {/* Logo */}
//           <h1 className="text-xl font-black tracking-wide">FUSION FITNESS</h1>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex space-x-10 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name} className="group relative">
//                 <Link
//                   to={link.to}
//                   className={`text-white transition-all duration-300 ${
//                     isActive(link.to) ? 'font-bold' : ''
//                   }`}
//                 >
//                   {link.name}
//                   {/* Underline */}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 
//                     ${
//                       isActive(link.to)
//                         ? 'w-full'
//                         : 'w-0 group-hover:w-full'
//                     }`}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden focus:outline-none text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
//           isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
//         } bg-black/70 text-white rounded-4xl mx-6 mt-2 px-6 py-4 shadow-md backdrop-blur-md border border-white/10`}
//       >
//         <ul className="space-y-4 font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name} className="group relative">
//               <Link
//                 to={link.to}
//                 className={`text-white transition-all duration-300 ${
//                   isActive(link.to) ? 'font-bold' : ''
//                 }`}
//               >
//                 {link.name}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 
//                   ${
//                     isActive(link.to)
//                       ? 'w-full'
//                       : 'w-0 group-hover:w-full'
//                   }`}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { motion as Motion } from 'framer-motion'; // ✅ Properly renamed for ESLint

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'HOME', to: '/' },
//     { name: 'GALLERY', to: '/gallery' },
//     { name: 'APP', to: '/app' },
//     { name: 'ADMISSION', to: '/admission' },
//     { name: 'CONTACT', to: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY > lastScrollY && currentY > 80) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(currentY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <Motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: showNavbar ? 0 : -100 }}
//       transition={{ duration: 0.4, ease: 'easeInOut' }}
//       className="fixed top-0 left-0 w-full z-50 py-4"
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         <div className="text-white backdrop-blur-md bg-black/30 rounded-full px-6 py-4 flex items-center justify-between shadow-md border border-white/10">
//           {/* Logo */}
//           <h1 className="text-xl font-black tracking-wide">FUSION FITNESS</h1>

//           {/* Desktop Nav */}
//           <ul className="hidden md:flex space-x-10 font-medium">
//             {navLinks.map((link, i) => (
//               <Motion.li
//                 key={link.name}
//                 className="group relative"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <Link
//                   to={link.to}
//                   className={`text-white transition-all duration-300 ${
//                     isActive(link.to) ? 'font-bold' : ''
//                   }`}
//                 >
//                   {link.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 
//                     ${
//                       isActive(link.to)
//                         ? 'w-full'
//                         : 'w-0 group-hover:w-full'
//                     }`}
//                   />
//                 </Link>
//               </Motion.li>
//             ))}
//           </ul>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden focus:outline-none text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Animated Mobile Menu */}
//       <Motion.div
//         initial={false}
//         animate={{
//           scaleY: isOpen ? 1 : 0,
//           opacity: isOpen ? 1 : 0,
//         }}
//         transition={{ duration: 0.3, ease: 'easeInOut' }}
//         className="md:hidden origin-top bg-black/70 text-white rounded-4xl mx-6 mt-2 px-6 py-4 shadow-md backdrop-blur-md border border-white/10"
//         style={{ transformOrigin: 'top' }}
//       >
//         <ul className="space-y-4 font-medium">
//           {navLinks.map((link, i) => (
//             <Motion.li
//               key={link.name}
//               className="group relative"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//             >
//               <Link
//                 to={link.to}
//                 className={`text-white transition-all duration-300 ${
//                   isActive(link.to) ? 'font-bold' : ''
//                 }`}
//               >
//                 {link.name}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 
//                   ${
//                     isActive(link.to)
//                       ? 'w-full'
//                       : 'w-0 group-hover:w-full'
//                   }`}
//                 />
//               </Link>
//             </Motion.li>
//           ))}
//         </ul>
//       </Motion.div>
//     </Motion.nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { motion as Motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const location = useLocation();

//   const leftLinks = [
//     { name: 'HOME', to: '/' },
//     { name: 'GALLERY', to: '/gallery' },
//     { name: 'PROJECTS', to: '/projects' },
//   ];

//   const rightLinks = [
//     { name: 'ABOUT', to: '/about' },
//     { name: 'BLOG', to: '/blog' },
//     { name: 'CONTACT', to: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY > lastScrollY && currentY > 80) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(currentY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <Motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: showNavbar ? 0 : -100 }}
//       transition={{ duration: 0.4, ease: 'easeInOut' }}
//       className="fixed top-0 left-0 w-full z-50 py-4 "
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         <div className="flex items-center justify-between text-white px-6 py-3 rounded-full border border-white/10 shadow-md backdrop-blur-md bg-black/50">
//           {/* Left Links */}
//           <ul className="hidden md:flex space-x-8 font-medium">
//             {leftLinks.map((link) => (
//               <li key={link.name} className="group relative">
//                 <Link
//                   to={link.to}
//                   className={`transition-all duration-300 ${
//                     isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   {link.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
//                       isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
//                     }`}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Center Logo */}
//           <h1 className="text-4xl font-black tracking-wide">F<span className='text-red-500'>.</span></h1>

//           {/* Right Links */}
//           <ul className="hidden md:flex space-x-8 font-medium">
//             {rightLinks.map((link) => (
//               <li key={link.name} className="group relative">
//                 <Link
//                   to={link.to}
//                   className={`transition-all duration-300 ${
//                     isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   {link.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
//                       isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
//                     }`}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden focus:outline-none text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <Motion.div
//         initial={false}
//         animate={{
//           scaleY: isOpen ? 1 : 0,
//           opacity: isOpen ? 1 : 0,
//         }}
//         transition={{ duration: 0.3, ease: 'easeInOut' }}
//         className="md:hidden origin-top bg-black/70 text-white rounded-4xl mx-6 mt-2 px-6 py-4 shadow-md backdrop-blur-md border border-white/10"
//         style={{ transformOrigin: 'top' }}
//       >
//         <ul className="space-y-4 font-medium text-center">
//           {[...leftLinks, ...rightLinks].map((link) => (
//             <li key={link.name} className="group relative">
//               <Link
//                 to={link.to}
//                 className={`transition-all duration-300 ${
//                   isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
//                 }`}
//               >
//                 {link.name}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
//                     isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
//                   }`}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </Motion.div>
//     </Motion.nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { motion as Motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const location = useLocation();

//   const leftLinks = [
//     { name: 'HOME', to: '/' },
//     { name: 'GALLERY', to: '/gallery' },
//     { name: 'PROJECTS', to: '/projects' },
//   ];

//   const rightLinks = [
//     { name: 'ABOUT', to: '/about' },
//     { name: 'BLOG', to: '/blog' },
//     { name: 'CONTACT', to: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY > lastScrollY && currentY > 80) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(currentY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   const isActive = (path) => location.pathname === path;

//   // Motion variants for full-screen menu
//   const menuVariants = {
//     hidden: {
//       opacity: 0,
//       x: '50%',
//       y: '-50%',
//       scale: 0.95,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.45,
//         ease: 'easeOut',
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: '-50%',
//       y: '50%',
//       scale: 0.95,
//       transition: {
//         duration: 0.35,
//         ease: 'easeIn',
//       },
//     },
//   };

//   return (
//     <Motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: showNavbar ? 0 : -100 }}
//       transition={{ duration: 0.4, ease: 'easeInOut' }}
//       className="fixed top-0 left-0 w-full z-50 py-4"
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         <div className="flex items-center justify-between text-white px-6 py-3 rounded-full border border-white/10 shadow-md backdrop-blur-md bg-black/50">
//           {/* Left Links */}
//           <ul className="hidden md:flex space-x-8 font-medium">
//             {leftLinks.map((link) => (
//               <li key={link.name} className="group relative">
//                 <Link
//                   to={link.to}
//                   className={`transition-all duration-300 ${
//                     isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   {link.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
//                       isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
//                     }`}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Center Logo */}
//           <h1 className="text-4xl font-black tracking-wide">
//             F<span className="text-red-500">.</span>
//           </h1>

//           {/* Right Links */}
//           <ul className="hidden md:flex space-x-8 font-medium">
//             {rightLinks.map((link) => (
//               <li key={link.name} className="group relative">
//                 <Link
//                   to={link.to}
//                   className={`transition-all duration-300 ${
//                     isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   {link.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
//                       isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
//                     }`}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden focus:outline-none text-white z-[100]"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Full Page Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <Motion.div
//             key="mobileMenu"
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center space-y-8 text-2xl font-medium z-40"
//           >
//             {/* Close Button (Top Right) */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-10 right-10 text-white"
//             >
//               <FaTimes size={28} />
//             </button>

//             {[...leftLinks, ...rightLinks].map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.to}
//                 onClick={() => setIsOpen(false)}
//                 className={`group relative transition-all duration-300 ${
//                   isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
//                 }`}
//               >
//                 {link.name}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
//                     isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
//                   }`}
//                 />
//               </Link>
//             ))}
//           </Motion.div>
//         )}
//       </AnimatePresence>
//     </Motion.nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const leftLinks = [
    { name: 'HOME', to: '/' },
    { name: 'GALLERY', to: '/gallery' },
    { name: 'PROJECTS', to: '/projects' },
  ];

  const rightLinks = [
    { name: 'ABOUT', to: '/about' },
    { name: 'BLOG', to: '/blog' },
    { name: 'CONTACT', to: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: 'easeIn',
      },
    },
  };

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-50 py-4"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between text-white px-6 py-3 rounded-full border border-white/10 shadow-md backdrop-blur-md bg-black/50">
          {/* Left Links */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {leftLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link
                  to={link.to}
                  className={`transition-all duration-300 ${
                    isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                      isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <h1 className="text-4xl font-black tracking-wide">
            F<span className="text-red-500">.</span>
          </h1>

          {/* Right Links */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {rightLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link
                  to={link.to}
                  className={`transition-all duration-300 ${
                    isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                      isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden focus:outline-none text-white z-[100]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            key="mobileMenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center space-y-8 text-2xl font-medium z-40"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white"
            >
              <FaTimes size={28} />
            </button>

            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`group relative transition-all duration-300 ${
                  isActive(link.to) ? 'font-bold text-white' : 'text-gray-300'
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
