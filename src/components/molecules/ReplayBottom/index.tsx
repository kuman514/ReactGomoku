/* eslint-disable jsx-a11y/label-has-associated-control */
import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BottomButtonElement from '^/components/atoms/BottomButtonElement';
import useBoardStore from '^/store/board';

function ReplayBottom() {
  const { put, undo, reset } = useBoardStore();
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

  useEffect(() => {
    document.title = `React Gomoku :: Replay Mode - ${status.curTrack} / ${status.maxTrack}`;
  });

  return (
    <>
      <label>Replay File: </label>
      <Input
        type="file"
        accept="application/json"
        onChange={(event) => {
          if (event.target.files) {
            loadReplay(event.target.files);
          }
        }}
        style={{
          width: '35%',
        }}
      />
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
