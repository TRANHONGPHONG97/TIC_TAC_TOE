import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    // Xét X đánh trước, nếu k có thì lần cuối cùng ai thắng, khi reset thì bên kia đánh trước
    setXIsNext(true);
  };
  return (
    <>
      <div>
        <Board cells={board} onClick={handleClick}></Board>
      </div>
      <div>
        {winner && <div className="game-winner">Winner is {winner}</div>}

        <button className="game-reset" onClick={handleResetGame}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Game;
