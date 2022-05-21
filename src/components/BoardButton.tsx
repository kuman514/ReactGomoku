import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState, initState } from '../store/StoreState';
import { themeButtons } from '../theme/Theme';
import styled from 'styled-components';

import LeftTopCorner from '../Img/LeftTopCorner.png';
import TopEdge from '../Img/TopEdge.png';
import RightTopCorner from '../Img/RightTopCorner.png';
import LeftEdge from '../Img/LeftEdge.png';
import InBoard from '../Img/InBoard.png';
import RightEdge from '../Img/RightEdge.png';
import LeftBottomCorner from '../Img/LeftBottomCorner.png';
import BottomEdge from '../Img/BottomEdge.png';
import RightBottomCorner from '../Img/RightBottomCorner.png';

interface BoardButtonProps {
  keyPos: string
}

interface BoardButtonStyleProps {
  player: number,
  position: number[]
}

interface BoardButtonState {
  who: number,
  available: boolean,
  winningTracked: boolean
}

const urls: string[] = [
  LeftTopCorner, TopEdge, RightTopCorner,
  LeftEdge, InBoard, RightEdge,
  LeftBottomCorner, BottomEdge, RightBottomCorner
];

const BoardButtonElement = styled.button`
  all: unset;
  box-sizing: border-box;
  margin: 0;
  background-size: 100%;
  color: ${(props: BoardButtonStyleProps) => {
    switch (props.player) {
      case 1:
        return 'black';
      case 2:
        return 'white';
      default:
        return 'transparent';
    }
  }};
  background-image: url(${(props: BoardButtonStyleProps) => {
    return urls[(3 * props.position[0]) + props.position[1]];
  }});

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:focus {
    border: 3px solid red;
  }
`;

const TrackedButtonElement = styled(BoardButtonElement)`
  animation: FlashTrackedResult linear infinite 600ms;
  @keyframes FlashTrackedResult {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

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
  if (buttonStatus.winningTracked) {
    return (
      <TrackedButtonElement
        player={buttonStatus.who}
        position={[rPos, cPos]}
        key={props.keyPos}
        id={props.keyPos}
        disabled={!buttonStatus.available}
      >
        { buttonStatus.who !== 0 ? (themeButtons[buttonStatus.who - 1]) : '🔴' }
      </TrackedButtonElement>
    );
  }
  return (
    <BoardButtonElement
      player={buttonStatus.who}
      position={[rPos, cPos]}
      key={props.keyPos}
      id={props.keyPos}
      disabled={!buttonStatus.available}
    >
      { buttonStatus.who !== 0 ? (themeButtons[buttonStatus.who - 1]) : '🔴' }
    </BoardButtonElement>
  );
}

export default BoardButton;
