import { useState } from "react";
import Board from "./Board"

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove ] = useState(0);
    const xIsNext = currentMove % 2 === 0;

    const currentSquares = history[currentMove];

    const handlePlay=(nextSqares)=>{
        const nextHistory = [...history.slice(0, currentMove + 1), nextSqares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    const jumpTo=(nextMove)=>{
        setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move)=>{
        // let description;
        // if(move> 0){
        //     description = 'Go to move #';
        // } else{
        //     description = 'Go to game start';
        // }
        let description = (move > 0)?'Go to move #':'Go to game start'
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
    )
}
export default Game