export interface StoreState {
  mode: string,
  tiles: number[][],
  curPlayer: number,
  history: number[][],
  winner: number,
  winningTracks: number[][]
};
