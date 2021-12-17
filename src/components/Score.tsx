import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initState, StoreState } from '../store/StoreState';
import styles from './Score.module.css';

interface ScoreState {
  p1Score: number,
  p2Score: number
}

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
    <div className={styles.Score}>
      <span>
        {status.p1Score} - {status.p2Score}
      </span>
    </div>
  );
}

export default Score;
