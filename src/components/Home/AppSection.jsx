// import React from "react";
// import appIllustration from "../../assets/app-illustration.png";
// import qrCode from "../../assets/qr-code.png";
// import appStore from "../../assets/app-store.png";
// import googlePlay from "../../assets/google-play.png";

// const AppSection = () => {
//   return (
//     <section className="bg-black text-white py-20 px-6">
//       {/* Top Label + Heading */}
//       <div className="text-center mb-12">
//         <p className="text-sm uppercase text-gray-400 tracking-widest">• Application</p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-snug">
//           FUSION FITNESS COMPLETE APP <br className="hidden sm:block" />
//           EXPERIENCE
//         </h2>
//       </div>

//       {/* Main Content Box */}
//       <div className="bg-[#1F1F1F] rounded-4xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between max-w-[1440px] mx-auto shadow-xl">
//         {/* Left Content */}
//         <div className="flex-1 text-left">
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">DOWNLOAD THIS APP</h3>
//           <p className="text-gray-300 text-sm mb-6 max-w-2xl">
//             Transcend the ordinary with our product line. Here, excellence meets innovation,
//             bringing you the most advanced technology on the market in a way you've never seen before.
//             Every detail, every movement, every piece of equipment is designed to deliver an unparalleled 
//             training experience. With Inception, you don't just train – you evolve.
//           </p>

//           {/* Store Buttons + QR Code - Horizontal layout */}
// <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
//   {/* App Buttons */}
//   <div className="flex flex-col gap-3">
//     <img src={appStore} alt="App Store" className="h-10" />
//     <img src={googlePlay} alt="Google Play" className="h-10" />
//   </div>

//   {/* QR Code */}
//   <div className="bg-[#E5E5E5] rounded-xl p-2">
//     <img src={qrCode} alt="QR Code" className="h-24 w-24 object-contain" />
//   </div>
// </div>
//         </div>

//         {/* Right Illustration */}
//         <div className="flex-1 max-w-sm">
//           <img
//             src={appIllustration}
//             alt="App Illustration"
//             className="w-full object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppSection;


import React from "react";
import { motion as Motion } from "framer-motion";
import appIllustration from "../../assets/app-illustration.png";
import qrCode from "../../assets/qr-code.png";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";

// Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AppSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Top Label + Heading */}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Motion.p
          variants={fadeUp}
          className="text-sm uppercase text-gray-400 tracking-widest"
        >
          • Application
        </Motion.p>
        <Motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-snug"
        >
          FUSION FITNESS COMPLETE APP <br className="hidden sm:block" />
          EXPERIENCE
        </Motion.h2>
      </Motion.div>

      {/* Main Content */}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#1F1F1F] rounded-4xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between max-w-[1440px] mx-auto shadow-xl"
      >
        {/* Left Content */}
        <Motion.div variants={fadeLeft} className="flex-1 text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">DOWNLOAD THIS APP</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-xl">
            Transcend the ordinary with our product line. Here, excellence meets innovation,
            bringing you the most advanced technology on the market in a way you've never seen before.
            Every detail, every movement, every piece of equipment is designed to deliver an unparalleled 
            training experience. With Inception, you don't just train – you evolve.
          </p>

          {/* Buttons + QR */}
          <Motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* App Buttons */}
            <Motion.div variants={fadeUp} className="flex flex-col gap-3">
              <img src={appStore} alt="App Store" className="h-10" />
              <img src={googlePlay} alt="Google Play" className="h-10" />
            </Motion.div>

            {/* QR Code */}
            <Motion.div variants={fadeUp} className="bg-[#E5E5E5] rounded-xl p-2">
              <img
                src={qrCode}
                alt="QR Code"
                className="h-24 w-24 object-contain"
              />
            </Motion.div>
          </Motion.div>
        </Motion.div>

        {/* Right Illustration */}
        <Motion.div variants={fadeRight} className="flex-1 max-w-sm">
          <img
            src={appIllustration}
            alt="App Illustration"
            className="w-full object-contain"
          />
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default AppSection;
