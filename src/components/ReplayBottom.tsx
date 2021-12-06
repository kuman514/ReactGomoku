import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ReplayBottom() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    history: Array<number[]>(),
    curTrack: 0,
    maxTrack: 0
  });

  const loadReplay = (files: FileList): void => {
    if (files.length <= 0) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const result = JSON.parse(reader.result as string);

      if (result.width !== 19 || result.height !== 19) {
        return;
      }

      if (result.history === null || result.history === undefined) {
        return;
      }
      
      dispatch({ type: 'RESET' });
      setStatus({
        history: result.history,
        curTrack: 0,
        maxTrack: result.history.length
      });
    });

    reader.readAsText(files[0]);
  };

  const onClickPrev = (): void => {
    if (status.curTrack <= 0) {
      return;
    }

    dispatch({ type: 'UNDO' });
    setStatus({
      history: status.history,
      curTrack: status.curTrack - 1,
      maxTrack: status.history.length
    });
  };

  const onClickNext = () => {
    if (status.curTrack >= status.maxTrack) {
      return;
    }

    dispatch({
      type: 'PUT',
      payload: status.history[status.curTrack]
    });

    setStatus({
      history: status.history,
      curTrack: status.curTrack + 1,
      maxTrack: status.history.length
    });
  };

  return (
    <div className="Bottom">
      <label>Replay File: </label>
      <input
        type="file"
        accept="application/json"
        onChange={(event) => {
          if ((event.target as HTMLInputElement).files) {
            loadReplay((event.target as HTMLInputElement).files as FileList);
          }
        }
      }/>
      <button onClick={onClickPrev}>
        Prev
      </button>
      {
        `${status.curTrack} / ${status.maxTrack}`
      }
      <button onClick={onClickNext}>
        Next
      </button>
    </div>
  );
}

export default ReplayBottom;
