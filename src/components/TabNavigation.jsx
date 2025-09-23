import React from 'react';

const TabNavigation = ({ selectedTab, setSelectedTab, selectedCount }) => {
  return (
    <div className="flex space-x-2 p-1 bg-gray-200 rounded-full text-sm font-semibold">
      <button 
        onClick={() => setSelectedTab('available')}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedTab === 'available' ? 'bg-yellow-400 text-gray-800 shadow-md' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Available Players
      </button>
      <button 
        onClick={() => setSelectedTab('selected')}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedTab === 'selected' ? 'bg-yellow-400 text-gray-800 shadow-md' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Selected Players ({selectedCount}/11)
      </button>
    </div>
  );
};

export default TabNavigation;