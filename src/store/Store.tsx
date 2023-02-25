import { createStore } from 'redux';

import { ActionKey } from '^/types';

import { StoreState, initState } from './StoreState';
import { StoreActions } from './StoreActions';
import {
  putStone,
  undo,
  resetBoard,
  isAvailableMode,
} from './StoreProcess';

// eslint-disable-next-line default-param-last
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
    4. MODECHANGE TYPE ACTION (mode: AppMode)
      - Mode change resets the whole board
  */
  switch (action.type) {
    case ActionKey.PUT:
      return putStone(state, action.payload[0], action.payload[1]);
    case ActionKey.UNDO:
      return undo(state);
    case ActionKey.RESET:
      return resetBoard(state);
    case ActionKey.MODECHANGE:
      return {
        ...resetBoard(state),
        mode: isAvailableMode(action.payload) ? action.payload : state.mode,
      };
    default:
      return state;
  }
});
