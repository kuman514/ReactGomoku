import { StoreState } from './StoreState';

const EMPTY: number = 0;
const WIDTH: number = 19;
const HEIGHT: number = 19;
const OBJECTIVE: number = 5;
const COL_BOUNDARY: number = WIDTH - 1;
const ROW_BOUNDARY: number = HEIGHT - 1;

function isInRange(row: number, col: number): boolean {
  if (row < 0 || row > ROW_BOUNDARY || col < 0 || col > COL_BOUNDARY) {
    return false;
  }
  return true;
};

function getNewTiles(status: StoreState, row: number, col: number, player: number): number[][] {
  const newTiles = Array.from({length: HEIGHT}, (_, i) => Array.from(status.tiles[i]));
  newTiles[row][col] = player;
  return newTiles;
};

function getNewPlayer(curPlayer: number): number {
  switch (curPlayer) {
    case 1:
      return 2;
    case 2:
      return 1;
    default:
      return 0;
  }
};

function checkWinner(row: number, col: number, newTiles: number[][]): [number, number[][]] {
  const winner: number = newTiles[row][col];

  const directions: number[][] = [[1, 0], [0, 1], [1, 1], [1, -1]];
  for (let n: number = 0; n < directions.length; n++) {
    const [rDir, cDir] = directions[n];
    const collected: number[][] = [[row, col]];

    let [curRow, curCol] = [row + rDir, col + cDir];
    while (isInRange(curRow, curCol) && newTiles[curRow][curCol] === winner) {
      collected.push([curRow, curCol]);
      curRow += rDir;
      curCol += cDir;
    }

    [curRow, curCol] = [row - rDir, col - cDir];
    while (isInRange(curRow, curCol) && newTiles[curRow][curCol] === winner) {
      collected.push([curRow, curCol]);
      curRow -= rDir;
      curCol -= cDir;
    }

    if (collected.length === OBJECTIVE) {
      return [winner, collected];
    }
  }

  return [0, []];
};

export function putStone(status: StoreState, row: number, col: number): StoreState {
  if (status.tiles[row][col] !== 0) {
    return status;
  }

  const newTiles: number[][] = getNewTiles(status, row, col, status.curPlayer);
  const newPlayer: number = getNewPlayer(status.curPlayer);

  const [winner, winningTracks] = checkWinner(row, col, newTiles);

  const newHistory = Array.from(status.history);
  newHistory.push([row, col]);

  return {
    ...status,
    tiles: newTiles,
    curPlayer: newPlayer,
    history: newHistory,
    winner: winner,
    winningTracks: winningTracks
  };
};

export function undo(status: StoreState): StoreState {
  if (status.history.length === 0) {
    return status;
  }

  const newHistory = Array.from(status.history);
  const tmp: number[] | undefined = newHistory.pop();

  if (tmp === undefined) {
    return status;
  }

  const [row, col] = tmp;
  if (!isInRange(row, col)) {
    return status;
  }

  const newTiles: number[][] = getNewTiles(status, row, col, EMPTY);
  const newPlayer: number = getNewPlayer(status.curPlayer);

  return {
    ...status,
    tiles: newTiles,
    curPlayer: newPlayer,
    history: newHistory,
    winner: EMPTY,
    winningTracks: Array<number[]>()
  };
};

export function resetBoard(status: StoreState): StoreState {
  return {
    ...status,
    tiles: Array.from({length: HEIGHT}, () => Array.from({length: WIDTH}, () => 0)),
    curPlayer: 1,
    history: Array<number[]>(),
    winner: 0,
    winningTracks: Array<number[]>()
  };
};

export function isAvailableMode(modeName: string) {
  switch (modeName) {
    case 'GAME': case 'REPLAY':
      return true;
    default:
      return false;
  }
}
