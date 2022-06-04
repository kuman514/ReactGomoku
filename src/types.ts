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
};
export type ButtonBackgroundUrls = Record<ButtonPosition, string>;
