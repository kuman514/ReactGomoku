import React, { useState } from 'react';
import BoardButton from './BoardButton';
import Bottom from './Bottom';

function Board() {
  // Using React hooks
  const [status, setStatus] = useState({
    tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
    curPlayer: 1
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

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer
    });
  };

  // How can the RESET Button outside restore this board?
  const resetBoard = () => {
    setStatus({
      tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
      curPlayer: 1
    });
  };

  return (
    <div className="Board" onClick={(event) => {
      //console.log((event.target as HTMLElement).id);
      const [row, col] = (event.target as HTMLElement).id.split(',').map((item) => parseInt(item));
      //console.log(row, col);
      if (Number.isNaN(row) || Number.isNaN(col)) {
        return;
      }

      putStone(row, col);
    }}>
      <div className="Tiles">
        {
          status.tiles.map((line, i) => {
            return line.map((item, j) => {
              return (<BoardButton key={`r${i}c${j}`} keyPos={`${i},${j}`} who={item} clicked={item !== 0} />);
            });
          })
        }
      </div>
      <Bottom onClick={resetBoard}/>
    </div>
  );
}

export default Board;
