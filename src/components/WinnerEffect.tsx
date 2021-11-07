import React from 'react';

interface WinnerEffectProps {
  winner: number
}

function WinnerEffect(props: WinnerEffectProps) {
  return (
    <div className="WinnerEffect">
      <div className="WinnerEffectContent">
        <span>
          Player { props.winner } Wins!
        </span>
      </div>
    </div>
  );
}

export default WinnerEffect;
