// import React from 'react';
// import GalleryCard from './GalleryCard';

// // Sample image list (replace with actual imports or URLs)
// const images = [
//   { src: '/images/gym-hero-bg1.jpg', alt: 'Project 1' },
//   { src: '/images/gym-hero-bg.jpg', alt: 'Project 2' },
//   { src: '/images/fitness-bg.png', alt: 'Project 3' },
//   { src: '/images/gym-hero-bg1.jpg', alt: 'Project 4' },
//   { src: '/images/gym-hero-bg.jpg', alt: 'Project 5' },
//   { src: '/images/fitness-bg.png', alt: 'Project 6' },
// ];

// const Gallery = () => {
//   return (
//     <section className="bg-black text-white px-4 py-12">
//       {/* Title + Toggle */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
//         <p className="text-sm font-mono tracking-widest">[ SELECTED PHOTOS ]</p>
//         <div className="text-xs sm:text-sm">
//           <a href="#" className="underline mr-1">
//             GRID
//           </a>
//           / <a href="#" className="ml-1 hover:underline">LIST</a>
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//         {images.map((img, index) => (
//           <GalleryCard key={index} image={img.src} alt={img.alt} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;


// import React, { useState } from 'react';
// import GalleryCard from './GalleryCard';

// const images = [  
// { src: '/images/gym-hero-bg1.jpg', alt: 'Project 1' },
// { src: '/images/gym-hero-bg.jpg', alt: 'Project 2' },
// { src: '/images/fitness-bg.png', alt: 'Project 3' },
// { src: '/images/gym-hero-bg1.jpg', alt: 'Project 4' },
// { src: '/images/gym-hero-bg.jpg', alt: 'Project 5' },
// { src: '/images/fitness-bg.png', alt: 'Project 6' },
// ];

// const GalleryMain = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden'; // prevent scroll behind modal
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <section className="bg-black text-white px-4 py-12 pt-32">
//       {/* Title + Toggle */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
//         <p className="text-sm font-mono tracking-widest">[ SELECTED PROJECTS ]</p>
//         <div className="text-xs sm:text-sm">
//           <a href="#" className="underline mr-1">GRID</a>
//           / <a href="#" className="ml-1 hover:underline">LIST</a>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//         {images.map((img, index) => (
//           <GalleryCard
//             key={index}
//             image={img.src}
//             alt={img.alt}
//             onClick={() => handleImageClick(img)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity"
//           onClick={closeModal}
//         >
//           <img
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()} // prevent closing on image click
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default GalleryMain;



// import React, { useState, useEffect } from 'react';
// import GalleryCard from './GalleryCard';

// const images = [
//   { src: '/images/gym-hero-bg1.jpg', alt: 'Project 1' },
//   { src: '/images/gym-hero-bg.jpg', alt: 'Project 2' },
//   { src: '/images/fitness-bg.png', alt: 'Project 3' },
//   { src: '/images/gym-hero-bg1.jpg', alt: 'Project 4' },
//   { src: '/images/gym-hero-bg.jpg', alt: 'Project 5' },
//   { src: '/images/fitness-bg.png', alt: 'Project 6' },
// ];

// const GalleryMain = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   // Close modal on Escape key
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   return (
//     <section className="bg-black text-white px-4 py-12 pt-32">
//       {/* Title + Toggle */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
//         <p className="text-sm font-mono tracking-widest">[ SELECTED PROJECTS ]</p>
//         <div className="text-xs sm:text-sm">
//           <a href="#" className="underline mr-1">GRID</a>
//           / <a href="#" className="ml-1 hover:underline">LIST</a>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//         {images.map((img, index) => (
//           <GalleryCard
//             key={index}
//             image={img.src}
//             alt={img.alt}
//             onClick={() => handleImageClick(img)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
//           onClick={closeModal}
//         >
//           <img
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl transition-transform duration-300 scale-100 hover:scale-105"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default GalleryMain;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import GalleryCard from './GalleryCard';

// const MotionDiv = motion.div;

// const images = [
//   { src: '/images/gym-hero-bg1.jpg', alt: 'Project 1' },
//   { src: '/images/gym-hero-bg.jpg', alt: 'Project 2' },
//   { src: '/images/fitness-bg.png', alt: 'Project 3' },
//   { src: '/images/gym-hero-bg1.jpg', alt: 'Project 4' },
//   { src: '/images/gym-hero-bg.jpg', alt: 'Project 5' },
//   { src: '/images/fitness-bg.png', alt: 'Project 6' },
// ];

// const GalleryMain = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   return (
//     <section className=" text-white px-4 py-12 pt-32 min-h-screen">
//       {/* Title */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
//         <p className="text-sm font-mono tracking-widest">[ SELECTED PROJECTS ]</p>
//         <div className="text-xs sm:text-sm">
//           <a href="#" className="underline mr-1">GRID</a>
//           / <a href="#" className="ml-1 hover:underline">LIST</a>
//         </div>
//       </div>

//       {/* Gallery Grid with staggered animation */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
//         {images.map((img, index) => (
//           <MotionDiv
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.15,
//               easing: 'ease-in-out',
//             }}
//           >
//             <GalleryCard
//               image={img.src}
//               alt={img.alt}
//               onClick={() => handleImageClick(img)}
//             />
//           </MotionDiv>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
//           onClick={closeModal}
//         >
//           <img
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl transition-transform duration-300 scale-100 hover:scale-105"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default GalleryMain;





import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GalleryCard from './GalleryCard';

const MotionDiv = motion.div;

const images = [
  { src: '/images/gym-hero-bg1.jpg', alt: 'Project 1' },
  { src: '/images/gym-hero-bg.jpg', alt: 'Project 2' },
  { src: '/images/fitness-bg.png', alt: 'Project 3' },
  { src: '/images/gym-hero-bg1.jpg', alt: 'Project 4' },
  { src: '/images/gym-hero-bg.jpg', alt: 'Project 5' },
  { src: '/images/fitness-bg.png', alt: 'Project 6' },
];

const GalleryMain = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);
  const isDragging = useRef(false);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setDirection(0); // reset direction
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showPrevImage = () => {
    setSelectedIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : images.length - 1;
      setDirection(-1);
      return newIndex;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((prev) => {
      const newIndex = prev < images.length - 1 ? prev + 1 : 0;
      setDirection(1);
      return newIndex;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) showPrevImage();
    else if (deltaX < -50) showNextImage();

    touchStartX.current = null;
  };

  // Mouse drag
  const handleMouseDown = (e) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const mouseEndX = e.clientX;
    const deltaX = mouseEndX - mouseStartX.current;

    if (deltaX > 80) showPrevImage();
    else if (deltaX < -80) showNextImage();

    isDragging.current = false;
    mouseStartX.current = null;
  };

  // Slide transition variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="text-white px-4 py-12 pt-32 min-h-screen">
      {/* Title */}
      <div className="flex flex-col justify-between items-center mb-9 gap-2">
        <p className="text-sm font-mono tracking-widest">[ SELECTED PHOTOS ]</p>
        {/* <div className="text-xs sm:text-sm">
          <a href="#" className="underline mr-1">GRID</a>
          / <a href="#" className="ml-1 hover:underline">LIST</a>
        </div> */}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {images.map((img, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              easing: 'ease-in-out',
            }}
          >
            <GalleryCard
              image={img.src}
              alt={img.alt}
              onClick={() => handleImageClick(index)}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 overflow-hidden"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={images[selectedIndex].src}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="absolute max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl select-none"
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default GalleryMain;
