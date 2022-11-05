import { StoreState } from './StoreState';
import { playSFX } from '../sfxs/SoundEffects';
import { AppMode, Player } from 'types';

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
}

function getNewTiles(status: StoreState, row: number, col: number, player: Player): Player[][] {
  const newTiles = Array.from({ length: HEIGHT }, (_, i) => Array.from(status.tiles[i]));
  newTiles[row][col] = player;
  return newTiles;
}

function getNewPlayer(curPlayer: Player): Player {
  switch (curPlayer) {
    case Player.PLAYER1:
      return Player.PLAYER2;
    case Player.PLAYER2:
      return Player.PLAYER1;
    default:
      return 0;
  }
}

function checkWinner(row: number, col: number, newTiles: Player[][]): [Player, number[][]] {
  const winner: Player = newTiles[row][col];

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

  return [Player.NONE, []];
}

export function putStone(status: StoreState, row: number, col: number): StoreState {
  if (status.tiles[row][col] !== Player.NONE) {
    return status;
  }

  const newTiles: Player[][] = getNewTiles(status, row, col, status.curPlayer);
  const newPlayer: Player = getNewPlayer(status.curPlayer);

  const [winner, winningTracks] = checkWinner(row, col, newTiles);

  const newHistory = Array.from(status.history);
  newHistory.push([row, col]);

  const newScore = Array.from(status.score);

  if (winner !== 0) {
    playSFX('RESULT');
    if (status.mode === AppMode.GAME) {
      newScore[winner - 1]++;
    }
  } else {
    playSFX(`P${status.curPlayer}PUT`);
  }

  return {
    ...status,
    tiles: newTiles,
    curPlayer: newPlayer,
    history: newHistory,
    winner,
    winningTracks: new Set<string>(
      winningTracks.map((item) => `[${item[0]},${item[1]}]`),
    ),
    score: newScore,
  };
}

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

  const newTiles: Player[][] = getNewTiles(status, row, col, EMPTY);
  const newPlayer: Player = getNewPlayer(status.curPlayer);

  playSFX('UNDO');

  return {
    ...status,
    tiles: newTiles,
    curPlayer: newPlayer,
    history: newHistory,
    winner: EMPTY,
    winningTracks: new Set<string>(),
  };
}

export function resetBoard(status: StoreState): StoreState {
  playSFX('RESET');

  return {
    ...status,
    tiles: Array.from({ length: HEIGHT }, () => Array.from({ length: WIDTH }, () => Player.NONE)),
    curPlayer: Player.PLAYER1,
    // eslint-disable-next-line no-array-constructor
    history: Array<number[]>(),
    winner: Player.NONE,
    winningTracks: new Set<string>(),
  };
}

export function isAvailableMode(modeName: string) {
  switch (modeName) {
    case AppMode.GAME: case AppMode.REPLAY:
      return true;
    default:
      return false;
  }
}
