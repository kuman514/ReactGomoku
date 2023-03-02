import React from 'react';

import BottomButtonElement from '^/components/atoms/BottomButtonElement';
import Score from '^/components/atoms/Score';
import useBoardStore from '^/store/board';

function GameBottom() {
  const { undo, reset } = useBoardStore();
  return (
    <>
      <Score />
      <BottomButtonElement
        onClick={() => {
          undo();
        }}
      >
        Undo
      </BottomButtonElement>
      <BottomButtonElement
        onClick={() => {
          reset();
        }}
      >
        Reset
      </BottomButtonElement>
      <BottomButtonElement onClick={() => {
        const { history } = useBoardStore.getState();

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
