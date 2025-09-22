import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import PlayerCard from './components/PlayerCard';
import Newsletter from './components/Newsletter';
import TeamSummary from './components/TeamSummary';
import playersData from './data/players.json';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      alert('Player already selected!');
      return;
    }
    
    if (selectedPlayers.length >= 11) {
      alert('Maximum 11 players allowed!');
      return;
    }
    
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const handleRemovePlayer = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter(player => player.id !== playerId));
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      
      <HeroBanner />
      
      <section className="bg-gray-50 py-8 sm:py-12 flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
              {selectedTab === 'available' ? 'Available Players' : 'Selected Players'}
            </h2>
            <div className="flex space-x-2 p-1 bg-gray-200 rounded-full text-sm font-semibold">
              <button 
                onClick={() => setSelectedTab('available')}
                className={`px-3 sm:px-4 py-2 rounded-full shadow-md ${
                  selectedTab === 'available' ? 'bg-yellow-400 text-gray-800' : 'text-gray-600'
                }`}
              >
                Available
              </button>
              <button 
                onClick={() => setSelectedTab('selected')}
                className={`px-3 sm:px-4 py-2 rounded-full ${
                  selectedTab === 'selected' ? 'bg-yellow-400 text-gray-800' : 'text-gray-600'
                }`}
              >
                Selected ({selectedPlayers.length})
              </button>
            </div>
          </div>

          {selectedTab === 'available' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {playersData.map(player => (
                <PlayerCard 
                  key={player.id} 
                  player={player} 
                  onSelectPlayer={handleSelectPlayer}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {selectedPlayers.map(player => (
                <PlayerCard 
                  key={player.id} 
                  player={player} 
                  isSelectedView={true}
                  onRemovePlayer={handleRemovePlayer}
                />
              ))}
              {selectedPlayers.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No players selected yet.</p>
                </div>
              )}
            </div>
          )}
          
          {selectedTab === 'selected' && <TeamSummary selectedPlayers={selectedPlayers} />}
        </div>
      </section>
      
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default App;