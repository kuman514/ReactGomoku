import BoardButton from 'components/atoms/BoardButton';
import { themeButtons } from 'theme/Theme';

import * as T from 'types';
import { StoreState } from 'store/StoreState';
import { useSelector } from 'react-redux';

interface BoardTileProps {
  readonly row: number;
  readonly col: number;
  readonly onClick: (row: number, col: number) => void;
}

const getPosition: (row: number, col: number) => T.ButtonPosition = (row, col) => {
  let finalRow: number = 1;
  switch (row) {
    case T.Edges.TopEdge:
      finalRow = 0;
      break;
    case T.Edges.BottomEdge:
      finalRow = 2;
      break;
  }

  let finalCol: number = 1;
  switch (col) {
    case T.Edges.LeftEdge:
      finalCol = 0;
      break;
    case T.Edges.RightEdge:
      finalCol = 2;
      break;
  }

  const finalIndex = finalRow * 3 + finalCol;
  return T.ButtonPositionIndex[finalIndex];
}

const getStone: (who?: T.Player) => string = (who) => {
  switch (who) {
    case T.Player.PLAYER1: case T.Player.PLAYER2:
      return themeButtons[who - 1];
    default:
      return '❌';
  }
};

function BoardTile({ row, col, onClick }: BoardTileProps) {
  const position: T.ButtonPosition = getPosition(row, col);

  const whoPutSelector: (state: StoreState) => T.Player = (state) => {
    return state.tiles[row][col];
  };
  const whoPut: T.Player = useSelector(whoPutSelector);
  const stone: string = getStone(whoPut);

  const isPutSelector: (state: StoreState) => boolean = (state) => {
    if (state.tiles[row][col] === T.Player.NONE) return false;

    return true;
  };
  const isPut: boolean = useSelector(isPutSelector);

  const isAvailableSelector: (state: StoreState) => boolean = (state) => {
    if (state.mode !== T.AppMode.GAME) return false;

    if (state.winner !== T.Player.NONE) return false;

    if (state.tiles[row][col] !== T.Player.NONE) return false;

    return true;
  };
  const isAvailable: boolean = useSelector(isAvailableSelector);
  const isDisabled: boolean = !isAvailable;

  const isTrackedSelector: (state: StoreState) => boolean = (state) => {
    return state.winningTracks.has(`[${row},${col}]`);
  };
  const isTracked: boolean = useSelector(isTrackedSelector);

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
