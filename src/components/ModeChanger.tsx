import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ModeChangerElement = styled.div`
  margin-left: 1vw;
  & * {
    display: inline;
  }
`;

function ModeChanger() {
  const dispatch = useDispatch();

  return (
    <ModeChangerElement onChange={(event) => {
      dispatch({
        type: 'MODECHANGE',
        payload: (event.target as HTMLInputElement).value
      });
    }}>
      <input type="radio" id="game" name="mode" value="GAME" defaultChecked />
      <label>Game</label>
      <input type="radio" id="replay" name="mode" value="REPLAY" />
      <label>Replay</label>
    </ModeChangerElement>
  );
}

export default ModeChanger;
