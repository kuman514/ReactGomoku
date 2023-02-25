import React from 'react';
import { useDispatch } from 'react-redux';

import { store } from '^/store/Store';
import BottomButtonElement from '^/components/atoms/BottomButtonElement';
import Score from '^/components/atoms/Score';
import { StoreState } from '^/store/StoreState';
import { ActionKey } from '^/types';

function GameBottom() {
  const dispatch = useDispatch();
  return (
    <>
      <Score />
      <BottomButtonElement
        onClick={() => {
          dispatch({ type: ActionKey.UNDO });
        }}
      >
        Undo
      </BottomButtonElement>
      <BottomButtonElement
        onClick={() => {
          dispatch({ type: ActionKey.RESET });
        }}
      >
        Reset
      </BottomButtonElement>
      <BottomButtonElement onClick={() => {
        const { history }: StoreState = store.getState();

        const replayData = {
          width: 19,
          height: 19,
          history,
        };

        const file: HTMLAnchorElement = document.createElement('a');
        const fileBlob: Blob = new Blob([JSON.stringify(replayData)], { type: 'json' });
        file.href = URL.createObjectURL(fileBlob);
        file.download = 'replay.json';
        file.click();
      }}
      >
        Save As Replay
      </BottomButtonElement>
    </>
  );
}

export default GameBottom;
