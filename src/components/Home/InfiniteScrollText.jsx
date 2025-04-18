// import React, { useEffect, useRef, useState } from 'react';
// import { motion as Motion, useAnimation } from 'framer-motion';

// const InfiniteScrollText = () => {
//   const controls = useAnimation();
//   const [direction, setDirection] = useState('left');
//   const lastScrollY = useRef(0);

//   // Handle scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const newDirection = currentY < lastScrollY.current ? 'right' : 'left';
//       setDirection(newDirection);
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Start scrolling motion
//   useEffect(() => {
//     controls.start({
//       x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
//       transition: {
//         duration: 20,
//         ease: 'linear',
//         repeat: Infinity,
//       },
//     });
//   }, [direction, controls]);

//   return (
//     <div className="relative w-full overflow-hidden bg-black py-4">
//       <Motion.div
//         className="flex whitespace-nowrap text-white text-2xl sm:text-3xl font-semibold"
//         animate={controls}
//       >
//         {[...Array(20)].map((_, i) => (
//           <span key={i} className="mx-8">
//             FUSION FITNESS ·
//           </span>
//         ))}
//       </Motion.div>
//     </div>
//   );
// };

// export default InfiniteScrollText;



// import React, { useEffect, useRef, useState } from 'react';
// import { motion as Motion, useAnimation } from 'framer-motion';

// const InfiniteScrollText = () => {
//   const controls = useAnimation();
//   const [direction, setDirection] = useState('left');
//   const lastScrollY = useRef(0);

//   // Detect scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const newDirection = currentY < lastScrollY.current ? 'right' : 'left';
//       setDirection(newDirection);
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Animate infinite scroll
//   useEffect(() => {
//     controls.start({
//       x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
//       transition: {
//         duration: 20,
//         ease: 'linear',
//         repeat: Infinity,
//       },
//     });
//   }, [direction, controls]);

//   return (
//     <div className="relative w-full overflow-hidden bg-black py-6">
//       {/* Gradient Overlays for 3D depth effect */}
//       <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-black via-black/96 to-transparent z-10 pointer-events-none" />
//       <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-black via-black/96 to-transparent z-10 pointer-events-none" />

//       {/* Scrolling Text */}
//       <Motion.div
//         className="flex whitespace-nowrap text-white text-2xl sm:text-3xl font-bold tracking-wider "
//         animate={controls}
//       >
//         {[...Array(20)].map((_, i) => (
//           <span key={i} className="mx-8">
//             FUSION FITNESS ·
//           </span>
//         ))}
//       </Motion.div>
//     </div>
//   );
// };

// export default InfiniteScrollText;




// import React, { useEffect, useRef, useState } from 'react';
// import { motion as Motion, useAnimation } from 'framer-motion';

// const InfiniteScrollText = () => {
//   const controls = useAnimation();
//   const [direction, setDirection] = useState('left');
//   const lastScrollY = useRef(0);

//   // Detect scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const newDirection = currentY < lastScrollY.current ? 'right' : 'left';
//       setDirection(newDirection);
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Scroll animation
//   useEffect(() => {
//     controls.start({
//       x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
//       transition: {
//         duration: 20,
//         ease: 'linear',
//         repeat: Infinity,
//       },
//     });
//   }, [direction, controls]);

//   return (
//     <div className="relative w-full bg-black py-6 overflow-hidden">
//       {/* Shadows must be outside the max-w container */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 md:w-[27% lg:w-[21%] bg-gradient-to-r from-black via-black/93 md:from-black md:via-black/95 lg:from-black lg:via-black/97 to-transparent z-20 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 md:w-[27%] lg:w-[21%] bg-gradient-to-l from-black via-black/93 md:from-black md:via-black/95 lg:from-black lg:via-black/97 to-transparent z-20 pointer-events-none" />

//       {/* Text container */}
//       <div className="relative px-6 overflow-hidden">
//         <Motion.div
//           className="flex whitespace-nowrap text-white text-2xl sm:text-3xl font-semibold"
//           animate={controls}
//         >
//           {[...Array(20)].map((_, i) => (
//             <span key={i} className="mx-8">
//               FUSION FITNESS ·
//             </span>
//           ))}
//         </Motion.div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteScrollText;




import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion, useAnimation } from 'framer-motion';

// SVG imports from assets folder
import enduranceIcon from '../../assets/icons/P-C.svg';
import crossfitIcon from '../../assets/icons/RunningMachine.svg';
import powerliftingIcon from '../../assets/icons/Dumble.svg';
import strengthIcon from '../../assets/icons/Dumble-45.svg';
import cardioIcon from '../../assets/icons/Cycle.svg';

const programs = [
  { label: 'Endurance Training', icon: enduranceIcon },
  { label: 'CrossFit Training', icon: crossfitIcon },
  { label: 'Powerlifting', icon: powerliftingIcon },
  { label: 'Strength Training', icon: strengthIcon },
  { label: 'Cardio Conditioning', icon: cardioIcon },
];

const InfiniteScrollText = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState('left');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const newDirection = currentY < lastScrollY.current ? 'right' : 'left';
      setDirection(newDirection);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    //* eslint-disable-next-line react-hooks/exhaustive-deps*/

       
  }, []);

  useEffect(() => {
    controls.start({
      x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [direction, controls]);

  return (
    <div className="relative w-full bg-black py-6 overflow-hidden">
      {/* Edge fade shadows */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-[27%] lg:w-[21%] bg-gradient-to-r from-black via-black/95 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-[27%] lg:w-[21%] bg-gradient-to-l from-black via-black/95 to-transparent z-20 pointer-events-none" />

      {/* Scrolling content */}
      <div className="relative px-6 overflow-hidden">
        <Motion.div
          className="flex whitespace-nowrap items-center text-white text-sm sm:text-base font-medium"
          animate={controls}
        >
          {[...Array(10)].flatMap((_, i) =>
            programs.map((prog, j) => (
              <div
                key={`${i}-${j}`}
                className="flex items-center gap-2 mx-6 opacity-80"
              >
                <img src={prog.icon} alt={prog.label} className="w-5 h-5 object-contain" />
                <span>{prog.label}</span>
              </div>
            ))
          )}
        </Motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
