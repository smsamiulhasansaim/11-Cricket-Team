import React from 'react';

const TeamSummary = ({ selectedPlayers }) => {
  
  const totalPlayers = selectedPlayers.length;
  
  const totalSpent = selectedPlayers.reduce((sum, player) => {
    const price = parseFloat(player.price.replace(/[$,]/g, ''));
    return sum + price;
  }, 0);
  
  const remainingBudget = 15000000 - totalSpent;

  const averageRating = selectedPlayers.length > 0 
    ? (selectedPlayers.reduce((sum, player) => sum + player.rating, 0) / selectedPlayers.length).toFixed(1)
    : 0;

  const formatCurrency = (amount) => {
    return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="max-w-md mx-auto mt-8 sm:mt-12 lg:mt-16 bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Team Summary</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-800">{totalPlayers}/11</div>
          <div className="text-sm text-gray-600">Players Selected</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-800">{averageRating}</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Budget:</span>
          <span className="font-semibold">$15,000,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Amount Spent:</span>
          <span className="font-semibold text-red-600">{formatCurrency(totalSpent)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Remaining Budget:</span>
          <span className={`font-semibold ${
            remainingBudget < 500000 ? 'text-red-600' : 'text-green-600'
          }`}>
            {formatCurrency(remainingBudget)}
          </span>
        </div>
      </div>
      
      {remainingBudget < 500000 && remainingBudget > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 text-center">
            ⚠️ Low budget! Choose players carefully.
          </p>
        </div>
      )}
      {remainingBudget <= 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800 text-center">
            ❌ Budget exhausted! Remove players to free up coins.
          </p>
        </div>
      )}
      
      {totalPlayers === 11 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800 text-center font-semibold">
            🎉 Congratulations! Your team is complete!
          </p>
        </div>
      )}
    </div>
  );
};

export default TeamSummary;