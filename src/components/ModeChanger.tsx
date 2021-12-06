import React from 'react';
import { useDispatch } from 'react-redux';

function ModeCahnger() {
  const dispatch = useDispatch();

  return (
    <div className="ModeChanger" onChange={(event) => {
      dispatch({
        type: 'MODECHANGE',
        payload: (event.target as HTMLInputElement).value
      });
    }}>
      <input type="radio" id="game" name="mode" value="GAME" defaultChecked />
      <label>Game</label>
      <input type="radio" id="replay" name="mode" value="REPLAY" />
      <label>Replay</label>
    </div>
  );
}

export default ModeCahnger;
