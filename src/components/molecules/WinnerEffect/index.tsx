/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StoreState } from 'store/StoreState';
import { AppMode, Player } from 'types';

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
      text-shadow: 0 0 5vw #61dafb, 0 0 3vw #61dafb, 0 0 1vw #61dafb;
      font-size: 250%;
    }
  }
`;

function WinnerEffect() {
  const winnerSelector: (state: StoreState) => Player = ({ winner }) => winner;
  const winner: Player = useSelector(winnerSelector);
  const modeSelector: (state: StoreState) => AppMode = ({ mode }) => mode;
  const mode: AppMode = useSelector(modeSelector);

  if (mode === AppMode.GAME && winner !== Player.NONE) {
    return (
      <WinnerEffectElement>
        <WinnerEffectContentElement>
          <span>
            Player
            {' '}
            { winner }
            {' '}
            Wins!
          </span>
        </WinnerEffectContentElement>
      </WinnerEffectElement>
    );
  }

  return null;
}

export default WinnerEffect;
