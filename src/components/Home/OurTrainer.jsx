// import React from 'react';
// import Button1 from './Button1';
// import trainer1 from '../../assets/trainer1.jpg';
// import trainer2 from '../../assets/trainer2.jpg';
// import trainer3 from '../../assets/trainer3.jpg';

// const trainers = [
//   {
//     name: 'Rose lite Miles',
//     title: 'Senior Fitness',
//     image: trainer1,
//   },
//   {
//     name: 'Floyd Miles rose',
//     title: 'Senior Fitness',
//     image: trainer2,
//   },
//   {
//     name: 'Floyd Miles',
//     title: 'Senior Fitness',
//     image: trainer3,
//   },
// ];

// const OurTrainer = () => {
//   return (
//     <section className="bg-black text-white px-4 sm:px-6 md:px-20 py-16 text-center">
//       {/* Heading */}
//       <p className="text-xs uppercase text-gray-400 tracking-widest mb-2">• Trainers</p>
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">OUR INSTRUCTORS FOR YOU</h2>

//       {/* Trainer Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
//         {trainers.map((trainer, index) => (
//           <div
//             key={index}
//             className="bg-[#111] rounded-xl overflow-hidden shadow-md transition hover:shadow-xl"
//           >
//             <img src={trainer.image} alt={trainer.name} className="w-full h-[400px] object-cover" />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{trainer.name}</h3>
//               <p className="text-sm text-gray-400">{trainer.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="mt-10 flex justify-center items-center">
//         <Button1 />
//       </div>
//     </section>
//   );
// };

// export default OurTrainer;



import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button1 from './Button1';
import trainer1 from '../../assets/trainer1.jpg';
import trainer2 from '../../assets/trainer2.jpg';
import trainer3 from '../../assets/trainer3.jpg';

const trainers = [
  {
    name: 'Rose lite Miles',
    title: 'Senior Fitness',
    image: trainer1,
  },
  {
    name: 'Floyd Miles rose',
    title: 'Senior Fitness',
    image: trainer2,
  },
  {
    name: 'Floyd Miles',
    title: 'Senior Fitness',
    image: trainer3,
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const OurTrainer = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-20 py-16 text-center">
      {/* Heading */}
      <Motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xs uppercase text-gray-400 tracking-widest mb-2"
      >
        • Trainers
      </Motion.p>
      <Motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
      >
        OUR INSTRUCTORS FOR YOU
      </Motion.h2>

      {/* Trainer Cards */}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto"
      >
        {trainers.map((trainer, index) => (
          <Motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-[#111] rounded-xl overflow-hidden shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{trainer.name}</h3>
              <p className="text-sm text-gray-400">{trainer.title}</p>
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      {/* View All Button */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center items-center"
      >
        <Button1 />
      </Motion.div>
    </section>
  );
};

export default OurTrainer;
