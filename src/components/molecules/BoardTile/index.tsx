import React from 'react';

import BoardButton from '^/components/atoms/BoardButton';
import { themeButtons } from '^/theme';
import * as T from '^/types';
import useBoardStore from '^/store/board';
import useModeStore from '^/store/mode';

const getPosition: (row: number, col: number) => T.ButtonPosition = (row, col) => {
  let finalRow: number = 1;
  switch (row) {
    case T.Edges.TopEdge:
      finalRow = 0;
      break;
    case T.Edges.BottomEdge:
      finalRow = 2;
      break;
    default:
  }

  let finalCol: number = 1;
  switch (col) {
    case T.Edges.LeftEdge:
      finalCol = 0;
      break;
    case T.Edges.RightEdge:
      finalCol = 2;
      break;
    default:
  }

  const finalIndex = finalRow * 3 + finalCol;
  return T.ButtonPositionIndex[finalIndex];
};

const getStone: (who?: T.Player) => string = (who) => {
  switch (who) {
    case T.Player.PLAYER1: case T.Player.PLAYER2:
      return themeButtons[who - 1];
    default:
      return '❌';
  }
};

interface Props {
  readonly row: number;
  readonly col: number;
  readonly onClick: (row: number, col: number) => void;
}

function BoardTile({ row, col, onClick }: Props) {
  const position: T.ButtonPosition = getPosition(row, col);

  const whoPut = useBoardStore((state) => state.tiles[row][col]);
  const winner = useBoardStore((state) => state.winner);
  const winningTracks = useBoardStore((state) => state.winningTracks);
  const mode = useModeStore((state) => state.mode);

  const stone: string = getStone(whoPut);

  const isPut: boolean = whoPut !== T.Player.NONE;
  const isAvailable: boolean = mode === T.AppMode.GAME && winner === T.Player.NONE && !isPut;
  const isDisabled: boolean = !isAvailable;
  const isTracked: boolean = winningTracks.has(`[${row},${col}]`);

  const onClickTile: () => void = () => {
    onClick(row, col);
  };

  return (
    <BoardButton
      position={position}
      put={isPut}
      flash={isTracked}
      disabled={isDisabled}
      onClick={onClickTile}
    >
      { stone }
    </BoardButton>
  );
}

export default BoardTile;
