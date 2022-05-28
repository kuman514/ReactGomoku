import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { initState, StoreState } from '../store/StoreState';

interface ScoreState {
  p1Score: number,
  p2Score: number
}

const ScoreElement = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

function Score() {
  const selector = (state: StoreState = initState): ScoreState => {
    return {
      p1Score: state.score[0],
      p2Score: state.score[1]
    };
  };
  const status = useSelector(selector);

  useEffect(() => {
    document.title = `React Gomoku :: ${status.p1Score} - ${status.p2Score}`;
  });

  return (
    <ScoreElement>
      <span>
        {status.p1Score} - {status.p2Score}
      </span>
    </ScoreElement>
  );
}

export default Score;
