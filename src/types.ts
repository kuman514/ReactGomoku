export enum ButtonPosition {
  LeftTopCorner = 'LEFT_TOP_CORNER',
  TopEdge = 'TOP_EDGE',
  RightTopCorner = 'RIGHT_TOP_CORNER',
  LeftEdge = 'LEFT_EDGE',
  InBoard = 'INBOARD',
  RightEdge = 'RIGHT_EDGE',
  LeftBottomCorner = 'LEFT_BOTTOM_CORNER',
  BottomEdge = 'BOTTOM_EDGE',
  RightBottomCorner = 'RIGHT_BOTTOM_CORNER',
}

export const ButtonPositionIndex = [
  ButtonPosition.LeftTopCorner,
  ButtonPosition.TopEdge,
  ButtonPosition.RightTopCorner,
  ButtonPosition.LeftEdge,
  ButtonPosition.InBoard,
  ButtonPosition.RightEdge,
  ButtonPosition.LeftBottomCorner,
  ButtonPosition.BottomEdge,
  ButtonPosition.RightBottomCorner,
];

export type ButtonBackgroundUrls = Record<ButtonPosition, string>;

export enum Edges {
  LeftEdge = 0,
  RightEdge = 18,
  TopEdge = 0,
  BottomEdge = 18,
}

export enum AppMode {
  GAME = 'GAME',
  REPLAY = 'REPLAY',
}

export enum Player {
  NONE = 0,
  PLAYER1 = 1,
  PLAYER2 = 2,
}

export enum ActionKey {
  PUT = 'PUT',
  UNDO = 'UNDO',
  RESET = 'RESET',
  MODECHANGE = 'MODECHANGE',
}

export enum Month {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11,
}

export enum ThemeIndex {
  DEFAULT = 'default',
  HALLOWEEN = 'halloween',
  WINTER = 'winter',
}
