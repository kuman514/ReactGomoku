import React, { useEffect, useState } from 'react';
import BottomButtonElement from '^/components/atoms/BottomButtonElement';
import useBoardStore from '^/store/board';

function ReplayBottom() {
  const put = useBoardStore((state) => state.put);
  const undo = useBoardStore((state) => state.undo);
  const reset = useBoardStore((state) => state.reset);

  const [status, setStatus] = useState({
    history: Array<number[]>(),
    curTrack: 0,
    maxTrack: 0,
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

      reset();
      setStatus({
        history: result.history,
        curTrack: 0,
        maxTrack: result.history.length,
      });
    });

    reader.readAsText(files[0]);
  };

  const onClickPrev = (): void => {
    if (status.curTrack <= 0) {
      return;
    }

    undo();
    setStatus({
      history: status.history,
      curTrack: status.curTrack - 1,
      maxTrack: status.history.length,
    });
  };

  const onClickNext = () => {
    if (status.curTrack >= status.maxTrack) {
      return;
    }

    put(status.history[status.curTrack]);

    setStatus({
      history: status.history,
      curTrack: status.curTrack + 1,
      maxTrack: status.history.length,
    });
  };

  const handleOnClickLoadReplay: () => void = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/json';
    fileInput.addEventListener('change', (event: Event) => {
      if (event.target instanceof HTMLInputElement) {
        const { files } = event.target;
        if (!files || files.length <= 0) {
          return;
        }
        loadReplay(files);
      }
    });

    fileInput.click();
  };

  useEffect(() => {
    document.title = `React Gomoku :: Replay Mode - ${status.curTrack} / ${status.maxTrack}`;
  });

  return (
    <>
      <BottomButtonElement onClick={handleOnClickLoadReplay}>
        Load Replay
      </BottomButtonElement>
      <BottomButtonElement onClick={onClickPrev}>
        Prev
      </BottomButtonElement>
      {
        `${status.curTrack} / ${status.maxTrack}`
      }
      <BottomButtonElement onClick={onClickNext}>
        Next
      </BottomButtonElement>
    </>
  );
}

export default ReplayBottom;
