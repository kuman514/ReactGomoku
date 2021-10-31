import React, { useState } from 'react';
import BoardButton from './BoardButton';
import ReplayBottom from './ReplayBottom';

interface ReplayBoardProps {
  player1PutSFX: HTMLAudioElement,
  player2PutSFX: HTMLAudioElement,
  undoSFX: HTMLAudioElement,
  resetSFX: HTMLAudioElement,
  resultSFX: HTMLAudioElement,
  themeButtons: string[]
}

const EMPTY: number = 0;
const WIDTH: number = 19;
const HEIGHT: number = 19;
const OBJECTIVE: number = 5;
const COL_BOUNDARY: number = WIDTH - 1;
const ROW_BOUNDARY: number = HEIGHT - 1;

function ReplayBoard(props: ReplayBoardProps) {
  // Using React hooks
  const [status, setStatus] = useState({
    tiles: Array.from({length: HEIGHT}, () => Array.from({length: WIDTH}, () => 0)),
    curPlayer: 1,
    currentTrack: 0,
    winner: 0,
    winningTracks: Array<number[]>(),
    history: Array<number[]>()
  });

  const stopSFX = (wav: HTMLAudioElement) => {
    if (wav) {
      wav.pause();
      wav.currentTime = 0;
    }
  };

  const initSFX = () => {
    stopSFX(props.player1PutSFX);
    stopSFX(props.player2PutSFX);
    stopSFX(props.undoSFX);
    stopSFX(props.resetSFX);
    stopSFX(props.resultSFX);
  };

  const playSFX = (wav: HTMLAudioElement) => {
    initSFX();
    if (wav) {
      wav.play();
    }
  };

  const isInRange = (row: number, col: number): boolean => {
    if (row < 0 || row > ROW_BOUNDARY || col < 0 || col > COL_BOUNDARY) {
      return false;
    }
    return true;
  };

  const getNewTiles = (row: number, col: number, player: number): number[][] => {
    const newTiles = Array.from({length: HEIGHT}, (_, i) => Array.from(status.tiles[i]));
    newTiles[row][col] = player;
    return newTiles;
  };

  const getNewPlayer = (curPlayer: number): number => {
    switch (curPlayer) {
      case 1:
        return 2;
      case 2:
        return 1;
      default:
        return 0;
    }
  };

  const next = () => {
    if (status.currentTrack >= status.history.length) {
      return;
    }

    const [row, col] = status.history[status.currentTrack];
    if (!isInRange(row, col)) {
      return;
    }

    const newTiles: number[][] = getNewTiles(row, col, status.curPlayer);
    const newPlayer: number = getNewPlayer(status.curPlayer);

    const [winner, winningTracks] = checkWinner(row, col, newTiles);

    if (winner !== 0) {
      playSFX(props.resultSFX);
    } else {
      switch (status.curPlayer) {
        case 1:
          playSFX(props.player1PutSFX);
          break;
        case 2:
          playSFX(props.player2PutSFX);
          break;
      }
    }

    const newTrack = status.currentTrack + 1;

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      currentTrack: newTrack,
      winner: winner,
      winningTracks: winningTracks,
      history: status.history
    });
  };

  const prev = () => {
    if (status.currentTrack <= 0) {
      return;
    }

    playSFX(props.undoSFX);

    const newTrack = status.currentTrack - 1;
    const [row, col] = status.history[newTrack];
    if (!isInRange(row, col)) {
      return;
    }

    const newTiles: number[][] = getNewTiles(row, col, EMPTY);
    const newPlayer: number = getNewPlayer(status.curPlayer);

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      currentTrack: newTrack,
      winner: 0,
      winningTracks: Array<number[]>(),
      history: status.history
    });
  };

  const checkWinner = (row: number, col: number, newTiles: number[][]): [number, number[][]] => {
    const winner: number = newTiles[row][col];

    const directions: number[][] = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (let n: number = 0; n < directions.length; n++) {
      const [rDir, cDir] = directions[n];
      const collected: number[][] = [[row, col]];

      let [curRow, curCol] = [row + rDir, col + cDir];
      while (isInRange(curRow, curCol) && newTiles[curRow][curCol] === winner) {
        collected.push([curRow, curCol]);
        curRow += rDir;
        curCol += cDir;
      }

      [curRow, curCol] = [row - rDir, col - cDir];
      while (isInRange(curRow, curCol) && newTiles[curRow][curCol] === winner) {
        collected.push([curRow, curCol]);
        curRow -= rDir;
        curCol -= cDir;
      }

      if (collected.length === OBJECTIVE) {
        return [winner, collected];
      }
    }

    return [0, []];
  };

  const loadReplay = (files: FileList) => {
    if (files.length <= 0) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const result = JSON.parse(reader.result as string);

      if (result.width !== WIDTH || result.height !== HEIGHT) {
        return;
      }

      if (result.history === null || result.history === undefined) {
        return;
      }

      setStatus({
        tiles: Array.from({length: HEIGHT}, () => Array.from({length: WIDTH}, () => 0)),
        curPlayer: 1,
        currentTrack: 0,
        winner: 0,
        winningTracks: Array<number[]>(),
        history: result.history
      });
    });

    reader.readAsText(files[0]);
  };

  const winningTrack: Set<string> = new Set(status.winningTracks.map((item) => `${item[0]},${item[1]}`));

  return (
    <div className="Board">
      <div className="Tiles">
        {
          status.tiles.map((line, i) => {
            return line.map((item, j) => {
              return (<BoardButton
                key={`r${i}c${j}`}
                keyPos={`${i},${j}`}
                who={item}
                clicked={true}
                winnerExists={status.winner !== 0}
                tracked={status.winner !== 0 ? (winningTrack.has(`${i},${j}`)) : false}
                theme={props.themeButtons}
              />);
            });
          })
        }
      </div>
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
      <ReplayBottom
        curTrack={status.currentTrack}
        maxTrack={status.history.length}
        onClickPrev={prev}
        onClickNext={next}
      />
    </div>
  );
}

export default ReplayBoard;
