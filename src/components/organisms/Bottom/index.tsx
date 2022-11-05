/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StoreState } from 'store/StoreState';
import ReplayBottom from 'components/molecules/ReplayBottom';
import { AppMode } from 'types';
import GameBottom from 'components/molecules/GameBottom';

const BottomElement = styled.div`
  & * {
    display: inline;
  }
`;

function BottomType(mode: AppMode) {
  switch (mode) {
    case AppMode.GAME:
      return (
        <GameBottom />
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
  const modeSelector: (state: StoreState) => AppMode = ({ mode }) => mode;
  const mode: AppMode = useSelector(modeSelector);

  return (
    <BottomElement>
      {BottomType(mode)}
    </BottomElement>
  );
}

export default Bottom;
