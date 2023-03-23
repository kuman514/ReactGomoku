import React from 'react';
import styled from 'styled-components';

import useBoardStore from '^/store/board';
import useModeStore from '^/store/mode';
import { palette } from '^/theme';
import { AppMode, Player } from '^/types';

const WinnerEffectElement = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  animation: WinnerEffectAnimation linear 3000ms;
  animation-iteration-count: 1;

  @keyframes WinnerEffectAnimation {
    0% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const WinnerEffectContentElement = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  animation: WinnerEffectContentAnimation linear 3000ms;
  animation-iteration-count: 1;

  @keyframes WinnerEffectContentAnimation {
    0% {
      font-size: 0;
    }
    10% {
      text-shadow: 0 0 5vw ${palette.mainTheme}, 0 0 3vw ${palette.mainTheme}, 0 0 1vw ${palette.mainTheme};
      font-size: 250%;
    }
  }
`;

function WinnerEffect() {
  const { winner, isFull } = useBoardStore();
  const { mode } = useModeStore();

  if (
    mode === AppMode.GAME
    && (winner !== Player.NONE || isFull)
  ) {
    return (
      <WinnerEffectElement>
        <WinnerEffectContentElement>
          <span>
            {
              winner !== Player.NONE ? (
                `Player ${winner} Wins!`
              ) : (
                'Draw!'
              )
            }
          </span>
        </WinnerEffectContentElement>
      </WinnerEffectElement>
    );
  }

  return null;
}

export default WinnerEffect;
