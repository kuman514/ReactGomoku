import React from 'react';

interface BottomProps {
  info?: string,
  onClick: Function
}

function Bottom(props: BottomProps) {
  return (
    <div className="Bottom">
      {
        (props.info && props.info !== '') ?
        <div> { props.info } </div> :
        ''
      }
      <button onClick={() => {props.onClick()}}>
        Reset
      </button>
    </div>
  );
}

export default Bottom;
