import create from 'zustand';

import { playSFX } from '^/sfxs/SoundEffects';
import { Player } from '^/types';

const EMPTY: number = 0;
const WIDTH: number = 19;
const HEIGHT: number = 19;
const OBJECTIVE: number = 5;
const COL_BOUNDARY: number = WIDTH - 1;
const ROW_BOUNDARY: number = HEIGHT - 1;

export interface BoardStore {
  tiles: Player[][];
  curPlayer: Player;
  history: number[][];
  winner: Player;
  winningTracks: Set<string>;
  score: number[];
}

export interface BoardAction {
  put: (coords: number[]) => void;
  undo: () => void;
  reset: () => void;
}

function getInitState(): BoardStore {
  return {
    tiles: Array.from({ length: 19 }, () => Array.from({ length: 19 }, () => Player.NONE)),
    curPlayer: Player.PLAYER1,
    history: new Array<number[]>(),
    winner: Player.NONE,
    winningTracks: new Set<string>(),
    score: [0, 0],
  };
}

function isInRange(row: number, col: number): boolean {
  if (row < 0 || row > ROW_BOUNDARY || col < 0 || col > COL_BOUNDARY) {
    return false;
  }
  return true;
}

function getNewTiles(status: BoardStore, row: number, col: number, player: Player): Player[][] {
  const newTiles = Array.from({ length: HEIGHT }, (_, i) => Array.from(status.tiles[i]));
  newTiles[row][col] = player;
  return newTiles as Player[][];
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

const boardStore = create<BoardStore & BoardAction>((set) => ({
  ...getInitState(),
  put: ([row, col]: number[]) => set((status) => {
    if (status.tiles[row][col] !== Player.NONE) {
      return status;
    }

    const newTiles: Player[][] = getNewTiles(status, row, col, status.curPlayer);
    const newPlayer: Player = getNewPlayer(status.curPlayer);

    const [winner, winningTracks] = checkWinner(row, col, newTiles);

    const newHistory = Array.from(status.history);
    newHistory.push([row, col]);

    const newScore = Array.from(status.score);

    if (winner !== EMPTY) {
      playSFX('RESULT');
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
  }),
  undo: () => set((status) => {
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
  }),
  reset: () => set((status) => {
    playSFX('RESET');
    return {
      ...status,
      ...getInitState(),
    };
  }),
}));

export default boardStore;
