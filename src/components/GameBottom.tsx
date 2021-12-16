import React from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../store/Store';
import { StoreState } from '../store/StoreState';
import styles from './Bottom.module.css';
import Score from './Score';

function GameBottom() {
  const dispatch = useDispatch();
  
  return (
    <div className={styles.Bottom}>
      <Score />
      <button onClick={() => {
        dispatch({ type: 'UNDO' });
      }}>
        Undo
      </button>
      <button onClick={() => {
        dispatch({ type: 'RESET' });
      }}>
        Reset
      </button>
      <button onClick={() => {
        const status: StoreState = store.getState();

        const replayData = {
          width: 19,
          height: 19,
          history: status.history
        };

        const file: HTMLAnchorElement = document.createElement('a');
        const fileBlob: Blob = new Blob([JSON.stringify(replayData)], {type: 'json'});
        file.href = URL.createObjectURL(fileBlob);
        file.download = 'replay.json';
        file.click();
      }}>
        Save As Replay
      </button>
    </div>
  );
}

export default GameBottom;
