import React from 'react';

// Image imports (adjust paths based on your structure)
import machinesImg from '../assets/hero-bg.jpg';
import careImg from '../assets/hero-bg.jpg';
import gaasImg from '../assets/hero-bg.jpg';

const services = [
  {
    title: 'BUCKLER MACHINES',
    image: machinesImg,
  },
  {
    title: 'BUCKLER CARE',
    image: careImg,
  },
  {
    title: 'BUCKLER GAAS',
    image: gaasImg,
  },
];

const CompleteExperience = () => {
  return (
    <section className="bg-[#E7E2DF] px-6 py-16 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-700 tracking-widest flex items-center justify-center gap-2">
          <span className="text-[10px]">●</span> BUCKLER 360
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight text-black">
          A COMPLETE EXPERIENCE
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden bg-[#2B2B2B] h-[400px] flex items-end"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
            {/* Arrow icon */}
            <div className="absolute top-4 right-4 z-20 text-white text-xl font-semibold">↗</div>
            {/* Title */}
            <div className="relative z-20 p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-3 px-6 py-3 bg-[#D8CEBC] text-black rounded-full font-medium hover:bg-[#cfc4ad] transition">
          Talk to an expert
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default CompleteExperience;
