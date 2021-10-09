import React from 'react';
import Title from './Title';
import Board from './Board';
import Bottom from './Bottom';

function Main() {
  return (
    <main className="Main">
      <Title title="React Gomoku" />
      <Board />
      <Bottom />
    </main>
  );
}

export default Main;
