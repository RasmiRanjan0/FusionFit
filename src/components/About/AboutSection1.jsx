import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaRunning } from 'react-icons/fa';
import heroImg from '../../assets/trainer1.jpg'; // replace with your left image
import ropeImg from '../../assets/trainer1.jpg'; // replace with your right image
// import heroImg from '../../assets/about-hero.jpg'; // replace with your left image
// import ropeImg from '../../assets/about-action.jpg'; // replace with your right image

const AboutSection1 = () => {
  return (
    <section className=" text-white px-4 sm:px-8 md:px-16 lg:px-24 py-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-12 mt-12">
        <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">• About</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">ABOUT US</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden"
        >
          <img src={heroImg} alt="Running" className="w-full h-full object-cover" />
        </Motion.div>

        {/* Center Content */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold">A Story of Strength & Dedication</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Founded in 2009, Musclen was born out of a passion for fitness and a desire to create a
            supportive community for individuals of all fitness levels. Over the years, we have
            grown from a small local gym into a state-of-the-art fitness center.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Our commitment to excellence and our members' success has always been at the heart
            of everything we do.
          </p>
          <button className="px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
            Explore Programs
          </button>

          {/* Programs */}
          <div className="grid grid-cols-1 gap-3 text-left mt-6">
            <div className="flex items-center justify-between border border-white/10 p-3 rounded-lg hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <FaDumbbell className="text-lg text-white" />
                <span className="text-sm">Core Workout</span>
              </div>
            </div>
            <div className="flex items-center justify-between border border-white/10 p-3 rounded-lg hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <FaHeartbeat className="text-lg text-white" />
                <span className="text-sm">Med Ball Workout</span>
              </div>
            </div>
            <div className="flex items-center justify-between border border-white/10 p-3 rounded-lg hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <FaRunning className="text-lg text-white" />
                <span className="text-sm">Weight Loss Workout</span>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Right Image */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-xl overflow-hidden"
        >
          <img src={ropeImg} alt="Training" className="w-full h-full object-cover" />
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutSection1;
