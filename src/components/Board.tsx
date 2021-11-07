import React, { useState } from 'react';
import BoardButton from './BoardButton';
import Bottom from './Bottom';
import WinnerEffect from './WinnerEffect';

interface BoardProps {
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

function Board(props: BoardProps) {
  // Using React hooks
  const [status, setStatus] = useState({
    tiles: Array.from({length: HEIGHT}, () => Array.from({length: WIDTH}, () => 0)),
    curPlayer: 1,
    history: Array<number[]>(),
    winner: 0,
    winningTracks: Array<number[]>()
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

  const putStone = (row: number, col: number) => {
    if (status.tiles[row][col] !== 0) {
      return;
    }

    const newTiles: number[][] = getNewTiles(row, col, status.curPlayer);
    const newPlayer: number = getNewPlayer(status.curPlayer);

    const [winner, winningTracks] = checkWinner(row, col, newTiles);

    const newHistory = Array.from(status.history);
    newHistory.push([row, col]);

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

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      history: newHistory,
      winner: winner,
      winningTracks: winningTracks
    });
  };

  const undo = () => {
    if (status.history.length === 0) {
      return;
    }

    playSFX(props.undoSFX);

    const newHistory = Array.from(status.history);
    const tmp: number[] | undefined = newHistory.pop();

    if (tmp === undefined) {
      return;
    }

    const [row, col] = tmp;
    if (!isInRange(row, col)) {
      return;
    }

    const newTiles: number[][] = getNewTiles(row, col, EMPTY);
    const newPlayer: number = getNewPlayer(status.curPlayer);

    setStatus({
      tiles: newTiles,
      curPlayer: newPlayer,
      history: newHistory,
      winner: 0,
      winningTracks: Array<number[]>()
    });
  };

  const resetBoard = () => {
    playSFX(props.resetSFX);

    setStatus({
      tiles: Array.from({length: HEIGHT}, () => Array.from({length: WIDTH}, () => 0)),
      curPlayer: 1,
      history: Array<number[]>(),
      winner: 0,
      winningTracks: Array<number[]>()
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

  const saveReplay = () => {
    const replayData = {
      width: WIDTH,
      height: HEIGHT,
      history: status.history
    };

    const file: HTMLAnchorElement = document.createElement('a');
    const fileBlob: Blob = new Blob([JSON.stringify(replayData)], {type: 'json'});
    file.href = URL.createObjectURL(fileBlob);
    file.download = 'replay.json';
    file.click();
  };

  const winningTrack: Set<string> = new Set(status.winningTracks.map((item) => `${item[0]},${item[1]}`));

  return (
    <div className="Board" onClick={(event) => {
      const [row, col] = (event.target as HTMLElement).id.split(',').map((item) => parseInt(item));
      if (Number.isNaN(row) || Number.isNaN(col)) {
        return;
      }

      putStone(row, col);
    }}>
      <div className="Tiles">
        {
          status.tiles.map((line, i) => {
            return line.map((item, j) => {
              return (<BoardButton
                key={`r${i}c${j}`}
                keyPos={`${i},${j}`}
                who={item}
                clicked={item !== 0}
                winnerExists={status.winner !== 0}
                tracked={status.winner !== 0 ? (winningTrack.has(`${i},${j}`)) : false}
                theme={props.themeButtons}
              />);
            });
          })
        }
      </div>
      <Bottom
        info={
          status.winner !== 0 
          ? `Player ${status.winner} wins!`
          : (status.history.length === HEIGHT * WIDTH
            ? 'Draw!'
            : `Player ${status.curPlayer}'s turn!`)
        }
        onClickUndo={undo}
        onClickReset={resetBoard}
        onClickSaveReplay={saveReplay}
      />
      {
        (status.winner !== 0)
        ? <WinnerEffect
            winner={status.winner}
          />
        : ''
      }
    </div>
  );
}

export default Board;
