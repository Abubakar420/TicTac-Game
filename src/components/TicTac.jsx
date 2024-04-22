/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TicTacBg from '../assets/pngwing.com (1).png';
import '../css/TicTac.css';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (gameOver || winner || board[index]) {
      return; // Return early if the game is over or there's already a winner or the square is already filled
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const calculatedWinner = calculateWinner(newBoard);
    if (calculatedWinner) {
      setGameOver(true);
      setWinner(calculatedWinner);
    } else if (calculateDraw(newBoard)) {
      setGameOver(true);
    }
  };

  const renderSquare = (index) => {
    return (
      <button type="button" className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (gameOver) {
    status = 'DRAW';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="game animationDiv">
      <div className="status animationDiv">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {(gameOver || winner) && (
        <div className="mainModalDiv animationDiv">
          <div className="playAgainImgDiv">
            <img src={TicTacBg} alt=".." />
          </div>
          <div className="playAgainButtonsDiv">
            <button type="button" onClick={handlePlayAgain}>
              Play again
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Quit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Function to calculate the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Function to check for a draw
const calculateDraw = (squares) => {
  return squares.every((square) => square !== null);
};

export default TicTacToe;
