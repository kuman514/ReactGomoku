import React from 'react';
import Title from './Title';
import Board from './Board';

function Main() {
  const SFXs = {
    player1PutSFX: document.querySelector('#player1PutSFX'),
    player2PutSFX: document.querySelector('#player2PutSFX'),
    resetSFX: document.querySelector('#resetSFX'),
    undoSFX: document.querySelector('#undoSFX'),
    resultSFX: document.querySelector('#resultSFX')
  };

  return (
    <main className="Main">
      <Title title="React Gomoku" />
      <Board
        player1PutSFX={SFXs.player1PutSFX as HTMLAudioElement}
        player2PutSFX={SFXs.player2PutSFX as HTMLAudioElement}
        resetSFX={SFXs.resetSFX as HTMLAudioElement}
        undoSFX={SFXs.undoSFX as HTMLAudioElement}
        resultSFX={SFXs.resultSFX as HTMLAudioElement}
      />
    </main>
  );
}

export default Main;
