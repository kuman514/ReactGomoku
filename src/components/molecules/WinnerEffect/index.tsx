import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { initState, StoreState } from 'store/StoreState';
import { AppMode, Player } from 'types';

interface WinnerEffectState {
  winner: Player,
  mode: string
};

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
  const selector = (state: StoreState = initState): WinnerEffectState => {
    return {
      winner: state.winner,
      mode: state.mode
    }
  };
  const status = useSelector(selector);
  const renderWinnerEffect = () => {
    if (status.mode === AppMode.GAME && status.winner !== Player.NONE) {
      return (
        <WinnerEffectElement>
          <WinnerEffectContentElement>
            <span>
              Player { status.winner } Wins!
            </span>
          </WinnerEffectContentElement>
        </WinnerEffectElement>
      );
    } else {
      return null;
    }
  };

  return renderWinnerEffect();
}

export default WinnerEffect;
