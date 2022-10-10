import { Action } from 'redux';
import { AppMode } from 'types';

// PUT
class PutTileAction implements Action {
  readonly type = 'PUT';
  constructor(public payload: number[]) {}
}

// UNDO
class UndoAction implements Action {
  readonly type = 'UNDO';
}

// RESET
class ResetAction implements Action {
  readonly type = 'RESET';
}

// MODECHANGE
class ModeChangeAction implements Action {
  readonly type = 'MODECHANGE';
  constructor(public payload: AppMode) {}
}

export type StoreActions =
  | PutTileAction
  | UndoAction
  | ResetAction
  | ModeChangeAction;
