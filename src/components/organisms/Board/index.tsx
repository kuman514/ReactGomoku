/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import BoardTile from '^/components/molecules/BoardTile';
import useBoardStore from '^/store/board';

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
  const put = useBoardStore((state) => state.put);

  const onClickButton: (row: number, col: number) => void = (row, col) => {
    if (Number.isNaN(row) || Number.isNaN(col)) return;
    put([row, col]);
  };

  return (
    <BoardElement>
      <TilesElement>
        {
          Array.from({ length: 19 }, () => Array.from({ length: 19 }))
            .map((line, i) => line.map((_, j) => (
              <BoardTile
                // eslint-disable-next-line react/no-array-index-key
                key={`r${i}c${j}`}
                row={i}
                col={j}
                onClick={onClickButton}
              />
            )))
        }
      </TilesElement>
    </BoardElement>
  );
}

export default Board;
