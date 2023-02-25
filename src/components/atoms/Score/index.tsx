import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { initState, StoreState } from '^/store/StoreState';

const ScoreElement = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

function Score() {
  const p1ScoreSelector = ({ score }: StoreState = initState) => (score[0]);
  const p1Score = useSelector(p1ScoreSelector);

  const p2ScoreSelector = ({ score }: StoreState = initState) => (score[1]);
  const p2Score = useSelector(p2ScoreSelector);

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
