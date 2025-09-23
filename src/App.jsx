import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import PlayerCard from './components/PlayerCard';
import Newsletter from './components/Newsletter';
import TeamSummary from './components/TeamSummary';
import TabNavigation from './components/TabNavigation';
import PlayersGrid from './components/PlayersGrid';
import playersData from './data/players.json';
import { toast, ToastContainer } from 'react-toastify';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availableCoins, setAvailableCoins] = useState(15000000);

  const calculatePlayerPrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,]/g, ''));
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      toast.info("Player already selected!");
      return;
    }
    
    if (selectedPlayers.length >= 11) {
      toast.warning('Maximum 11 players allowed!');
      return;
    }
    
    const playerPrice = calculatePlayerPrice(player.price);
    
    if (availableCoins < playerPrice) {
      toast.error('Not enough coins!');
      return;
    }
    
    setSelectedPlayers([...selectedPlayers, player]);
    setAvailableCoins(availableCoins - playerPrice);
    toast.success(`${player["player-name"]} added to your team!`);
  };

  const handleRemovePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find(player => player.id === playerId);
    
    if (playerToRemove) {
      const playerPrice = calculatePlayerPrice(playerToRemove.price);
      setSelectedPlayers(selectedPlayers.filter(player => player.id !== playerId));
      setAvailableCoins(availableCoins + playerPrice);
      toast.info(`${playerToRemove["player-name"]} removed from team.`);
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header availableCoins={availableCoins} />
      <HeroBanner />
      
      <main className="bg-gray-50 py-8 sm:py-12 flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
              {selectedTab === 'available' ? 'Available Players' : `Selected Players (${selectedPlayers.length}/11)`}
            </h2>
            <TabNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} selectedCount={selectedPlayers.length} />
          </div>

          <PlayersGrid
            selectedTab={selectedTab}
            players={selectedTab === 'available' ? playersData : selectedPlayers}
            onSelectPlayer={handleSelectPlayer}
            onRemovePlayer={handleRemovePlayer}
            availableCoins={availableCoins}
            isSelectedView={selectedTab === 'selected'}
          />

          {selectedTab === 'selected' && (
            <TeamSummary selectedPlayers={selectedPlayers} availableCoins={availableCoins} />
          )}
        </div>
      </main>
      
      <Newsletter />
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;