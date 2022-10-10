import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { store } from 'store/Store';
import { StoreState, initState } from 'store/StoreState';
import Score from 'components/atoms/Score';
import ReplayBottom from 'components/molecules/ReplayBottom';
import { AppMode } from 'types';

interface BottomState {
  mode: AppMode;
}

const BottomElement = styled.div`
  & * {
    display: inline;
  }
`;

const BottomButtonElement = styled.button`
  all: unset;
  background-color: gray;
  margin-top: 1vh;
  margin-left: 0.25vw;
  margin-right: 0.25vw;
  padding-left: 0.25vw;
  padding-right: 0.25vw;

  &:hover {
    background-color: #61dafb;
    cursor: pointer;
  }
`;

function BottomType(mode: AppMode) {
  const dispatch = useDispatch();
  switch (mode) {
    case AppMode.GAME:
      return (
        <>
          <Score />
          <BottomButtonElement onClick={() => {
            dispatch({ type: 'UNDO' });
          }}>
            Undo
          </BottomButtonElement>
          <BottomButtonElement onClick={() => {
            dispatch({ type: 'RESET' });
          }}>
            Reset
          </BottomButtonElement>
          <BottomButtonElement onClick={() => {
            const status: StoreState = store.getState();

            const replayData = {
              width: 19,
              height: 19,
              history: status.history
            };

            const file: HTMLAnchorElement = document.createElement('a');
            const fileBlob: Blob = new Blob([JSON.stringify(replayData)], {type: 'json'});
            file.href = URL.createObjectURL(fileBlob);
            file.download = 'replay.json';
            file.click();
          }}>
            Save As Replay
          </BottomButtonElement>
        </>
      );
    case AppMode.REPLAY:
      return (
        <ReplayBottom />
      );
    default:
      return null;
  }
}

function Bottom() {
  const selector = (state: StoreState = initState): BottomState => {
    return {
      mode: state.mode
    };
  };
  const status = useSelector(selector);

  return (
    <BottomElement>
      {BottomType(status.mode)}
    </BottomElement>
  );
}

export default Bottom;
