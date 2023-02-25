/* eslint-disable max-classes-per-file */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */

import { Action } from 'redux';

import { AppMode, ActionKey } from '^/types';

// PUT
class PutTileAction implements Action {
  readonly type = ActionKey.PUT;
  constructor(public payload: number[]) {}
}

// UNDO
class UndoAction implements Action {
  readonly type = ActionKey.UNDO;
}

// RESET
class ResetAction implements Action {
  readonly type = ActionKey.RESET;
}

// MODECHANGE
class ModeChangeAction implements Action {
  readonly type = ActionKey.MODECHANGE;
  constructor(public payload: AppMode) {}
}

export type StoreActions =
  | PutTileAction
  | UndoAction
  | ResetAction
  | ModeChangeAction;
