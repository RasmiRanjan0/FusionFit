import React from 'react';
import { motion as Motion } from 'framer-motion';

const ProgramHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with fade-in */}
      <Motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        src="/images/Programs/programs-hero.jpg" // Make sure the image exists at this path
        alt="Programs Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Animated Heading */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 flex items-center justify-center h-full"
      >
        <h1 className="text-[14vw] lg:text-[8vw] font-bold text-white leading-none text-center tracking-wide">
          PROGRAMS
        </h1>
      </Motion.div>
    </section>
  );
};

export default ProgramHero;
