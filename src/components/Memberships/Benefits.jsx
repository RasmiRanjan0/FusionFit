import React from 'react';
import { motion as Motion } from 'framer-motion';
import boxingImage from '/images/Memberships/benefits.jpeg'; // replace with your actual image path

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Benefits = () => {
  return (
    <section className=" text-white px-6 py-20 max-w-[1440px] mx-auto">
      {/* Grid: Text and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <Motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
          >
            Benefits of Membership
          </Motion.h2>

          <Motion.p
            initial="hidden"
            whileInView="show"
            custom={1}
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-gray-300 text-base mb-4 leading-relaxed"
          >
            Our experienced trainers provide personalized guidance and support to help you
            achieve your fitness goals. Additionally, members benefit from our luxurious
            amenities, such as locker rooms, saunas, and relaxation lounges, as well as
            exclusive access to special events.
          </Motion.p>

          <Motion.p
            initial="hidden"
            whileInView="show"
            custom={2}
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-gray-300 text-base mb-6 leading-relaxed"
          >
            You'll enjoy unlimited access to our state-of-the-art facilities, including
            cutting-edge gym equipment, spacious workout areas, and a variety of group
            fitness classes designed for all levels.
          </Motion.p>

          {/* Button */}
          <Motion.div
            initial="hidden"
            whileInView="show"
            custom={3}
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              Explore Programs
            </button>
          </Motion.div>
        </div>

        {/* Right Image */}
        <Motion.div
          initial="hidden"
          whileInView="show"
          custom={4}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <img
            src={boxingImage}
            alt="Boxing Membership Benefit"
            className="w-full rounded-xl object-cover"
          />
        </Motion.div>
      </div>

      {/* Stats Section */}
      <Motion.div
        initial="hidden"
        whileInView="show"
        custom={5}
        variants={fadeUp}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 text-center gap-10"
      >
        <div>
          <p className="text-4xl font-bold">756+</p>
          <p className="text-gray-400 mt-2">Active Member</p>
        </div>
        <div>
          <p className="text-4xl font-bold">24+</p>
          <p className="text-gray-400 mt-2">Total Sessions</p>
        </div>
        <div>
          <p className="text-4xl font-bold">18+</p>
          <p className="text-gray-400 mt-2">Expert Coaches</p>
        </div>
      </Motion.div>
    </section>
  );
};

export default Benefits;
