import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState, initState } from '../store/StoreState';
import styles from './BoardButton.module.css';

interface BoardButtonProps {
  keyPos: string,
  theme: string[]
}

interface BoardButtonState {
  who: number,
  available: boolean,
  winningTracked: boolean
}

const classNames: string[][] = [
  [styles.LeftTopCorner, styles.TopEdge, styles.RightTopCorner],
  [styles.LeftEdge, styles.InBoard, styles.RightEdge],
  [styles.LeftBottomCorner, styles.BottomEdge, styles.RightBottomCorner]
];

function BoardButton(props: BoardButtonProps) {
  const [row, col] = props.keyPos.split(',').map((item) => parseInt(item));
  const rPos = (row === 0) ? 0 : ((row === 18) ? 2 : 1);
  const cPos = (col === 0) ? 0 : ((col === 18) ? 2 : 1);
  const selector = (state: StoreState = initState): BoardButtonState => {
    return {
      who: state.tiles[row][col],
      available: (state.mode === 'GAME') && (state.winner === 0) && (state.tiles[row][col] === 0),
      winningTracked: state.winningTracks.has(`[${row},${col}]`)
    };
  }
  const buttonStatus = useSelector(selector);
  const playerType: string = (buttonStatus.who !== 0) ? (buttonStatus.who === 1 ? styles.Player1 : styles.Player2) : styles.Player0;
  const finalClassName: string = classNames[rPos][cPos];
  const winningTracked: string = buttonStatus.winningTracked ? styles.TrackedResult : '';

  return (
    <button
      className={`${styles.BoardButton} ${playerType} ${finalClassName} ${winningTracked}`}
      key={props.keyPos}
      id={props.keyPos}
      disabled={!buttonStatus.available}
    >
      { buttonStatus.who !== 0 ? (props.theme[buttonStatus.who - 1]) : '🔴' }
    </button>
  );
}

export default BoardButton;
