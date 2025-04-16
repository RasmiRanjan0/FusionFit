import React from 'react';
import { motion as Motion } from 'framer-motion';
// import visionImg from '../../assets/vision.jpg'; // Replace with your actual image path
import visionImg from '../../assets/trainer2.jpg'; // Replace with your actual image path

const OurVision = () => {
  return (
    <section className="bg-black text-white px-6 py-20 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Image */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 rounded-xl overflow-hidden"
        >
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-full object-cover rounded-xl"
          />
        </Motion.div>

        {/* Right Content */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            OUR VISION & MISSION
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            At Musclen, our mission is to empower individuals to achieve their
            fitness goals and lead healthier lives. We envision a community where
            everyone feels welcome, supported, and motivated to improve their
            well-being.
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Through state-of-the-art facilities, and a variety of fitness
            programs, we strive to create an environment that fosters personal
            growth and lifelong health.
          </p>

          <button className="mt-4 px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Contact us
          </button>
        </Motion.div>
      </div>
    </section>
  );
};

export default OurVision;
