import React from 'react';
import Title from './Title';
import Board from './Board';
import Bottom from './Bottom';
import ModeChanger from './ModeChanger';
import WinnerEffect from './WinnerEffect';

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
  return (
    <main className="Main">
      <Title title={THEME_TITLES[THEME_INDEX]} />
      <ModeChanger />
      <Board
        themeButtons={THEME_BUTTONS[THEME_INDEX]}
      />
      <Bottom />
      <WinnerEffect />
    </main>
  );
}

export default Main;
