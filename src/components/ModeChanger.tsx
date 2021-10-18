import React from 'react';

interface ModeChangerProps {
  onChangeMode: Function
}

function ModeCahnger(props: ModeChangerProps) {
  return (
    <div className="ModeChanger" onChange={(event) => {
      props.onChangeMode((event.target as HTMLInputElement).value);
    }}>
      <input type="radio" id="game" name="mode" value="game" defaultChecked />
      <label>Game Mode</label>
      <input type="radio" id="replay" name="mode" value="replay" />
      <label>Replay</label>
    </div>
  );
}

export default ModeCahnger;
