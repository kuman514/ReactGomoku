import React from 'react';
import styled from 'styled-components';

import ReplayBottom from '^/components/molecules/ReplayBottom';
import { AppMode } from '^/types';
import GameBottom from '^/components/molecules/GameBottom';
import useModeStore from '^/store/mode';

const BottomElement = styled.div`
  display: flex;
  justify-content: center;

  box-sizing: border-box;
  height: calc(10px + 3.1vmin);
`;

function BottomType(mode: AppMode) {
  switch (mode) {
    case AppMode.GAME:
      return (
        <GameBottom />
      );
    case AppMode.REPLAY:
      return (
        <ReplayBottom />
      );
    default:
      return null;
  }
}

function Bottom() {
  const { mode } = useModeStore();
  return (
    <BottomElement>
      {BottomType(mode)}
    </BottomElement>
  );
}

export default Bottom;
