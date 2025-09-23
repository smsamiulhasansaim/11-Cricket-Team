import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="text-center">
            <img src="/src/assets/logo-footer.png" alt="Cricket Logo" className="mx-auto mb-2 w-12 h-12 sm:w-16 sm:h-16" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-b border-gray-700 pb-8 sm:pb-12 mb-6 sm:mb-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-3 sm:mb-4">About Us</h4>
            <p className="text-xs sm:text-sm">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="text-xs sm:text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition duration-200">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-3 sm:mb-4">Subscribe</h4>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              />
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 text-white font-semibold rounded-lg subscribe-button-gradient hover:opacity-90 transition duration-300 text-xs sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs sm:text-sm text-gray-500">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;