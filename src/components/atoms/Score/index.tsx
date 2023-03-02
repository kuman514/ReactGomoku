import React, { useEffect } from 'react';
import styled from 'styled-components';
import useBoardStore from '^/store/board';

const ScoreElement = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

function Score() {
  const [p1Score, p2Score] = useBoardStore(({ score }) => score);

  useEffect(() => {
    document.title = `React Gomoku :: ${p1Score} - ${p2Score}`;
  });

  return (
    <ScoreElement>
      <span>
        {p1Score}
        {' - '}
        {p2Score}
      </span>
    </ScoreElement>
  );
}

export default Score;
