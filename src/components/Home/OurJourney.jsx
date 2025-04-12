// import React from 'react';
// import journeyImg from '../../assets/our-journey.jpg'; // Replace with your image path

// const stats = [
//   {
//     value: '984 Members',
//     description: 'Active members in our fitness community.',
//   },
//   {
//     value: '24 Sessions',
//     description: 'Diverse workouts for every level.',
//   },
//   {
//     value: '15+ Coaches',
//     description: 'Expert coaches for your fitness success.',
//   },
// ];

// const OurJourney = () => {
//   return (
//     <section className=" text-white px-6 py-20 md:px-16 lg:px-0 max-w-[1440px] mx-auto">
//       {/* Section Heading */}
//       <div className="text-center mb-12">
//         <p className="text-xs text-gray-400 uppercase tracking-widest">• Journey</p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">OUR JOURNEY</h2>
//       </div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         {/* Left Column */}
//         <div>
//           {/* Intro Paragraph */}
//           <p className="text-sm text-gray-300 leading-relaxed mb-10 max-w-md">
//             DISCOVER OUR JOURNEY OF EXCELLENCE WITH{' '}
//             <strong className="text-white font-semibold">EXPERT COACHES</strong>,{' '}
//             <strong className="text-white font-semibold">DIVERSE SESSIONS</strong>, AND A{' '}
//             <strong className="text-white font-semibold">THRIVING COMMUNITY</strong>.
//           </p>

//           {/* Stats List */}
//           <div className="space-y-8 max-w-sm">
//             {stats.map((stat, index) => (
//               <div key={index} className="border-b border-white/10 pb-4">
//                 <h3 className="text-xl sm:text-2xl font-semibold mb-1">{stat.value}</h3>
//                 <p className="text-sm text-gray-400">{stat.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="rounded-xl overflow-hidden">
//           <img
//             src={journeyImg}
//             alt="Our Journey"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurJourney;


import React from 'react';
import { motion as Motion } from 'framer-motion';
import journeyImg from '../../assets/our-journey.jpg'; // Replace with your image path

const stats = [
  {
    value: '984 Members',
    description: 'Active members in our fitness community.',
  },
  {
    value: '24 Sessions',
    description: 'Diverse workouts for every level.',
  },
  {
    value: '15+ Coaches',
    description: 'Expert coaches for your fitness success.',
  },
];

const OurJourney = () => {
  return (
    <section className="text-white px-6 py-20 md:px-16 lg:px-0 max-w-[1440px] mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest">• Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">OUR JOURNEY</h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Intro Paragraph */}
          <p className="text-sm text-gray-300 leading-relaxed mb-10 max-w-md">
            DISCOVER OUR JOURNEY OF EXCELLENCE WITH{' '}
            <strong className="text-white font-semibold">EXPERT COACHES</strong>,{' '}
            <strong className="text-white font-semibold">DIVERSE SESSIONS</strong>, AND A{' '}
            <strong className="text-white font-semibold">THRIVING COMMUNITY</strong>.
          </p>

          {/* Stats List */}
          <div className="space-y-8 max-w-sm">
            {stats.map((stat, index) => (
              <div key={index} className="border-b border-white/10 pb-4">
                <h3 className="text-xl sm:text-2xl font-semibold mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* Right Image */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="w-full h-full flex justify-center lg:justify-end"
        >
          <div className="rounded-xl overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[500px] xl:max-w-[550px] aspect-[5/7]">
            <img
              src={journeyImg}
              alt="Our Journey"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
