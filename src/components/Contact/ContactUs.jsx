import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const ContactUs = () => {
  return (
    <section className="text-white px-6 py-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Text */}
        <Motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Connect with Us<br />Let's Build Together
          </h2>
          <p className="text-gray-300 max-w-lg">
            Reach out and connect with the Glossy CodeCraft team. Whether you have questions,
            feedback, or partnership inquiries, we're here to listen and collaborate.
            Let's build something incredible together.
          </p>
        </Motion.div>

        {/* Right Card */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-xl p-8 shadow-lg w-full"
        >
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 rounded-xl bg-black border border-gray-700 text-white outline-none"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 rounded-xl bg-black border border-gray-700 text-white outline-none"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 text-white outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="grid grid-cols-2 mt-8 gap-6 text-sm text-gray-300">
            <div>
              <p>hello@email.com</p>
              <p className="mt-2">+1-123-123-123</p>
            </div>
            <div>
              <p>New York,</p>
              <p className="mt-2">420 West Lexington Avenue</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <Motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-white hover:bg-gray-700 transition"
              >
                <Icon size={18} />
              </Motion.a>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
