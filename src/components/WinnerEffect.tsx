import React from 'react';
import { useSelector } from 'react-redux';
import { initState, StoreState } from '../store/StoreState';


interface WinnerEffectState {
  winner: number,
  mode: string
};

function WinnerEffect() {
  const selector = (state: StoreState = initState): WinnerEffectState => {
    return {
      winner: state.winner,
      mode: state.mode
    }
  };
  const status = useSelector(selector);
  const renderWinnerEffect = (): JSX.Element => {
    if (status.mode === 'GAME' && status.winner !== 0) {
      return (
        <div className="WinnerEffect">
          <div className="WinnerEffectContent">
            <span>
              Player { status.winner } Wins!
            </span>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  };

  return (
    renderWinnerEffect()
  );
}

export default WinnerEffect;
