import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const plans = [
  {
    label: 'Normal',
    name: 'NORMAL PLAN',
    price: '$ 500.00 USD',
    description: 'Access to basic fitness facilities and essential group classes.',
    features: [
      'Basic Equipment Access',
      'Standard Workout Hours',
      'Locker Room Access',
      'Free Trial Class',
    ],
    buttonText: 'Join Now',
  },
  {
    label: 'Pro',
    name: 'STANDARD',
    price: '$ 900.00 USD',
    description: 'Enjoy our state-of-the-art gym equipment, spacious workout areas.',
    features: [
      'Personalized Training',
      'Group Fitness Access',
      'Nutrition Guidance',
      'Exclusive Events',
      'Open Gym Hours',
    ],
    buttonText: 'Get Started',
  },
  {
    label: 'Elite',
    name: 'PREMIUM',
    price: '$ 1,200.00 USD',
    description: 'Enjoy personalized training sessions and premium amenities.',
    features: [
      'Personalized Training',
      'Group Fitness Access',
      'Health Tracking',
      'Exclusive Events',
      'Nutritional Counseling',
      'Advanced Fitness Assessments',
      'Free Merchandise',
    ],
    buttonText: 'Enroll Today',
  },
];

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const MembershipsPricingPlan = () => {
  const [activePlan, setActivePlan] = useState('Normal');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visiblePlans = isMobile ? plans.filter((p) => p.label === activePlan) : plans;

  return (
    <section className="bg-black text-white px-6 py-20 md:px-16 lg:px-24 text-center">
      {/* Header */}
      <Motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-xs uppercase text-gray-400 tracking-widest mb-2"
      >
        • Memberships
      </Motion.p>
      <Motion.h2
        initial="hidden"
        whileInView="show"
        custom={1}
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
      >
        MEMBERSHIP PRICING PLANS
      </Motion.h2>

      {/* Toggle Buttons (Mobile Only) */}
      <div className="sm:hidden flex justify-center gap-4 mb-8">
        {plans.map((plan) => (
          <button
            key={plan.label}
            onClick={() => setActivePlan(plan.label)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activePlan === plan.label ? 'bg-white text-black' : 'bg-[#1a1a1a] text-white'
            }`}
          >
            {plan.label}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto text-left">
        {visiblePlans.map((plan, index) => (
          <Motion.div
            key={plan.label}
            className="bg-[#1a1a1a] rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
            initial="hidden"
            whileInView="show"
            custom={index + 3}
            variants={fadeUp}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div>
              <p className="text-xs font-semibold text-red-500 mb-2">{plan.label}</p>
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-lg font-semibold text-gray-200 mb-4">{plan.price}</p>
              <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-full py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              {plan.buttonText}
            </button>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default MembershipsPricingPlan;
