import { AppMode, Player } from 'types';

export interface StoreState {
  mode: AppMode;
  tiles: Player[][];
  curPlayer: Player;
  history: number[][];
  winner: Player;
  winningTracks: Set<string>;
  score: number[];
}

export const initState: StoreState = {
  mode: AppMode.GAME,
  tiles: Array.from({ length: 19 }, () => Array.from({ length: 19 }, () => Player.NONE)),
  curPlayer: Player.PLAYER1,
  // eslint-disable-next-line no-array-constructor
  history: new Array<number[]>(),
  winner: Player.NONE,
  winningTracks: new Set<string>(),
  score: [0, 0],
};
