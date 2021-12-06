import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState, initState } from '../store/StoreState';
import styles from './Bottom.module.css';
import GameBottom from './GameBottom';
import ReplayBottom from './ReplayBottom';

interface BottomState {
  mode: string
}

function Bottom() {
  const selector = (state: StoreState = initState): BottomState => {
    return {
      mode: state.mode
    };
  };
  const status = useSelector(selector);

  const renderBottom = (): JSX.Element => {
    switch (status.mode) {
      case 'GAME':
        return (
          <GameBottom />
        );
      case 'REPLAY':
        return (
          <ReplayBottom />
        );
      default:
        return (
          <div>
            Invalid mode
          </div>
        );
    }
  }

  return (
    <div className={styles.Bottom}>
      {
        renderBottom()
      }
    </div>
  );
}

export default Bottom;
