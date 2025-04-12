import React from 'react';
import { motion as Motion } from 'framer-motion';
import journeyImg from '../../assets/our-journey.jpg'; // Replace with your image

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

// Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const OurJourney = () => {
  return (
    <section className="text-white px-6 py-20 md:px-16 lg:px-0 max-w-[1440px] mx-auto">
      {/* Section Heading */}
      <Motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <p className="text-xs text-gray-400 uppercase tracking-widest">• Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">OUR JOURNEY</h2>
      </Motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Intro Paragraph */}
          <Motion.p variants={fadeUp} className="text-sm text-gray-300 leading-relaxed mb-10 max-w-md">
            DISCOVER OUR JOURNEY OF EXCELLENCE WITH{' '}
            <strong className="text-white font-semibold">EXPERT COACHES</strong>,{' '}
            <strong className="text-white font-semibold">DIVERSE SESSIONS</strong>, AND A{' '}
            <strong className="text-white font-semibold">THRIVING COMMUNITY</strong>.
          </Motion.p>

          {/* Stats List */}
          <div className="space-y-8 max-w-sm">
            {stats.map((stat, index) => (
              <Motion.div
                key={index}
                variants={fadeUp}
                className="border-b border-white/10 pb-4"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Right Image */}
        <Motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden max-w-md mx-auto lg:mx-0"
        >
          <img
            src={journeyImg}
            alt="Our Journey"
            className="w-full h-full object-cover rounded-xl"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
