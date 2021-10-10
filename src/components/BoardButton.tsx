import React from 'react';

interface BoardButtonProps {
  keyPos: string,
  who: number,
  clicked: boolean,
  winnerExists: boolean,
  tracked: boolean
}

const classNames: string[][] = [
  ['LeftTopCorner', 'TopEdge', 'RightTopCorner'],
  ['LeftEdge', 'InBoard', 'RightEdge'],
  ['LeftBottomCorner', 'BottomEdge', 'RightBottomCorner']
];

function BoardButton(props: BoardButtonProps) {
  const [row, col] = props.keyPos.split(',').map((item) => parseInt(item));
  const rPos = (row === 0) ? 0 : ((row === 18) ? 2 : 1);
  const cPos = (col === 0) ? 0 : ((col === 18) ? 2 : 1);
  const finalClassName = classNames[rPos][cPos];

  const winningTracked = props.tracked ? 'TrackedResult' : '';

  return (
    <button
      className={`BoardButton Player${props.who} ${finalClassName} ${winningTracked}`}
      key={props.keyPos}
      id={props.keyPos}
      disabled={props.clicked || props.winnerExists}
    >
      { props.who !== 0 ? (props.who === 1 ? '⚫' : '⚪') : '' }
    </button>
  );
}

export default BoardButton;
