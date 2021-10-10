import React from 'react';

interface BottomProps {
  onClick: Function
}

function Bottom(props: BottomProps) {
  return (
    <div className="Bottom">
      <button onClick={() => {props.onClick()}}>
        Reset
      </button>
    </div>
  );
}

export default Bottom;
