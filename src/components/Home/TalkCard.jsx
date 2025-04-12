// import React from 'react';
// import bgImage from '../../assets/talk-bg.jpg'; // Make sure this path is correct

// const TalkCard = () => {
//   return (
//     <section className="px-4 py-20 max-w-[1440px] mx-auto">
//       <div
//         className="relative rounded-2xl overflow-hidden text-center text-white shadow-xl"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 to-[#000000]/60" />

//         {/* Content */}
//         <div className="relative px-6 sm:px-12 py-20 z-10">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//             Got a project?<br />
//             <span className="text-white">Let's talk!</span>
//           </h2>

//           <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium text-white/90 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
//           </p>

//           <a
//             href="#contact"
//             className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
//           >
//             Contact me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TalkCard;


import React from 'react';
import { motion as Motion } from 'framer-motion';
import bgImage from '../../assets/talk-bg.jpg'; // Make sure this path is correct

const TalkCard = () => {
  return (
    <section className="px-4 py-20 max-w-[1440px] mx-auto">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden text-center text-white shadow-xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 to-[#000000]/60" />

        {/* Content */}
        <div className="relative px-6 sm:px-12 py-20 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Got a project?<br />
            <span className="text-white">Let's talk!</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium text-white/90 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <a
            href="#contact"
            className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            Contact me
          </a>
        </div>
      </Motion.div>
    </section>
  );
};

export default TalkCard;