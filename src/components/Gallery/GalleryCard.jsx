// import React from 'react';

// const GalleryCard = ({ image, alt }) => {
//   return (
//     <div className="w-full h-full">
//       <img
//         src={image}
//         alt={alt}
//         className="w-full h-full object-cover transition duration-300 hover:opacity-80"
//       />
//     </div>
//   );
// };

// export default GalleryCard;


// import React from 'react';

// const GalleryCard = ({ image, alt, onClick }) => {
//   return (
//     <div className="w-full h-full cursor-pointer" onClick={onClick}>
//       <img
//         src={image}
//         alt={alt}
//         className="w-full h-full object-cover transition duration-300 hover:opacity-80"
//       />
//     </div>
//   );
// };

// export default GalleryCard;



// import React from 'react';

// const GalleryCard = ({ image, alt, onClick }) => {
//   return (
//     <div
//       className="w-full h-full cursor-pointer overflow-hidden rounded-xl group"
//       onClick={onClick}
//       role="button"
//       aria-label={alt}
//     >
//       <img
//         src={image}
//         alt={alt}
//         className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
//       />
//     </div>
//   );
// };

// export default GalleryCard;





import React from 'react';

const GalleryCard = ({ image, alt, onClick }) => {
  return (
    <div
      className="w-full aspect-square relative cursor-pointer overflow-hidden rounded-xl group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={alt}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
      />
    </div>
  );
};

export default GalleryCard;
