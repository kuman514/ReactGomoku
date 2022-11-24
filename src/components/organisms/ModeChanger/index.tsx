import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ModeSelector from 'components/molecules/ModeSelector';
import { ActionKey, AppMode } from 'types';

const ModeChangerElement = styled.div`
  & * {
    display: inline;
  }
`;

function ModeChanger() {
  const dispatch = useDispatch();

  return (
    <ModeChangerElement
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: ActionKey.MODECHANGE,
          payload: event.target.value,
        });
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
