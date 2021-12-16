export interface StoreState {
  mode: string,
  tiles: number[][],
  curPlayer: number,
  history: number[][],
  winner: number,
  winningTracks: Set<string>,
  score: number[]
};

export const initState: StoreState = {
  mode: 'GAME',
  tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
  curPlayer: 1,
  history: new Array<number[]>(),
  winner: 0,
  winningTracks: new Set<string>(),
  score: [0, 0]
};
