// import React from 'react';
// import { motion as Motion } from 'framer-motion';

// const AboutHero = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Image with fade-in */}
//       <Motion.img
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2, ease: 'easeOut' }}
//         src="/images/About/about-hero.webp"
//         alt="About Hero Background"
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
//         <h1 className="text-[15vw] lg:text-[9vw] font-bold text-white leading-none text-center tracking-wide">
//           ABOUT
//         </h1>
//       </Motion.div>
//     </section>
//   );
// };

// export default AboutHero;




import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';

// Motion variants for staggered icons
const iconContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
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

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Image */}
      <Motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        src="/images/About/about-hero.webp"
        alt="About Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated Center Heading */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 flex items-center justify-center h-full px-4"
      >
        <h1 className="text-[15vw] lg:text-[9vw] font-bold text-white leading-none text-center tracking-wide">
          ABOUT
        </h1>
      </Motion.div>

      {/* Bottom-left Description Text */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-15  2xl:bottom-6 left-6 sm:left-12 z-20 text-[11px] sm:text-xs font-medium tracking-widest leading-snug max-w-[240px] 2xl:pl-[6.6%]"
      >
        <p>MEET OUR TEAM</p>
        <p>AND OUR MISSION</p>
        <p>TO EMPOWER FITNESS</p>
      </Motion.div>

      {/* Bottom-right Social Icons */}
      <Motion.div
        variants={iconContainer}
        initial="hidden"
        animate="visible"
        className="absolute bottom-15  2xl:bottom-6 right-6 sm:right-12 z-20 flex gap-4 text-base 2xl:pr-[6.6%]"
      >
        {[FaInstagram, FaFacebookF, FaTwitter, FaDribbble].map((Icon, i) => (
          <Motion.a
            key={i}
            href="#"
            variants={iconItem}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hover:text-gray-300 transition"
          >
            <Icon size={18} />
          </Motion.a>
        ))}
      </Motion.div>
    </section>
  );
};

export default AboutHero;
