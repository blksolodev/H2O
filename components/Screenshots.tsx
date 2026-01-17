import React from 'react';

// Using the provided IMG filenames
const screenshots = [
  "./IMG_0196.PNG", // Splash
  "./IMG_0198.PNG", // Today
  "./IMG_0199.PNG", // Quick Add
  "./IMG_0197.PNG", // History
  "./IMG_0200.PNG", // Extra
];

const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Clean, Intuitive Interface</h2>
        <p className="text-xl text-gray-600">Designed to feel right at home on your iPhone.</p>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-8 px-4 sm:px-8 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0 justify-start md:justify-center">
        {screenshots.map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-72 sm:w-80 snap-center rounded-[2.5rem] overflow-hidden border-8 border-gray-100 shadow-2xl transition-transform hover:-translate-y-2 duration-300 bg-gray-50"
          >
            <img src={src} alt={`App Screenshot ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;