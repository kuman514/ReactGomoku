import React, { useState } from 'react';
import Title from './Title';
import Board from './Board';
import ModeChanger from './ModeChanger';
import ReplayBoard from './Replay';

const SFXs = {
  player1PutSFX: document.querySelector('#player1PutSFX'),
  player2PutSFX: document.querySelector('#player2PutSFX'),
  resetSFX: document.querySelector('#resetSFX'),
  undoSFX: document.querySelector('#undoSFX'),
  resultSFX: document.querySelector('#resultSFX')
};

function Main() {
  const [status, setStatus] = useState({
    mode: 'game'
  });

  const onChangeMode = (mode: string) => {
    if (mode === status.mode) {
      return;
    }

    setStatus({
      mode: mode
    });
  };

  const renderBoard = () => {
    switch (status.mode) {
      case 'game':
        return (
          <Board
            player1PutSFX={SFXs.player1PutSFX as HTMLAudioElement}
            player2PutSFX={SFXs.player2PutSFX as HTMLAudioElement}
            resetSFX={SFXs.resetSFX as HTMLAudioElement}
            undoSFX={SFXs.undoSFX as HTMLAudioElement}
            resultSFX={SFXs.resultSFX as HTMLAudioElement}
          />
        );
      case 'replay':
        return (
          <ReplayBoard
            player1PutSFX={SFXs.player1PutSFX as HTMLAudioElement}
            player2PutSFX={SFXs.player2PutSFX as HTMLAudioElement}
            resetSFX={SFXs.resetSFX as HTMLAudioElement}
            undoSFX={SFXs.undoSFX as HTMLAudioElement}
            resultSFX={SFXs.resultSFX as HTMLAudioElement}
          />
        );
    }
  };

  return (
    <main className="Main">
      <Title title="React Gomoku" />
      <ModeChanger
        onChangeMode={onChangeMode}
      />
      {
        renderBoard()
      }
    </main>
  );
}

export default Main;
