import React from 'react';

const Button1 = ({ label = "VIEW ALL", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
    >
      {label}
      <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
        →
      </span>
    </button>
  );
};

export default Button1;
