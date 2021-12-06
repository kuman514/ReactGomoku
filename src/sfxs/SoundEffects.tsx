const SFXs = {
  player1PutSFX: document.querySelector('#player1PutSFX'),
  player2PutSFX: document.querySelector('#player2PutSFX'),
  resetSFX: document.querySelector('#resetSFX'),
  undoSFX: document.querySelector('#undoSFX'),
  resultSFX: document.querySelector('#resultSFX')
}

function stopSFX(wav: Element | null): void {
  (wav as HTMLAudioElement).pause();
  (wav as HTMLAudioElement).currentTime = 0;
}

function initSFX(): void {
  stopSFX(SFXs.player1PutSFX);
  stopSFX(SFXs.player2PutSFX);
  stopSFX(SFXs.undoSFX);
  stopSFX(SFXs.resetSFX);
  stopSFX(SFXs.resultSFX);
}

function playWav(wav: Element | null): void {
  initSFX();
  (wav as HTMLAudioElement).play();
}

export function playSFX(wavName: string): void {
  switch (wavName) {
    case 'P1PUT':
      playWav(SFXs.player1PutSFX);
      break;
    case 'P2PUT':
      playWav(SFXs.player2PutSFX);
      break;
    case 'UNDO':
      playWav(SFXs.undoSFX);
      break;
    case 'RESET':
      playWav(SFXs.resetSFX);
      break;
    case 'RESULT':
      playWav(SFXs.resultSFX);
      break;     
  }
}
