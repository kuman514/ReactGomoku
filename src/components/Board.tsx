import React, { useState } from 'react';
import BoardButton from './BoardButton';
import Bottom from './Bottom';

function Board() {
  // Using React hooks
  const [status, setStatus] = useState({
    tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
    curPlayer: 1,
    winner: 0,
    winningTracks: [[-1, -1]]
  });

  const putStone = (row: number, col: number) => {
    if (status.tiles[row][col] !== 0) {
      return;
    }

    const newTiles = Array.from({length: 19}, (_, i) => Array.from(status.tiles[i]));
    let newPlayer = 0;

    newTiles[row][col] = status.curPlayer;
    switch (status.curPlayer) {
      case 1:
        newPlayer = 2;
        break;
      case 2:
        newPlayer = 1;
        break;
    }

    const [winner, winningTracks] = checkWinner(row, col, newTiles);

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      winner: winner,
      winningTracks: winningTracks
    });
  };

  const resetBoard = () => {
    setStatus({
      tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
      curPlayer: 1,
      winner: 0,
      winningTracks: [[-1, -1]]
    });
  };

  const checkWinner = (row: number, col: number, newTiles: number[][]): [number, number[][]] => {
    const winner: number = newTiles[row][col];

    const topToBot: number[][] = [[row, col]];
    const leftToRight: number[][] = [[row, col]];
    const leftTopToRightBot: number[][] = [[row, col]];
    const leftBotToRightTop: number[][] = [[row, col]];

    // Vertical
    for (let i = 1; row - i >= 0 && newTiles[row - i][col] === winner; i++) {
      topToBot.push([row - i, col]);
    }
    for (let i = 1; row + i < 19 && newTiles[row + i][col] === winner; i++) {
      topToBot.push([row + i, col]);
    }
    if (topToBot.length === 5) {
      return [winner, topToBot];
    }

    // Horizontal
    for (let i = 1; col - i >= 0 && newTiles[row][col - i] === winner; i++) {
      leftToRight.push([row, col - i]);
    }
    for (let i = 1; col + i < 19 && newTiles[row][col + i] === winner; i++) {
      leftToRight.push([row, col + i]);
    }
    if (leftToRight.length === 5) {
      return [winner, leftToRight];
    }

    // Left top to right bottom
    for (let i = 1; row - i >= 0 && col - i >= 0 && newTiles[row - i][col - i] === winner; i++) {
      leftTopToRightBot.push([row - i, col - i]);
    }
    for (let i = 1; row + i < 19 && col + i < 19 && newTiles[row + i][col + i] === winner; i++) {
      leftTopToRightBot.push([row + i, col + i]);
    }
    if (leftTopToRightBot.length === 5) {
      return [winner, leftTopToRightBot];
    }

    // Left bottom to right top
    for (let i = 1; row + i < 19 && col - i >= 0 && newTiles[row + i][col - i] === winner; i++) {
      leftBotToRightTop.push([row + i, col - i]);
    }
    for (let i = 1; row - i >= 0 && col + i < 19 && newTiles[row - i][col + i] === winner; i++) {
      leftBotToRightTop.push([row - i, col + i]);
    }
    if (leftBotToRightTop.length === 5) {
      return [winner, leftBotToRightTop];
    }

    return [0, []];
  };

  return (
    <div className="Board" onClick={(event) => {
      const [row, col] = (event.target as HTMLElement).id.split(',').map((item) => parseInt(item));
      if (Number.isNaN(row) || Number.isNaN(col)) {
        return;
      }

      putStone(row, col);
    }}>
      <div className="Tiles">
        {
          status.tiles.map((line, i) => {
            return line.map((item, j) => {
              return (<BoardButton
                key={`r${i}c${j}`}
                keyPos={`${i},${j}`}
                who={item}
                clicked={item !== 0}
                winnerExists={status.winner !== 0}
              />);
            });
          })
        }
      </div>
      <Bottom
        info={status.winner !== 0 ? `Player ${status.winner} wins!` : `Player ${status.curPlayer}'s turn!`}
        onClick={resetBoard}
      />
    </div>
  );
}

export default Board;
