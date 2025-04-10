// import React from 'react';

// // Image imports
// import treadmillImg from '../assets/fitness-bg.png';
// import distributorLogo from '../assets/fitness-bg.png';

// const OurMachines = () => {
//   return (
//     <section className="bg-[#E7E2DF] px-6 py-16 md:px-20">
//       {/* Title */}
//       <div className="text-center mb-12">
//         <p className="text-sm font-medium text-gray-700 tracking-widest flex items-center justify-center gap-2">
//           <span className="text-[10px]">●</span> OUR MACHINES
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold mt-2 text-black max-w-5xl mx-auto leading-snug">
//           TRANSFORM YOUR GYM INTO THE SPACE <br /> YOU'VE ALWAYS DREAMED OF
//         </h2>
//       </div>

//       {/* Content container */}
//       <div className="bg-[#EAE3D9] rounded-2xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between max-w-[1440px] mx-auto shadow-xl">
//         {/* Left content */}
//         <div className="w-full lg:w-1/2">
//           <div className="mb-6">
//             <p className="text-xs font-semibold text-black mb-2">DISTRIBUIDOR OFICIAL</p>
//             <img src={distributorLogo} alt="Realleader USA" className="w-40" />
//           </div>
//           <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">BUCKLER MACHINES</h3>
//           <p className="text-sm md:text-base text-gray-800 mb-6">
//             Transcend the ordinary with our product line. Here, excellence meets innovation,
//             bringing you the most advanced technology on the market in a way you've never seen
//             before. Every detail, every movement, every piece of equipment is designed to deliver
//             an unparalleled training experience. With Inception, you don't just train – you evolve.
//           </p>
//           <button className="flex items-center gap-3 px-6 py-3 bg-[#D8CEBC] text-black rounded-full font-medium hover:bg-[#cfc4ad] transition">
//             Talk to an expert
//             <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//               →
//             </span>
//           </button>
//         </div>

//         {/* Right image */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="bg-[#F0EAE2] p-6 rounded-2xl flex flex-col items-center justify-center">
//             <img
//               src={treadmillImg}
//               alt="Buckler treadmill"
//               className="w-full max-w-md mx-auto"
//             />

//             {/* Progress bar and counter */}
//             <div className="mt-8 w-full flex flex-col items-center">
//               {/* Dots */}
//               <div className="flex gap-2 mb-2">
//                 {[...Array(8)].map((_, i) => (
//                   <span
//                     key={i}
//                     className={`h-[2px] w-6 ${
//                       i === 6 ? 'bg-black' : 'bg-[#C8C1B6]'
//                     } rounded-full`}
//                   />
//                 ))}
//               </div>
//               {/* Counter */}
//               <p className="text-sm font-semibold text-black">07 / 08</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurMachines;


//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk


// import React from 'react';

// // Image imports
// import treadmillImg from '../assets/fitness-bg.png';
// // import distributorLogo from '../assets/fitness-bg.png';

// const OurMachines = () => {
//   return (
//     <section className="bg-black px-6 py-16 md:px-20 text-white">
//       {/* Title */}
//       <div className="text-center mb-12">
//         <p className="text-sm font-medium text-gray-400 tracking-widest flex items-center justify-center gap-2">
//           <span className="text-[10px]">●</span> OUR MACHINES
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold mt-2 max-w-5xl mx-auto leading-snug">
//           TRANSFORM YOUR GYM INTO THE SPACE <br /> YOU'VE ALWAYS DREAMED OF
//         </h2>
//       </div>

//       {/* Content container */}
//       <div className="bg-[#1F1F1F] rounded-4xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between max-w-[1440px] mx-auto shadow-xl">
//         {/* Left content */}
//         <div className="w-full lg:w-1/2">
//           {/* <div className="mb-6">
//             <p className="text-xs font-semibold text-white mb-2">DISTRIBUIDOR OFICIAL</p>
//             <img src={distributorLogo} alt="Realleader USA" className="w-40" />
//           </div> */}
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">BUCKLER MACHINES</h3>
//           <p className="text-sm md:text-base text-gray-300 mb-6">
//             Transcend the ordinary with our product line. Here, excellence meets innovation,
//             bringing you the most advanced technology on the market in a way you've never seen
//             before. Every detail, every movement, every piece of equipment is designed to deliver
//             an unparalleled training experience. With Inception, you don't just train – you evolve.
//           </p>
//           <button className="flex items-center gap-3 px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition">
//             Talk to an expert
//             <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
//               →
//             </span>
//           </button>
//         </div>

//         {/* Right image */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="bg-[#2B2B2B] p-6 rounded-3xl flex flex-col items-center justify-center">
//             <img
//               src={treadmillImg}
//               alt="Buckler treadmill"
//               className="w-full max-w-md mx-auto"
//             />

//             {/* Progress bar and counter */}
//             <div className="mt-8 w-full flex flex-col items-center">
//               {/* Dots */}
//               <div className="flex gap-2 mb-2">
//                 {[...Array(8)].map((_, i) => (
//                   <span
//                     key={i}
//                     className={`h-[2px] w-6 ${
//                       i === 6 ? 'bg-white' : 'bg-[#555555]'
//                     } rounded-full`}
//                   />
//                 ))}
//               </div>
//               {/* Counter */}
//               <p className="text-sm font-semibold text-white">07 / 08</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurMachines;




import React, { useEffect, useState } from 'react';

// Image imports
import treadmill1 from '../assets/fitness-bg.png';
import treadmill2 from '../assets/hero-bg.jpg';
import treadmill3 from '../assets/fitness-bg.png';
import treadmill4 from '../assets/hero-bg.jpg';
import treadmill5 from '../assets/fitness-bg.png';
import treadmill6 from '../assets/hero-bg.jpg';
import treadmill7 from '../assets/fitness-bg.png';
import treadmill8 from '../assets/hero-bg.jpg';

const images = [
  treadmill1,
  treadmill2,
  treadmill3,
  treadmill4,
  treadmill5,
  treadmill6,
  treadmill7,
  treadmill8,
];

const OurMachines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black px-4 sm:px-6 md:px-20 py-16 text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-400 tracking-widest flex items-center justify-center gap-2">
          <span className="text-[10px]">●</span> OUR MACHINES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 max-w-5xl mx-auto leading-snug">
          TRANSFORM YOUR GYM INTO THE SPACE <br className="hidden sm:block" /> YOU&apos;VE ALWAYS
          DREAMED OF
        </h2>
      </div>

      {/* Content container */}
      <div className="bg-[#1F1F1F] rounded-4xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between max-w-[1440px] mx-auto shadow-xl">
        {/* Left content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">BUCKLER MACHINES</h3>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Transcend the ordinary with our product line. Here, excellence meets innovation,
            bringing you the most advanced technology on the market in a way you&apos;ve never seen
            before. Every detail, every movement, every piece of equipment is designed to deliver
            an unparalleled training experience. With Inception, you don&apos;t just train – you
            evolve.
          </p>
          <button className="flex items-center gap-3 px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition">
            Talk to an expert
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
              →
            </span>
          </button>
        </div>

        {/* Right slideshow */}
        <div className="w-full lg:w-1/2 relative">
          <div className="bg-[#2B2B2B] p-4 sm:p-6 rounded-3xl flex flex-col items-center justify-center w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Buckler treadmill ${currentIndex + 1}`}
              className="h-full w-full object-contain transition-all duration-700 ease-in-out"
            />

            {/* Progress bar and counter */}
            <div className="mt-6 w-full flex flex-col items-center">
              {/* Dots */}
              <div className="flex gap-2 mb-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-[2px] w-6 ${
                      i === currentIndex ? 'bg-white' : 'bg-[#555555]'
                    } rounded-full transition-all duration-300`}
                  />
                ))}
              </div>
              {/* Counter */}
              <p className="text-sm font-semibold text-white">
                {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMachines;
