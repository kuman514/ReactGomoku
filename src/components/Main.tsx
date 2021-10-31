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

const THEME_BUTTONS = {
  'default': ['⚫', '⚪'],
  'halloween': ['🟤', '🟠'],
  'winter': ['🔴', '🟢']
};

const THEME_TITLES = {
  'default': 'React Gomoku',
  'halloween': 'Halloween Gomoku',
  'winter': 'Holiday Gomoku'
};

const THEME_INDEX = (() => {
  const dat: Date = new Date();

  const day: number = dat.getDate();
  const month: number = dat.getMonth();

  if (month === 9 && day === 31) {
    // October 31
    return 'halloween';
  } else if ((month === 0 && day === 1) || (month === 11 && day === 25)) {
    // January 1 or December 25
    return 'winter';
  }

  return 'default';
})();

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
            themeButtons={THEME_BUTTONS[THEME_INDEX]}
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
            themeButtons={THEME_BUTTONS[THEME_INDEX]}
          />
        );
    }
  };

  return (
    <main className="Main">
      <Title title={THEME_TITLES[THEME_INDEX]} />
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
