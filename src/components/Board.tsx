import React from 'react';
import { useDispatch } from 'react-redux';
import BoardButton from './BoardButton';
import styles from './Board.module.css'

interface BoardProps {
  themeButtons: string[]
}

function Board(props: BoardProps) {
  const dispatch = useDispatch();

  return (
    <div className={styles.Board} onClick={(event) => {
      const [row, col] = (event.target as HTMLElement).id.split(',').map((item) => parseInt(item));

      if (Number.isNaN(row) || Number.isNaN(col)) {
        return;
      }

      dispatch({
        type: 'PUT',
        payload: [row, col]
      });
    }}>
      <div className={styles.Tiles}>
        {
          Array.from({length: 19}, () => Array.from({length: 19})).map((line, i) => {
            return line.map((_, j) => {
              return (<BoardButton
                key={`r${i}c${j}`}
                keyPos={`${i},${j}`}
                theme={props.themeButtons}
              />);
            });
          })
        }
      </div>
    </div>
  );
}

export default Board;
