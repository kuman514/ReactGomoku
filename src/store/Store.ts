import { createStore } from 'redux';
import { StoreState } from './StoreState';
import { StoreActions } from './StoreActions';
import {
  putStone,
  undo,
  resetBoard,
  isAvailableMode
} from './StoreProcess';

const initState: StoreState = {
  mode: 'GAME',
  tiles: Array.from({length: 19}, () => Array.from({length: 19}, () => 0)),
  curPlayer: 1,
  history: Array<number[]>(),
  winner: 0,
  winningTracks: Array<number[]>()
};

export const store = createStore((state: StoreState = initState, action: StoreActions) => {
  /*
    1. PUT TYPE ACTION (coords: [row, col])
      - Put a tile into new coords
      - Push coords as an element in history
      - Check winner and winningTracks
      - Switch player
    2. UNDO TYPE ACTION
      - If there's no history, stop this process
      - Clear a tile in coords of the top element in history
      - Pop the top element in history
      - Switch player
      - Revoke winner and winningTracks
    3. RESET TYPE ACTION - Resets the whole board
      - Clear all the tiles
      - Set curPlayer to 1
      - Clear history
      - Set winner to 0
      - Clear winningTracks
    4. MODECHANGE TYPE ACTION (mode: 'GAME' or 'REPLAY')
      - Mode change resets the whole board
  */
  switch (action.type) {
    case 'PUT':
      return putStone(state, action.payload[0], action.payload[1]);
    case 'UNDO':
      return undo(state);
    case 'RESET':
      return resetBoard(state);
    case 'MODECHANGE':
      return {
        ...resetBoard(state),
        mode: isAvailableMode(action.payload) ? action.payload : state.mode
      };
    default:
      return state;
  }
});
