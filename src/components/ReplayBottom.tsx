import React from 'react';

interface ReplayBottomProps {
  curTrack: number,
  maxTrack: number,
  onClickPrev: Function,
  onClickNext: Function
}

function ReplayBottom(props: ReplayBottomProps) {
  return (
    <div className="Bottom">
      <button onClick={() => {props.onClickPrev()}}>
        Prev
      </button>
      {
        `${props.curTrack} / ${props.maxTrack}`
      }
      <button onClick={() => {props.onClickNext()}}>
        Next
      </button>
    </div>
  );
}

export default ReplayBottom;
