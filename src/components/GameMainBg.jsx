/* eslint-disable jsx-a11y/anchor-is-valid */
// Init
import React, { useState } from 'react';
import TicTacBg from '../assets/pngwing.com (1).png';
import TicTac from './TicTac';

// Component
export default function Header() {
  const [playGame, setPlayGame] = useState(false);

  const handlePlayGame = () => {
    setPlayGame(true);
  };
  return (
    <>
      <div className={`mainBgGame animationDiv ${playGame ? 'hidden' : ''}`}>
        <div className="subdivBgGame">
          <div className="leftSideMainDiv">
            <h2>Welcome to TicTacTos</h2>
            <p>
              Are you ready to jump into the world of TicTacToe excitement? Click the button below
              to start playing now!
            </p>
            <button type="button" className="btn" onClick={handlePlayGame}>
              <a href="#">Play Game</a>
            </button>
            <h6>Game By Abubakar Rehman</h6>
          </div>
          <div className="rightSideMainDiv">
            <img src={TicTacBg} alt=".." />
          </div>
        </div>
      </div>
      {playGame && <TicTac />}
    </>
  );
}
