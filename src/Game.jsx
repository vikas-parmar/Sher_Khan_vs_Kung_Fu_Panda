import { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSqares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };
  const moves = history.map((squares, move) => {
    const description = (move === 0) ? 'Go to game start' : 'Go to move #';
    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
