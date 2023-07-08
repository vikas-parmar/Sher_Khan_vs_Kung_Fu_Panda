import React from "react";
import Square from "./Square";

const boardRows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

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

  let winner = null;

  lines.forEach((line) => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    }
  });

  return winner;
};

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  const status = winner
    ? `winner: ${winner}`
    : `Next player: ${xIsNext ? "🦁" : "🐼"}`;

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "🦁" : "🐼";
    onPlay(nextSquares);
  };

  return (
    <>
      <h2>{status}</h2>
      <div className="board">
        {boardRows.map((row) => (
          <div className="board-row" key={row}>
            {row.map((s) => (
              <Square
                key={s}
                value={squares[s]}
                onSquareClick={() => handleClick(s)}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
