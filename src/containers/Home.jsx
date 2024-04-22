// Init
import React from 'react';

// Importing Components
// import TicTac from '../components/TicTac';
import GameMainBg from '../components/GameMainBg';

// Home Component
export default function Home() {
  return (
    <div
      style={{
        overflowY: 'hidden',
      }}
    >
      <GameMainBg />
      {/* <TicTac /> */}
    </div>
  );
}
