import React from 'react';
import bgImage from '/images/gym-hero-bg1.jpg';

const BeyondMachines = () => {
  return (
    <section className="bg-[#E7E2DF] text-black px-4 py-30 md:px-10 lg:px-20 rounded-[3em] max-w-[1440px] mx-auto my-10">
      {/* Heading & Subtext */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            FAR BEYOND <br /> MACHINES
          </h2>
        </div>
        <div className="text-sm md:text-base text-gray-700">
          <p>
            We offer high-quality equipment and personalized services to meet your needs. In
            addition to advanced service and support from a team of dedicated experts, we provide
            marketing and architectural services to strengthen and reposition your brand in the
            market.
          </p>
        </div>
      </div>

      {/* Dark Feature Box */}
      <div className="flex flex-col md:flex-row items-center bg-[#121212] rounded-4xl overflow-hidden">
        {/* Feature List */}
        <div className="w-full md:w-1/2 p-6 space-y-4">
          {[
            {
              icon: '🌸',
              title: 'HIGH QUALITY EQUIPMENT',
            },
            {
              icon: '🌊',
              title: 'ADVANCED SERVICE AND SUPPORT',
            },
            {
              icon: '🌟',
              title: 'MARKETING AND ARCHITECTURE SERVICES',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border border-gray-600 rounded-2xl px-4 py-3 hover:bg-gray-800 transition"
            >
              <div className="text-xl">{feature.icon}</div>
              <p className="text-sm font-semibold text-white tracking-wide">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={bgImage} // ← replace with your actual path
            alt="Man resting after workout"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BeyondMachines;
