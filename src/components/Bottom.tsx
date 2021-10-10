import React from 'react';

interface BottomProps {
  info?: string,
  onClickUndo: Function,
  onClickReset: Function
}

function Bottom(props: BottomProps) {
  return (
    <div className="Bottom">
      {
        (props.info && props.info !== '') ?
        <div> { props.info } </div> :
        ''
      }
      <button onClick={() => {props.onClickUndo()}}>
        Undo
      </button>
      <button onClick={() => {props.onClickReset()}}>
        Reset
      </button>
    </div>
  );
}

export default Bottom;
