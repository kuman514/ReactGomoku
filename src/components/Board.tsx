import React, { useState } from 'react';
import BoardButton from './BoardButton';
import Bottom from './Bottom';

const EMPTY: number = 0;

function Board() {
  // Using React hooks
  const [status, setStatus] = useState({
    tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
    curPlayer: 1,
    history: Array<number[]>(),
    winner: 0,
    winningTracks: Array<number[]>()
  });

  const isInRange = (row: number, col: number): boolean => {
    if (row < 0 || row >= 19 || col < 0 || col >= 19) {
      return false;
    }
    return true;
  };

  const getNewTiles = (row: number, col: number, player: number): number[][] => {
    const newTiles = Array.from({length: 19}, (_, i) => Array.from(status.tiles[i]));
    newTiles[row][col] = player;
    return newTiles;
  };

  const getNewPlayer = (curPlayer: number): number => {
    switch (curPlayer) {
      case 1:
        return 2;
      case 2:
        return 1;
      default:
        return 0;
    }
  };

  const putStone = (row: number, col: number) => {
    if (status.tiles[row][col] !== 0) {
      return;
    }

    const newTiles: number[][] = getNewTiles(row, col, status.curPlayer);
    const newPlayer: number = getNewPlayer(status.curPlayer);

    const [winner, winningTracks] = checkWinner(row, col, newTiles);

    const newHistory = Array.from(status.history);
    newHistory.push([row, col]);

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      history: newHistory,
      winner: winner,
      winningTracks: winningTracks
    });
  };

  const undo = () => {
    if (status.history.length === 0) {
      return;
    }

    const newHistory = Array.from(status.history);
    const tmp: number[] | undefined = newHistory.pop();

    if (tmp === undefined) {
      return;
    }

    const [row, col] = tmp;
    if (row < 0 || row >= 19 || col < 0 || col >= 19) {
      return;
    }

    const newTiles: number[][] = getNewTiles(row, col, EMPTY);
    const newPlayer: number = getNewPlayer(status.curPlayer);

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      history: newHistory,
      winner: 0,
      winningTracks: Array<number[]>()
    });
  };

  const resetBoard = () => {
    setStatus({
      tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
      curPlayer: 1,
      history: Array<number[]>(),
      winner: 0,
      winningTracks: Array<number[]>()
    });
  };

  const checkWinner = (row: number, col: number, newTiles: number[][]): [number, number[][]] => {
    const winner: number = newTiles[row][col];

    const directions: number[][] = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (let n: number = 0; n < directions.length; n++) {
      const [rDir, cDir] = directions[n];
      const collected: number[][] = [[row, col]];

      let [curRow, curCol] = [row + rDir, col + cDir];
      while (isInRange(curRow, curCol) && newTiles[curRow][curCol] === winner) {
        collected.push([curRow, curCol]);
        curRow += rDir;
        curCol += cDir;
      }

      [curRow, curCol] = [row - rDir, col - cDir];
      while (isInRange(curRow, curCol) && newTiles[curRow][curCol] === winner) {
        collected.push([curRow, curCol]);
        curRow -= rDir;
        curCol -= cDir;
      }

      if (collected.length === 5) {
        return [winner, collected];
      }
    }

    return [0, []];
  };

  const winningTrack: Set<string> = new Set(status.winningTracks.map((item) => `${item[0]},${item[1]}`));

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
                tracked={status.winner !== 0 ? (winningTrack.has(`${i},${j}`)) : false}
              />);
            });
          })
        }
      </div>
      <Bottom
        info={status.winner !== 0 ? `Player ${status.winner} wins!` : `Player ${status.curPlayer}'s turn!`}
        onClickUndo={undo}
        onClickReset={resetBoard}
      />
    </div>
  );
}

export default Board;
