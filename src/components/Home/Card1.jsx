// components/Card1.jsx
import React from 'react';

const Card1 = ({ image, title }) => {
  return (
    <div className="min-w-[280px] h-[400px] flex-shrink-0 relative group rounded-xl overflow-hidden bg-[#2B2B2B] flex items-end">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />

      {/* Arrow Icon (Desktop only) */}
      <div className="absolute right-6 sm:right-12 bottom-6 z-20 text-white text-xl font-semibold hidden sm:block">
        →
      </div>

      {/* Title */}
      <div className="relative z-20 p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default Card1;
