import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import PlayerCard from './components/PlayerCard';
import Newsletter from './components/Newsletter';
import TeamSummary from './components/TeamSummary';
import playersData from './data/players.json';
  import { toast, ToastContainer} from 'react-toastify';
const App = () => {
  // State for managing selected tab (available players or selected players)
  const [selectedTab, setSelectedTab] = useState('available');
  
  // State for storing selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  
  // State for available coins (15 lakh coins = 15,000,000)
  const [availableCoins, setAvailableCoins] = useState(15000000);

  // Function to calculate player price from string format (e.g., "$200,000")
  const calculatePlayerPrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,]/g, ''));
  };

  // Function to handle player selection
  const handleSelectPlayer = (player) => {
    // Check if player is already selected
    if (selectedPlayers.find(p => p.id === player.id)) {
      toast("Player already selected!");
      return;
    }
    
    // Check if maximum 11 players are already selected
    if (selectedPlayers.length >= 11) {
      toast('Maximum 11 players allowed!');
      return;
    }
    
    const playerPrice = calculatePlayerPrice(player.price);
    
    // Check if user has enough coins to buy the player
    if (availableCoins < playerPrice) {
      toast('Not enough coins! Please remove some players to get more coins.');
      return;
    }
    
    // Add player to selected list and deduct coins
    setSelectedPlayers([...selectedPlayers, player]);
    setAvailableCoins(availableCoins - playerPrice);
    
    // Show success notification
    toast(`Successfully added ${player["player-name"]} to your team!`);
  };

  // Function to handle player removal
  const handleRemovePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find(player => player.id === playerId);
    
    if (playerToRemove) {
      const playerPrice = calculatePlayerPrice(playerToRemove.price);
      
      // Remove player and refund coins
      setSelectedPlayers(selectedPlayers.filter(player => player.id !== playerId));
      setAvailableCoins(availableCoins + playerPrice);
      
      // Show removal notification
      toast(`Removed ${playerToRemove["player-name"]} from your team. Coins refunded!`);
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Header component with coin display */}
      <Header availableCoins={availableCoins} />
      
      {/* Hero banner section */}
      <HeroBanner />
      
      {/* Main content section */}
      <section className="bg-gray-50 py-8 sm:py-12 flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Section header with tab navigation */}
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
                Available Players
              </button>
              <button 
                onClick={() => setSelectedTab('selected')}
                className={`px-3 sm:px-4 py-2 rounded-full ${
                  selectedTab === 'selected' ? 'bg-yellow-400 text-gray-800' : 'text-gray-600'
                }`}
              >
                Selected Players ({selectedPlayers.length}/11)
              </button>
            </div>
          </div>

          {/* Players grid based on selected tab */}
          {selectedTab === 'available' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {playersData.map(player => (
                <PlayerCard 
                  key={player.id} 
                  player={player} 
                  onSelectPlayer={handleSelectPlayer}
                  availableCoins={availableCoins}
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
          
          {/* Team summary section (only shown when viewing selected players) */}
          {selectedTab === 'selected' && (
            <TeamSummary 
              selectedPlayers={selectedPlayers} 
              availableCoins={availableCoins}
            />
          )}
        </div>
      </section>
      
      {/* Newsletter component */}
      <Newsletter />
      
      {/* Footer component */}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;