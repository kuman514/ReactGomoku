import React, { useState } from 'react';
import BoardButton from './BoardButton';

function Board() {
  const [tiles, setTiles] = useState(
    Array.from({length: 19}, () => Array.from({length: 19}, () => 0))
  );

  return (
    <div className="Board" onClick={(event) => {
      console.log((event.target as HTMLElement).id);
    }}>
      {
        tiles.map((line, i) => {
          return line.map((item, j) => {
            return (<BoardButton keyPos={`r${i}c${j}`} who={item} clicked={item !== 0} />);
          });
        })
      }
    </div>
  );
}

export default Board;
