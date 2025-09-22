import React from 'react';

const TeamSummary = ({ selectedPlayers }) => {
  const totalPlayers = selectedPlayers.length;
  const totalBudget = selectedPlayers.reduce((sum, player) => {
    const price = parseFloat(player.price.replace(/[$,]/g, ''));
    return sum + price;
  }, 0);
  const remainingBudget = 15000000 - totalBudget;
  const averageRating = selectedPlayers.length > 0 
    ? (selectedPlayers.reduce((sum, player) => sum + player.rating, 0) / selectedPlayers.length).toFixed(1)
    : 0;

  return (
    <div className="max-w-md mx-auto mt-8 sm:mt-12 lg:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="w-full py-3 px-4 bg-yellow-400 text-gray-900 font-bold rounded-lg focus:outline-none glowing-border-animation border-2 border-yellow-500 hover:bg-yellow-500 transition-colors duration-200 text-sm sm:text-base">
          Add More Player
        </button>
        <button className="w-full py-3 px-4 bg-green-500 text-white font-bold rounded-lg focus:outline-none border-2 border-green-600 hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base">
          Save Team
        </button>
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">Team Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Total Players:</span>
            <span className="font-semibold ml-2">{totalPlayers}/11</span>
          </div>
          <div>
            <span className="text-gray-600">Total Budget:</span>
            <span className="font-semibold ml-2">${totalBudget.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-600">Remaining Budget:</span>
            <span className="font-semibold ml-2 text-green-600">${remainingBudget.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-600">Average Rating:</span>
            <span className="font-semibold ml-2">{averageRating}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSummary;