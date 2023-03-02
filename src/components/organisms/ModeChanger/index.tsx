import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import ModeSelector from '^/components/molecules/ModeSelector';
import useBoardStore from '^/store/board';
import useModeStore from '^/store/mode';
import { AppMode } from '^/types';

const ModeChangerElement = styled.div`
  & * {
    display: inline;
  }
`;

function ModeChanger() {
  const { reset } = useBoardStore();
  const { changeMode } = useModeStore();

  return (
    <ModeChangerElement
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        if (
          event.target.value !== AppMode.GAME
          && event.target.value !== AppMode.REPLAY
        ) {
          return;
        }

        reset();
        changeMode(event.target.value);
      }}
    >
      <ModeSelector
        id="game"
        value={AppMode.GAME}
        defaultChecked
      >
        Game
      </ModeSelector>
      <ModeSelector
        id="replay"
        value={AppMode.REPLAY}
      >
        Replay
      </ModeSelector>
    </ModeChangerElement>
  );
}

export default ModeChanger;
