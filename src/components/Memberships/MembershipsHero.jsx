// import React from 'react';
// import { motion as Motion } from 'framer-motion';

// const MembershipsHero = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Image with fade-in */}
//       <Motion.img
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2, ease: 'easeOut' }}
//         src="/images/Memberships/memberships-hero.jpg" // update path if needed
//         alt="Memberships Hero Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Animated Heading */}
//       <Motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className="relative z-20 flex items-center justify-center h-full"
//       >
//         <h1 className="text-[12vw] lg:text-[8vw] font-bold text-white leading-none text-center tracking-wide">
//           MEMBERSHIPS
//         </h1>
//       </Motion.div>
//     </section>
//   );
// };

// export default MembershipsHero;




// import React from 'react';
// import { motion as Motion } from 'framer-motion';
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaDribbble,
// } from 'react-icons/fa';

// const MembershipsHero = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden text-white">
//       {/* Background Image */}
//       <Motion.img
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2, ease: 'easeOut' }}
//         src="/images/Memberships/memberships-hero.jpg" // Update if needed
//         alt="Memberships Hero Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay Shadow */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* Center Title */}
//       <Motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className="relative z-20 flex items-center justify-center h-full"
//       >
//         <h1 className="text-[12vw] lg:text-[8vw] font-bold leading-none tracking-wide text-white text-center">
//           MEMBERSHIPS
//         </h1>
//       </Motion.div>

//       {/* Bottom-left Text */}
//       <div className="absolute bottom-15 2xl:bottom-6 left-6 sm:left-12 z-20 text-xs sm:text-sm font-medium tracking-widest 2xl:pl-[6.6%]">
//         <p>WE HAVE THE</p>
//         <p>PERFECT</p>
//         <p>MEMBERSHIP FOR</p>
//         <p>YOU.</p>
//       </div>

//       {/* Bottom-right Social Icons */}
//       <div className="absolute bottom-15 2xl:bottom-6 right-6 sm:right-12 z-20 flex gap-4 text-white text-base 2xl:pr-[6.6%]">
//         {[FaInstagram, FaFacebookF, FaTwitter, FaDribbble].map((Icon, i) => (
//           <a
//             key={i}
//             href="#"
//             className="hover:text-gray-300 transition"
//           >
//             <Icon size={18} />
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MembershipsHero;




import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';

// Motion Variants for staggered icon animation
const iconContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.7,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const MembershipsHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Image */}
      <Motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        src="/images/Memberships/memberships-hero.jpg"
        alt="Memberships Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Shadow */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Center Title */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 flex items-center justify-center h-full"
      >
        <h1 className="text-[12vw] lg:text-[8vw] font-bold leading-none tracking-wide text-white text-center">
          MEMBERSHIPS
        </h1>
      </Motion.div>

      {/* Bottom-left Text with Slide-Up Motion */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-15  2xl:bottom-6 left-6 sm:left-12 z-20 text-xs sm:text-sm font-medium tracking-widest 2xl:pl-[6.6%]"
      >
        <p>WE HAVE THE</p>
        <p>PERFECT</p>
        <p>MEMBERSHIP FOR</p>
        <p>YOU.</p>
      </Motion.div>

      {/* Bottom-right Social Icons with Staggered Motion */}
      <Motion.div
        variants={iconContainer}
        initial="hidden"
        animate="visible"
        className="absolute bottom-15  2xl:bottom-6 right-6 sm:right-12 z-20 flex gap-4 text-white text-base 2xl:pr-[6.6%]"
      >
        {[FaInstagram, FaFacebookF, FaTwitter, FaDribbble].map((Icon, i) => (
          <Motion.a
            key={i}
            href="#"
            variants={iconItem}
            className="hover:text-gray-300 transition"
          >
            <Icon size={18} />
          </Motion.a>
        ))}
      </Motion.div>
    </section>
  );
};

export default MembershipsHero;
