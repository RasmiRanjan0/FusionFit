// import React from 'react';
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaDribbble,
// } from 'react-icons/fa';

// const Footer3 = () => {
//   return (
//     <footer className=" text-white px-4 py-10 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
//       {/* Top Bar */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6 space-y-6 md:space-y-0 text-center md:text-left">
//         {/* Powered by */}
//         <div className="text-xs text-gray-400">
//           <p>Powered by</p>
//           <p className="font-semibold">DevAffairs</p>
//         </div>

//         {/* Nav links */}
//         <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-400">
//           <a href="#" className="hover:text-white transition">ABOUT</a>
//           <a href="#" className="hover:text-white transition">CLASSES</a>
//           <a href="#" className="hover:text-white transition">MEMBERSHIPS</a>
//           <a href="#" className="hover:text-white transition">CONTACT</a>
//           <a href="#" className="hover:text-white transition">BLOG</a>
//           <a href="#" className="hover:text-white transition">LICENSE</a>
//         </nav>
//       </div>

//       {/* Bottom Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 text-center md:text-left">
//         {/* Brand */}
//         <h2 className="text-5xl sm:text-6xl md:text-7xl font-light">FUSIONFITNESS</h2>

//         {/* Contact */}
//         <div className="space-y-2 text-sm">
//           <p className="text-white font-medium">CONTACT@ZENFIT.COM</p>
//           <p className="text-gray-400">(555) 123-4567</p>
//           <p className="text-gray-400">
//             123 FITNESS STREET, GYMTOWN, FITLAND
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-start gap-4 pt-2 text-white text-lg">
//             <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
//             <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
//             <a href="#" className="hover:text-gray-300 transition"><FaTwitter /></a>
//             <a href="#" className="hover:text-gray-300 transition"><FaDribbble /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer3;



// import React from 'react';
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaDribbble,
// } from 'react-icons/fa';
// import { motion as Motion } from 'framer-motion';

// const Footer3 = () => {
//   return (
//     <footer className="text-white px-4 py-10 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
//       {/* Top Bar */}
//       <Motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6 space-y-6 md:space-y-0 text-center md:text-left"
//       >
//         {/* Powered by */}
//         <div className="text-xs text-gray-400">
//           <p>Powered by</p>
//           <p className="font-semibold">DevAffairs</p>
//         </div>

//         {/* Nav links */}
//         <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-400">
//           {['ABOUT', 'CLASSES', 'MEMBERSHIPS', 'CONTACT', 'BLOG', 'LICENSE'].map((link, idx) => (
//             <a
//               key={idx}
//               href="#"
//               className="hover:text-white transition duration-300"
//             >
//               {link}
//             </a>
//           ))}
//         </nav>
//       </Motion.div>

//       {/* Bottom Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 text-center md:text-left">
//         {/* Brand */}
//         <Motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//           className="text-[9vw] sm:text-6xl md:text-7xl font-light"
//         >
//           FUSIONFITNESS
//         </Motion.h2>

//         {/* Contact */}
//         <Motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
//           className="space-y-2 text-sm"
//         >
//           <p className="text-white font-medium">CONTACT@ZENFIT.COM</p>
//           <p className="text-gray-400">(555) 123-4567</p>
//           <p className="text-gray-400">
//             123 FITNESS STREET, GYMTOWN, FITLAND
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-start gap-4 pt-2 text-white text-lg">
//             {[FaInstagram, FaFacebookF, FaTwitter, FaDribbble].map((Icon, i) => (
//               <Motion.a
//                 key={i}
//                 href="#"
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//                 className="hover:text-gray-300 transition"
//               >
//                 <Icon />
//               </Motion.a>
//             ))}
//           </div>
//         </Motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer3;





import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';

const Footer3 = () => {
  return (
    <footer className="text-white px-4 py-12 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
      {/* Top Bar */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6 space-y-6 md:space-y-0 text-center md:text-left"
      >
        {/* Powered by */}
        <div className="text-xs text-gray-400">
          <p>Powered by <span className="font-semibold">DevAffairs</span> </p>
          
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-5 text-sm font-medium text-gray-400">
          {['HOME', 'GALLERY', 'MEMBERSHIPS', 'ABOUT', 'PROGRAMS', 'CONTACT'].map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-white transition duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
      </Motion.div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 text-center md:text-left">
        {/* Brand */}
        <Motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-normal"
        >
          FUSION<span className='text-red-500'> FITNESS</span>
        </Motion.h2>

        {/* Contact */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="space-y-2 text-sm md:flex md:flex-col md:items-end " 
        >
          <p className="text-white font-medium">CONTACT@ZENFIT.COM</p>
          <p className="text-gray-400">(555) 123-4567</p>
          <p className="text-gray-400">
            123 FITNESS STREET, GYMTOWN, FITLAND
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 pt-3 text-white text-lg">
            {[FaInstagram, FaFacebookF, FaTwitter, FaDribbble].map((Icon, i) => (
              <Motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:text-gray-300 transition"
              >
                <Icon />
              </Motion.a>
            ))}
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer3;
