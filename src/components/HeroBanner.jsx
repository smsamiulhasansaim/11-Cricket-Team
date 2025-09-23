import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative w-full py-8 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden background-image-container" style={{minHeight: '400px'}}>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 sm:p-8">
            <img src="src/assets/banner-main.png" alt="Cricket Logo" className="mb-6 sm:mb-8 w-auto h-14 sm:h-20 md:h-24 lg:h-28" />
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;