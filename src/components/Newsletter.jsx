import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-8 sm:py-12 my-8 sm:my-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[300px] lg:h-[320px]">
          <div className="absolute inset-0">
            <img src="assets/bg-shadow.png" alt="Newsletter Background" className="w-full h-full object-cover" />
          </div>

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative p-6 sm:p-8 lg:p-12 text-center text-black flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-black text-sm sm:text-base"
              />
              <button className="w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-lg shadow-lg gradient-button transition duration-300 hover:scale-105 text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;