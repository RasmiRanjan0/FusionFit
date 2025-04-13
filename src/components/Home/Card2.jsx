import React from 'react';

const Card2 = ({ image, title, subtitle }) => {
  return (
    <div className="min-w-[280px] h-[400px] flex-shrink-0 bg-[#111] rounded-xl overflow-hidden shadow-md relative group">
      {/* Relative wrapper for absolute children */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 p-4 h-full flex flex-col justify-end">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Card2;
