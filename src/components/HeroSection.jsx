// import React from 'react';
// import heroBg from '../assets/hero-bg.jpg'; // adjust the path based on your file structure

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
//       {/* Background image overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBg}
//           alt="Cyclist"
//           className="w-full h-full object-cover object-center opacity-60"
//         />
//         <div className="absolute inset-0 bg-black/10" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
//         <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-tight">
//         MAKE YOUR GYM<br />
//           <span className="block">UNSTOPPABLE</span>
//         </h1>
//         <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200">
//           We are a complete ecosystem of high-quality fitness solutions.<br/>
//           We offer high-standard equipment and a variety of services<br/> 
//           to set up your gym from scratch.
//         </p>

//         {/* Call to action */}
//         <div className="mt-8">
//           <button className="relative inline-flex items-center px-6 py-3 text-black font-medium rounded-full bg-white hover:bg-white transition duration-300 hover:shadow-xl shadow-white/40">
//             Join waitlist →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from 'react';
import { motion as Motion } from 'framer-motion'; // Rename "motion" to "Motion"

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/videos/gym-background.mp4" // Ensure your video is placed in the public/videos folder
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Animated Hero Content */}
      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl"
      >
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight"
        >
          MAKE YOUR GYM<br />
          <span className="block">UNSTOPPABLE</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-200"
        >
          We are a complete ecosystem of high-quality fitness solutions.<br />
          We offer high-standard equipment and a variety of services<br />
          to set up your gym from scratch.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <button className="relative inline-flex items-center px-6 py-3 text-black font-medium rounded-full bg-white hover:bg-white transition duration-300 hover:shadow-xl shadow-white/40">
            Join waitlist →
          </button>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;
