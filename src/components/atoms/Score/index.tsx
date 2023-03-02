import React, { useEffect } from 'react';
import styled from 'styled-components';

import useBoardStore from '^/store/board';
import { themeButtons } from '^/theme/Theme';
import * as T from '^/types';

const Root = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

interface ScoreElementProps {
  curPlayer: T.Player;
  whichSide: T.Player;
}

const ScoreElement = styled.span<ScoreElementProps>`
  height: calc(10px + 2vmin + 0.8vh);
  font-size: calc(8px + 2vmin);
  padding-left: 0.25vw;
  padding-right: 0.25vw;
  padding-top: 0.15vh;
  padding-bottom: 0.15vh;

  background-color: ${({ curPlayer, whichSide }) => (curPlayer === whichSide ? '#61dafb' : '')};
  color: ${({ curPlayer, whichSide }) => (curPlayer === whichSide ? '#282c34' : '')};
`;

function Score() {
  const {
    curPlayer,
    winner,
    score: [p1Score, p2Score],
  } = useBoardStore();

  useEffect(() => {
    document.title = `React Gomoku :: ${p1Score} - ${p2Score}`;
  });

  return (
    <Root>
      <span>
        <ScoreElement
          curPlayer={winner === T.Player.NONE ? curPlayer : T.Player.NONE}
          whichSide={T.Player.PLAYER1}
        >
          {themeButtons[0]}
          {p1Score}
        </ScoreElement>
        {' - '}
        <ScoreElement
          curPlayer={winner === T.Player.NONE ? curPlayer : T.Player.NONE}
          whichSide={T.Player.PLAYER2}
        >
          {themeButtons[1]}
          {p2Score}
        </ScoreElement>
      </span>
    </Root>
  );
}

export default Score;
