// import React from 'react';

// // Image imports (adjust paths based on your structure)
// import machinesImg from '../assets/hero-bg.jpg';
// import careImg from '../assets/hero-bg.jpg';
// import gaasImg from '../assets/hero-bg.jpg';

// const services = [
//   {
//     title: 'BUCKLER MACHINES',
//     image: machinesImg,
//   },
//   {
//     title: 'BUCKLER CARE',
//     image: careImg,
//   },
//   {
//     title: 'BUCKLER GAAS',
//     image: gaasImg,
//   },
// ];

// const CompleteExperience = () => {
//   return (
//     <section className="bg-[#E7E2DF] px-6 py-16 md:px-20">
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <p className="text-sm font-medium text-gray-700 tracking-widest flex items-center justify-center gap-2">
//           <span className="text-[10px]">●</span> BUCKLER 360
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight text-black">
//           A COMPLETE EXPERIENCE
//         </h2>
//       </div>

//       {/* Cards */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
//         {services.map((item, index) => (
//           <div
//             key={index}
//             className="relative group rounded-xl overflow-hidden bg-[#2B2B2B] h-[400px] flex items-end"
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
//             {/* Arrow icon */}
//             <div className="absolute top-4 right-4 z-20 text-white text-xl font-semibold">↗</div>
//             {/* Title */}
//             <div className="relative z-20 p-6">
//               <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div className="mt-12 flex justify-center">
//         <button className="flex items-center gap-3 px-6 py-3 bg-[#D8CEBC] text-black rounded-full font-medium hover:bg-[#cfc4ad] transition">
//           Talk to an expert
//           <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//             →
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CompleteExperience;


// import React from 'react';

// // Image imports (adjust paths based on your structure)
// import machinesImg from '../assets/hero-bg.jpg';
// import careImg from '../assets/hero-bg.jpg';
// import gaasImg from '../assets/hero-bg.jpg';

// const services = [
//   {
//     title: 'BUCKLER MACHINES',
//     image: machinesImg,
//   },
//   {
//     title: 'BUCKLER CARE',
//     image: careImg,
//   },
//   {
//     title: 'BUCKLER GAAS',
//     image: gaasImg,
//   },
// ];

// const CompleteExperience = () => {
//   return (
//     <section className=" px-6 py-16 md:px-20 text-white">
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <p className="text-sm font-medium text-gray-300 tracking-widest flex items-center justify-center gap-2">
//           <span className="text-[10px]">●</span> BUCKLER 360
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight text-white">
//           A COMPLETE EXPERIENCE
//         </h2>
//       </div>

//       {/* Cards */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
//         {services.map((item, index) => (
//           <div
//             key={index}
//             className="relative group rounded-xl overflow-hidden bg-[#2B2B2B] h-[400px] flex items-end"
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
//             {/* Arrow icon */}
//             <div className="absolute right-12 bottom-6 z-20 text-white text-xl font-semibold "> →</div>
//             {/* Title */}
//             <div className="relative z-20 p-6">
//               <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div className="mt-12 flex justify-center">
//         <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
//           Talk to an expert
//           <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//             →
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CompleteExperience;


import React from 'react';
import { motion as Motion } from 'framer-motion';

// Image imports (adjust paths)
import machinesImg from '../assets/MINDFUL MEDITAION.jpg';
import careImg from '../assets/FUNCTIONAL FITNESS.jpg';
import gaasImg from '../assets/YOGA FUSION.jpg';

const services = [
  { title: 'MINDFUL MEDITAION', image: machinesImg },
  { title: 'FUNCTIONAL FITNESS', image: careImg },
  { title: 'YOGA FUSION', image: gaasImg },
];

// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const OurClasses = () => {
  return (
    <section className="px-6 py-16 md:px-20 text-white">
      {/* Section Title */}
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-medium text-gray-300 tracking-widest flex items-center justify-center gap-2">
          <span className="text-[10px]">●</span> OUR CLASSES
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight text-white">
          A COMPLETE CLASSES EXPERIENCE
        </h2>
      </Motion.div>

      {/* Cards */}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto"
      >
        {services.map((item, index) => (
          <Motion.div
            key={index}
            variants={cardVariants}
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
            <div className="absolute right-12 bottom-6 z-20 text-white text-xl font-semibold">
              →
            </div>
            {/* Title */}
            <div className="relative z-20 p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      {/* CTA Button */}
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
          ALL CLASSES
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            →
          </span>
        </button>
      </Motion.div>
    </section>
  );
};

export default OurClasses;
