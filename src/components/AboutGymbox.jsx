import React from 'react';

// ✅ Replace these with your actual image paths
import image1 from '/images/fitness-bg.png';
import image2 from '/images/fitness-bg.png';
import image3 from '/images/fitness-bg.png';
import image4 from '/images/fitness-bg.png';

const features = [
  {
    title: 'BEST EQUIPMENT',
    image: image1,
  },
  {
    title: '10 LOCATIONS',
    image: image2,
  },
  {
    title: 'BOXING RINGS',
    image: image3,
  },
  {
    title: 'PERSONAL TRAINING',
    image: image4,
  },
];

const AboutGymbox = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:flex justify-between items-start gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-6 md:mb-0">
            ABOUT <br /> GYMBOX
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Gymbox is London’s (in)famous challenger of the fitness landscape. Emerging from the
            remnants of an old West End car park, we built a distinct community that has
            revolutionised the industry. Energetic, trendy and genuinely enjoyable, our clubs are
            designed to keep your spirits high. With an unmistakable nightclub atmosphere,
            specialised studios and top-notch equipment, we make working out as fun as going out.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden relative h-[320px] group"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-sm md:text-base">
                {feature.title}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition flex items-center justify-center gap-2 mx-auto">
            GYMBOX LOCATIONS <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutGymbox;
