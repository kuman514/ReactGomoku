import React from 'react';

interface BoardButtonProps {
  keyPos: string,
  who: number,
  clicked: boolean,
  winnerExists: boolean
}

function BoardButton(props: BoardButtonProps) {
  return (
    <button
      className={`BoardButton Player${props.who}`}
      key={props.keyPos}
      id={props.keyPos}
      disabled={props.clicked || props.winnerExists}
    >
      { props.who !== 0 ? '●' : '' }
    </button>
  );
}

export default BoardButton;
