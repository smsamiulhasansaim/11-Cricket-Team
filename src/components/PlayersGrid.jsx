import React from 'react';
import PlayerCard from './PlayerCard';

const PlayersGrid = ({ selectedTab, players, onSelectPlayer, onRemovePlayer, availableCoins }) => {
  if (selectedTab === 'available') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {players.map(player => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            onSelectPlayer={onSelectPlayer}
            availableCoins={availableCoins}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {players.map(player => (
        <PlayerCard 
          key={player.id} 
          player={player} 
          isSelectedView={true}
          onRemovePlayer={onRemovePlayer}
        />
      ))}
      {players.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No players selected yet.</p>
        </div>
      )}
    </div>
  );
};

export default PlayersGrid;