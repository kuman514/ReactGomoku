import React from 'react';
import Title from './Title';
import Board from './Board';

function Main() {
  return (
    <main className="Main">
      <Title title="React Gomoku" />
      <Board />
    </main>
  );
}

export default Main;
