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



import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className=" text-white px-4 py-12 pt-32 min-h-screen">
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
        <p className="text-sm font-mono tracking-widest">[ SELECTED PROJECTS ]</p>
        <div className="text-xs sm:text-sm">
          <a href="#" className="underline mr-1">GRID</a>
          / <a href="#" className="ml-1 hover:underline">LIST</a>
        </div>
      </div>

      {/* Gallery Grid with staggered animation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {images.map((img, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              easing: 'ease-in-out',
            }}
          >
            <GalleryCard
              image={img.src}
              alt={img.alt}
              onClick={() => handleImageClick(img)}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl transition-transform duration-300 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryMain;
