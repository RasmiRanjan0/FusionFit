// import React, { useState } from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const faqs = [
//   { question: 'What do you provide?', answer: 'We provide a wide range of design services including branding, web design, and marketing materials tailored to your needs.' },
//   { question: 'How do I request designs?', answer: 'You can request designs through our platform dashboard or by contacting our support team directly.' },
//   { question: 'How quickly will I receive designs?', answer: 'Most design requests are delivered within 2-3 business days depending on the complexity.' },
//   { question: 'How do revisions work?', answer: 'You can request as many revisions as you need until you’re happy with the final result.' },
//   { question: 'Why not hire a full-time designer?', answer: 'Our service gives you access to a full team of designers at a fraction of the cost of hiring a full-time employee.' },
//   { question: 'What if I don’t like the design?', answer: 'We’ll work with you until it matches your expectations. Your satisfaction is our priority.' },
//   { question: 'What software do you use?', answer: 'We use industry-standard tools like Adobe Creative Suite, Figma, and Sketch depending on the project.' },
//   { question: 'Are there any refunds?', answer: 'Yes. If you’re not satisfied within the first 14 days, we’ll refund your subscription.' },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className=" text-white px-6 py-20 md:px-0 max-w-[1440px] mx-auto">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <p className="text-xs text-gray-400 uppercase tracking-widest">• FAQ</p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">FIND SOME ANSWERS</h2>
//       </div>

//       {/* FAQ Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="bg-[#1a1a1a] border border-white/5 rounded-xl p-5 transition duration-300"
//           >
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="flex justify-between items-center w-full text-left text-white text-sm font-medium"
//             >
//               {faq.question}
//               <span className="text-white ml-4">
//                 {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
//               </span>
//             </button>

//             {/* Answer */}
//             <div
//               className={`mt-3 text-gray-400 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
//                 openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
//               }`}
//             >
//               <p>{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;



import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AnimatePresence, motion as Motion } from 'framer-motion';

const faqs = [
  { question: 'What do you provide?', answer: 'We provide a wide range of design services including branding, web design, and marketing materials tailored to your needs.' },
  { question: 'How do I request designs?', answer: 'You can request designs through our platform dashboard or by contacting our support team directly.' },
  { question: 'How quickly will I receive designs?', answer: 'Most design requests are delivered within 2-3 business days depending on the complexity.' },
  { question: 'How do revisions work?', answer: 'You can request as many revisions as you need until you’re happy with the final result.' },
  { question: 'Why not hire a full-time designer?', answer: 'Our service gives you access to a full team of designers at a fraction of the cost of hiring a full-time employee.' },
  { question: 'What if I don’t like the design?', answer: 'We’ll work with you until it matches your expectations. Your satisfaction is our priority.' },
  { question: 'What software do you use?', answer: 'We use industry-standard tools like Adobe Creative Suite, Figma, and Sketch depending on the project.' },
  { question: 'Are there any refunds?', answer: 'Yes. If you’re not satisfied within the first 14 days, we’ll refund your subscription.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white px-6 py-0 lg:py-20 md:px-0 max-w-[1440px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest">• FAQ</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">FIND SOME ANSWERS</h2>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="bg-[#1a1a1a] border border-white/5 hover:border-white/10 hover:bg-[#222] rounded-xl p-5 transition duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-white text-sm font-medium"
            >
              {faq.question}
              <span className="text-white ml-4">
                {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <Motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden mt-3 text-gray-400 text-sm"
                >
                  <p>{faq.answer}</p>
                </Motion.div>
              )}
            </AnimatePresence>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
