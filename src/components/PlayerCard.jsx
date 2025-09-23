import React from 'react';

const PlayerCard = ({ player, onSelectPlayer, isSelectedView = false, onRemovePlayer, availableCoins }) => {
  
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getGradientClass = (index) => {
    const gradients = [
      "from-yellow-400 to-orange-500",
      "from-blue-400 to-purple-500",
      "from-green-400 to-teal-500",
      "from-red-400 to-pink-500",
      "from-purple-400 to-indigo-500",
      "from-orange-400 to-red-500"
    ];
    return gradients[index % gradients.length];
  };

  const calculatePlayerPrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,]/g, ''));
  };

  const canAffordPlayer = () => {
    const playerPrice = calculatePlayerPrice(player.price);
    return availableCoins >= playerPrice;
  };

  if (isSelectedView) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${getGradientClass(player.id)} rounded-md flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">{getInitials(player["player-name"])}</span>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-900 text-base sm:text-lg">{player["player-name"]}</div>
              <div className="text-sm text-gray-500">{player["bating-style"]}</div>
              <div className="text-xs text-gray-400 mt-1">{player["playing-role"]} • {player["player-country"]}</div>
            </div>
          </div>
          <button 
            onClick={() => onRemovePlayer(player.id)}
            className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <div className="p-4 sm:p-6 bg-gray-50">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Rating:</span>
            <span className="font-semibold text-gray-900">{player.rating}/10</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-gray-600">Price:</span>
            <span className="font-bold text-green-600">{player.price}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 rounded-lg overflow-hidden">
        <img src={player["player-image"]} alt={player["player-name"]} className="w-full h-48 object-cover" />
      </div>
      
      <div className="flex items-center space-x-2 text-gray-700 mb-2">
        <span className="font-bold text-sm sm:text-base">{player["player-name"]}</span>
      </div>
      
      <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm mb-4">
        <div className="flex items-center space-x-1">
          <span>{player["player-country"]}</span>
        </div>
        <span className="bg-gray-200 text-xs font-semibold px-2 py-1 rounded-full">{player["playing-role"]}</span>
      </div>

      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-800">Batting Style:</span>
        <span className="text-gray-500 font-semibold">{player["bating-style"]}</span>
      </div>

      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-800">Rating:</span>
        <span className="text-gray-500 font-semibold">{player.rating}/10</span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-500 text-sm">Price: <span className="text-gray-800 font-bold">{player.price}</span></span>
        <button 
          onClick={() => onSelectPlayer(player)}
          disabled={!canAffordPlayer()}
          className={`border rounded-full py-2 px-4 font-semibold transition duration-200 text-sm ${
            canAffordPlayer() 
              ? 'border-gray-300 text-gray-800 hover:bg-gray-100' 
              : 'border-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {canAffordPlayer() ? 'Select Player' : 'Need Coins'}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;