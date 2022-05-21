import React from 'react';
import { useDispatch } from 'react-redux';
import BoardButton from './BoardButton';
import styled from 'styled-components';

const BoardElement = styled.div`
  width: 98vw;
  @media (orientation: landscape) {
    & {
      width: 85vh;
    }
  }
`;

const TilesElement = styled.div`
  width: 100%;
  height: 98vw;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(19, 1fr);
  background-color: rgba(202, 138, 85, 0.5);
  font-size: calc(5px + 2vmin);
  @media (orientation: landscape) {
    & {
      height: 85vh;
    }
  }
`;

function Board() {
  const dispatch = useDispatch();
  return (
    <BoardElement onClick={(event) => {
      const [row, col] = (event.target as HTMLElement).id.split(',').map((item) => parseInt(item));
      if (Number.isNaN(row) || Number.isNaN(col)) {
        return;
      }
      dispatch({
        type: 'PUT',
        payload: [row, col]
      });
    }}>
      <TilesElement>
        {
          Array.from({length: 19}, () => Array.from({length: 19})).map((line, i) => {
            return line.map((_, j) => {
              return (<BoardButton
                key={`r${i}c${j}`}
                keyPos={`${i},${j}`}
              />);
            });
          })
        }
      </TilesElement>
    </BoardElement>
  );
}

export default Board;
