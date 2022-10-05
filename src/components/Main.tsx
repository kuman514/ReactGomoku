import React from 'react';
import Title from 'components/atoms/Title';
import Board from 'components/organisms/Board';
import ModeChanger from 'components/organisms/ModeChanger';
import Bottom from 'components/organisms/Bottom';
import WinnerEffect from 'components/molecules/WinnerEffect';
import { themeTitle } from 'theme/Theme';

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
