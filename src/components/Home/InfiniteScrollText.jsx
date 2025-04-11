import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion, useAnimation } from 'framer-motion';

const InfiniteScrollText = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState('left');
  const lastScrollY = useRef(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const newDirection = currentY < lastScrollY.current ? 'right' : 'left';
      setDirection(newDirection);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start scrolling motion
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
    <div className="relative w-full overflow-hidden bg-black py-4">
      <Motion.div
        className="flex whitespace-nowrap text-white text-2xl sm:text-3xl font-extrabold"
        animate={controls}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mx-8">
            FUSION FITNESS ·
          </span>
        ))}
      </Motion.div>
    </div>
  );
};

export default InfiniteScrollText;
