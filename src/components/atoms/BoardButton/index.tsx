import styled from 'styled-components';

import LeftTopCorner from 'Img/LeftTopCorner.png';
import TopEdge from 'Img/TopEdge.png';
import RightTopCorner from 'Img/RightTopCorner.png';
import LeftEdge from 'Img/LeftEdge.png';
import InBoard from 'Img/InBoard.png';
import RightEdge from 'Img/RightEdge.png';
import LeftBottomCorner from 'Img/LeftBottomCorner.png';
import BottomEdge from 'Img/BottomEdge.png';
import RightBottomCorner from 'Img/RightBottomCorner.png';

import * as T from 'types';

interface BoardButtonStyleProps {
  position: T.ButtonPosition;
  put?: boolean;
  flash?: boolean;
}

export const urls: T.ButtonBackgroundUrls = {
  [T.ButtonPosition.LeftTopCorner]: LeftTopCorner,
  [T.ButtonPosition.TopEdge]: TopEdge,
  [T.ButtonPosition.RightTopCorner]: RightTopCorner,
  [T.ButtonPosition.LeftEdge]: LeftEdge,
  [T.ButtonPosition.InBoard]: InBoard,
  [T.ButtonPosition.RightEdge]: RightEdge,
  [T.ButtonPosition.LeftBottomCorner]: LeftBottomCorner,
  [T.ButtonPosition.BottomEdge]: BottomEdge,
  [T.ButtonPosition.RightBottomCorner]: RightBottomCorner,
};

const BoardButton = styled.button`
  all: unset;
  box-sizing: border-box;
  margin: 0;
  background-size: 100%;
  color: ${(props: BoardButtonStyleProps) => props.put ? '#000000' : 'transparent'};
  background-image: url(${(props: BoardButtonStyleProps) => urls[props.position]});

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:focus {
    border: 3px solid red;
  }

  animation: ${(props: BoardButtonStyleProps) => props.flash
    ? 'FlashTrackedResult linear infinite 600ms'
    : 'none'
  };
  @keyframes FlashTrackedResult {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default BoardButton;
