import React, { useEffect } from 'react';
import styled from 'styled-components';

import useBoardStore from '^/store/board';
import { palette, themeButtons } from '^/theme';
import * as T from '^/types';

const Root = styled.div`
  margin-left: 10px;
  margin-right: 10px;

  display: flex;
  flex-direction: row;
`;

interface ScoreElementProps {
  curPlayer: T.Player;
  whichSide: T.Player;
}

const ScoreElement = styled.div<ScoreElementProps>`
  font-size: calc(8px + 2vmin);
  padding-left: 0.25vw;
  padding-right: 0.25vw;
  padding-top: 0.15vh;
  padding-bottom: 0.15vh;

  background-color: ${({ curPlayer, whichSide }) => (curPlayer === whichSide ? palette.mainTheme : '')};
  color: ${({ curPlayer, whichSide }) => (curPlayer === whichSide ? palette.dark : '')};
`;

function Score() {
  const curPlayer = useBoardStore((state) => state.curPlayer);
  const winner = useBoardStore((state) => state.winner);
  const [p1Score, p2Score] = useBoardStore((state) => state.score);
  const isFull = useBoardStore((state) => state.isFull);

  useEffect(() => {
    document.title = `React Gomoku :: ${p1Score} - ${p2Score}`;
  });

  const isPlaying: boolean = !isFull && winner === T.Player.NONE;

  return (
    <Root>
      <ScoreElement
        curPlayer={isPlaying ? curPlayer : T.Player.NONE}
        whichSide={T.Player.PLAYER1}
      >
        {themeButtons[0]}
        {p1Score}
      </ScoreElement>
      {' - '}
      <ScoreElement
        curPlayer={isPlaying ? curPlayer : T.Player.NONE}
        whichSide={T.Player.PLAYER2}
      >
        {themeButtons[1]}
        {p2Score}
      </ScoreElement>
    </Root>
  );
}

export default Score;
