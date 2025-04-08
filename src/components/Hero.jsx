import React from 'react';
import bgImage from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage} // Make sure this path matches your project
          alt="Focused athlete"
          className="w-full h-full object-cover object-right md:object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-56 max-w-7xl">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest">FUSION FITNESS</h1>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          MAKE YOUR <br />
          <span className="text-neutral-300">GYM</span> <br />
          <span className="text-stone-300">UNSTOPPABLE</span>
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-300 max-w-md mb-6">
          We are a complete ecosystem of <span className="font-semibold">high-quality fitness solutions</span>. We offer <span className="font-semibold">high-standard equipment</span> and a variety of services to <span className="font-semibold">set up your gym from scratch</span>.
        </p>

        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-300 transition">
            <span>Talk to an expert</span>
            <span className="inline-block text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Distributor Logo - bottom right
      <div className="absolute bottom-6 right-6 z-10">
        <div className="bg-black/60 px-4 py-2 rounded">
          <p className="text-xs text-white mb-1">DISTRIBUIDOR OFICIAL</p>
          <img src="/assets/real-leader-logo.png" alt="Realleader USA" className="w-28" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
