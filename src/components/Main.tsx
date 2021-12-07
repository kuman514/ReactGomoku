import React from 'react';
import Title from './Title';
import Board from './Board';
import Bottom from './Bottom';
import ModeChanger from './ModeChanger';
import WinnerEffect from './WinnerEffect';
import { themeTitle } from '../theme/Theme';

function Main() {
  return (
    <main className="Main">
      <Title title={themeTitle} />
      <ModeChanger />
      <Board />
      <Bottom />
      <WinnerEffect />
    </main>
  );
}

export default Main;
