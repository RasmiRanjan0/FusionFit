import React from 'react';
import { motion as Motion } from 'framer-motion';

const reviews = [
  {
    stars: 5,
    text: "Working with Catalin and his team was a game-changer for us! Our new website is not only visually stunning but also easy to navigate. Their Webflow expertise was evident in every detail.",
    name: "Jane S.",
    role: "Marketing Manager at Bright Ideas Media",
  },
  {
    stars: 5,
    text: "Catalin’s team built us a powerful, responsive website that performs exceptionally well. The web development process was smooth and transparent.",
    name: "Mark T.",
    role: "CEO at Tech Innovators",
  },
  {
    stars: 5,
    text: "We had a complex project, and Catalin’s team handled it with such professionalism. Their design skills are top-notch, and Webflow was the perfect platform for our needs.",
    name: "Lisa B.",
    role: "Creative Director at Visionary Creations",
  },
  {
    stars: 5,
    text: "From start to finish, the experience with Catalin’s web development team was phenomenal. Their attention to detail and dedication made a huge difference in our site’s performance.",
    name: "Eric M.",
    role: "Operations Lead at NextGen Enterprises",
  },
  {
    stars: 5,
    text: "The Webflow implementation was seamless. The website looks amazing and functions perfectly, thanks to Catalin and his dedicated team.",
    name: "Rachel K.",
    role: "Head of Digital at Blue Horizon Solutions",
  },
  {
    stars: 5,
    text: "Catalin’s team did an outstanding job transforming our vision into reality. The website is fast, modern, and easy to update. Couldn’t be happier.",
    name: "David L.",
    role: "Product Manager at Tech Sphere",
  },
];

// Motion variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpCard = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Reviews = () => {
  return (
    <section className="text-white px-6 py-20 md:px-16 lg:px-0 max-w-[1440px] mx-auto">
      {/* Section heading */}
      <div className="text-center mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest">• Reviews</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          DISCOVER WHY PEOPLE CAN’T STOP<br />TALKING ABOUT US!
        </h2>
      </div>

      {/* Grid */}
      <Motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {reviews.map((review, index) => (
          <Motion.div
            key={index}
            variants={fadeUpCard}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 transition-transform duration-300 ease-in-out hover:border-white/10"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 mb-4 transition-colors duration-300 group-hover:text-yellow-300">
              {Array.from({ length: review.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-sm text-gray-300 mb-6 transition-colors duration-300 group-hover:text-gray-100">
              {review.text}
            </p>

            {/* Author */}
            <div>
              <p className="font-semibold text-white">{review.name}</p>
              <p className="text-xs text-gray-400">{review.role}</p>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default Reviews;
