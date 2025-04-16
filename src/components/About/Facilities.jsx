import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FaWifi,
  FaDumbbell,
  FaChild,
  FaCocktail,
  FaRunning,
  FaLock,
} from 'react-icons/fa';

const amenities = [
  {
    icon: <FaLock size={24} />,
    title: 'Locker Rooms',
    description: 'Convenient and spacious locker rooms provide a secure space.',
  },
  {
    icon: <FaWifi size={24} />,
    title: 'Wi-fi Connectivity',
    description:
      'Stay connected seamlessly with our complimentary Wi-Fi service at Musclen.',
  },
  {
    icon: <FaDumbbell size={24} />,
    title: 'Private Workout',
    description:
      'Privacy during your workouts with our exclusive private workout pods.',
  },
  {
    icon: <FaRunning size={24} />,
    title: 'Cardio Equipment',
    description:
      'A cardio workout like never before with our cutting-edge cardio equipment.',
  },
  {
    icon: <FaCocktail size={24} />,
    title: 'Smoothie Bar',
    description:
      'A variety of nutritious and delicious blends crafted to support your fitness.',
  },
  {
    icon: <FaChild size={24} />,
    title: 'Childcare Service',
    description:
      'Experience worry-free workouts with our professional childcare services.',
  },
];

const Facilities = () => {
  return (
    <section className=" text-white px-6 py-20 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase text-gray-400 tracking-widest">• Facilities</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">AMENITIES</h2>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((item, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-6 bg-[#0f0f0f] hover:border-white/20 transition"
          >
            <div className="text-white mb-4">{item.icon}</div>
            <h3 className="text-md font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
