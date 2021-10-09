import React from 'react';

interface BoardButtonProps {
  keyPos: string,
  who: number,
  clicked: boolean
}

function BoardButton(props: BoardButtonProps) {
  return (
    <button
      className="BoardButton"
      key={props.keyPos}
      id={props.keyPos}
      disabled={props.clicked}
    >
      { props.who }
    </button>
  );
}

export default BoardButton;
