import React from 'react';

const Header = ({ availableCoins }) => {
  const formatCoins = (coins) => {
    return coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <header className="w-full h-20 flex items-center justify-between px-4 sm:px-8">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/logo.png" alt="Cricket Logo" className="h-12 w-12 object-contain" />
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Fixture</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Teams</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Schedules</a>
          </nav>
          <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-3 sm:px-4 rounded-full flex items-center space-x-2 shadow-sm hover:bg-gray-200 transition duration-300">
            <span className="text-sm sm:text-base">{formatCoins(availableCoins)} Coins</span>
            <span className="text-yellow-500 text-lg sm:text-xl">🪙</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;